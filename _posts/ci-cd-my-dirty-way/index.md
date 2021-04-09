---
title: "Personal Notes (English): Doing Gitlab CI CD In My Dirty Way"
excerpt: My personal notes about CI CD and DevOps stufss in a dirty way.
date: '2021-04-08T13:11:58.682Z'
previewImage: https://deanna.dev/images/cicd.png
---


I was going to setup Gitlab CI CD pipeline and also doing automatically database backup as for now I am using on-premise MySQL (installed inside my EC2). I call it 'dirty' because I didn't know how to do it properly, I didn't know how companies set it up. I never worked at tech giants, never worked at FAANG.

## Database Backup

Having database installed on EC2 instance was my concern, I fear about losing the data so need to back it up manually everyday and I am sick of it.

So basically need to SSH to server and did manually 

```bash
mysqldump -u USER -p PASS --opt --routines --skip-extended-insert --force "DB_NAME" > "<FILE NAME>"
```

I created a script to automate it. I am using Git repository to store the DB dump files. Use croonjob/crontab to continuously run the script. 

So the concept basically is I set cron to run every 1 hour > clean working branch with `git checkout .` > get latest git changes if any > dump db > push to repo.

So here is my dirty script I copied from other source.

```sh
#!/bin/bash

##
# MySQL DB dump to Git commit
# 
# Dumps the specified mysql database to the given location and commits it and
# the previous database to the Git repository.
#
# It is assumed you have already setup the Git respository to only be the 
# a checkout of the database backup location
# 
# To do that (in the repository): 
# $ git config core.sparsecheckout true
# $ echo sql-backup/ > .git/info/sparse-checkout
# $ git read-tree -m -u HEAD
#
# Author:	Aaron Gustafson, Easy-Designs LLC
# Copyright:	Copyright (c) 2011 Easy-Designs LLC
# Since:	Version 0.1
##

# init SSH agent
eval $(ssh-agent -s)

# add your private key
ssh-add ~/.ssh/id_rsa

# path to Git repository
REPO_PATH="~/backup-database"
REPO_BRANCH="master"

# database settings
DB_NAME="DB NAME"
DB_USER="root"
DB_PASS="PASS"

FILENAME=${DB_NAME}"_new".sql
NOW=$(date +"%b%d-%Y-%H%M%S")


# clear all changes
git checkout .

# svn up the content
# cd $REPO_PATH
git pull --quiet

# dump the database using the mysql administrator - so we can see all dbs
mysqldump -u$DB_USER -p$DB_PASS --opt --routines --skip-extended-insert --force "${DB_NAME}" > "${FILENAME}"

# add everything we have - will throw a warning the dbname.sql already is added but its fine
git add .
# commit
git commit --quiet -m "SQL Database Dump "$NOW
# push
git push --quiet origin $REPO_BRANCH
```

Oh ya before run that scrip above, create a repo to store the db dump. My repo consist of some files, db dump, db backup script, index.js to run Nodejs cronjob.

```
|- db_backup.sql
|- index.js
|- backup.sh
|- package.json
```

Now we move to Gitlab. Create `id_rsa` with passphaseless (without passphase) to authenticate with Gitlab.

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Don't forget adding it to `authorized_keys`. `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`. If you don't it's okay 🙃.

Add it to Gitlab SSH KEYS [https://gitlab.com/-/profile/keys](https://gitlab.com/-/profile/keys). Add your public keys. `cat ~/.ssh/id_rsa.pub` then copy it and paste to Gitlab.

Now I can run the cronjob for doing database backup automatically.


## Staging Gitlab CI CD to AWS EC2

Please ignore if you don't see any test here 😂. Don't tell anyone 😂.

It was frustrating, spent 8 hours to make it works, finnaly I managed to do it.

Everything is similar like step above (db backup). Create passphaseless SSH KEY pair.

Don't forget adding it to `authorized_keys`. `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`. This one you need to add it 😇.

Add it to Gitlab SSH KEYS [https://gitlab.com/-/profile/keys](https://gitlab.com/-/profile/keys). Add your public keys. `cat ~/.ssh/id_rsa.pub` then copy it and paste to Gitlab.

O ya, for this case my database backup server is different with thi CICD server so I need create new SSH KEY pair.

Looks good, onto the next steps.

CICD in Gitlab, I need to create YML file in root directory of my repo.

I followed [this article](https://adhasmana.medium.com/how-to-deploy-node-js-app-on-aws-with-gitlab-24fabde1088d) with my own modification.

Don't forget to add `DEPLOY_SERVERS` and `PRIVATE_KEY` to Gitlab CICD variable.

> DEPLOY_SERVERS = my ip server
>
> PRIVATE_KEY = my SSH private key which I created in step above.

__.gitlab-ci.yml__

```yml
# Node docker image on which this would be run
image: node:14.5.0

#This command is run before actual stages start running
before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - npm i
    - echo $DEPLOY_SERVERS

stages:
    - test
    - deploy

lint: 
    stage: test
    script:
        - npm run prettier

deploy-stage: 
    image: node:14.5.0
    only: 
        - staging-dev
    stage: deploy
    script:
        - bash deploy/deploy.sh
```

Look no test [kan](https://www.babla.co.id/bahasa-indonesia-bahasa-inggris/kan) 🤣?

I had no idea what to put in `test` stage so I put `prettier` there.

I only want deploy stage run when there is a push to `staging-dev branch`

__deploy.sh__

```bash
#!/bin/bash

# any future command that fails will exit the script
set -e

# add private key to .pem file
echo  -e "$PRIVATE_KEY" > stage.pem
chmod 600 stage.pem

# disable the host key checking.
chmod +x ./deploy/disableHostKeyChecking.sh
./deploy/disableHostKeyChecking.sh

ssh -i "stage.pem" ubuntu@$DEPLOY_SERVERS 'bash -s' < ./deploy/updateAndRestart.sh

```

__disableHostKeyChecking.sh__

```bash
# This the the prompt we get whenever we ssh into the box and get the message like this
#
# The authenticity of the host 'ip address' cannot be verified....
#
# Below script will disable that prompt

# note ">>". It creates a file if it does not exits.
# The file content we want is below
#
# Host *
#   StrictHostKeyChecking no
#

# any future command that fails will exit the script
set -e
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config
```

__updateAndRestart.sh__

```bash
#!/bin/bash

# any future command that fails will exit the script
set -e

cd /home/ubuntu/staging-api

# init SSH agent
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa

git checkout .

git pull gitlab staging-dev

echo which node
echo which npm
echo which pm2

PATH="/home/ubuntu/.nvm/versions/node/v14.5.0/bin:$PATH";

echo "RUN INSTALL DEPS"

# /home/ubuntu/.nvm/versions/node/v14.5.0/bin/npm i
npm i

echo "RESTART PM2"

# /home/ubuntu/.nvm/versions/node/v14.5.0/bin/pm2 restart all
pm2 restart all
```

If I remove `PATH="/home/ubuntu/.nvm/versions/node/v14.5.0/bin:$PATH";`, they will not recognize `npm` and `pm2` command. So need to have it. use `which npm` or/and `which pm2` to know where your `npm` and `pm2` command are located. 

So I think it should be working now.