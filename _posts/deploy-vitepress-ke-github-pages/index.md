---
title: Deploy VitePress ke Github Pages
excerpt: Melakukan deployment VitePress ke Github pages sedikit membingungkan, namun saya berhasil melakukan hack sederhana.
date: '2021-03-05T13:11:58.682Z'
previewImage: https://pbs.twimg.com/media/EvpN9nRXcAAk2M4?format=jpg&name=4096x4096
lang: English
---

Saya mencoba melakukan deployment Vitepress ke Github pages kemarin (4 maret 2021). Langsung saya lihat ke dokumentasi Vitepress, cukup straightfoward docsnya. 

Tinggal menambahkan file bash `deploy.sh` untuk melakukan deployment.

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

Lalu tinggal menjalankan script bashnya `sh deploy.sh`.

TADA!!!

Ternyata belum bisa muncul. Malah code Vitepress saya di-overwrite dengan code hasil build Vitepress.

Dua jam saya stuck di sini, mencari ke berbagai tempat namun tidak menemukan solusinya.

Karena waktu sudah menunjukan pukul 10 PM dan saya ingin tidur, maka saya cermati kembali code `deploy.sh` dan mungkin cara ini bisa dilakukan untuk sementara waktu sambil menuggu cara yang benar.

Mari menuju code berikut ini:

```
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

Karena pada percobaan tadi ternyata code Vitepress saya di-overwrite, maka cara cepatnya saya bikin branch baru saja khusus untuk deployment hasil Vitepress buildnya.

Jadinya seperti ini:

```
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages-deploy
```

Lalu masuk ke setting repositori, kemudian ubah branch untuk Github page ke `gh-pages-deploy`.

🎉🎉 Happy coding!!!

Jangan lupa tengok https://initbase.github.io/vue-modal-2/
