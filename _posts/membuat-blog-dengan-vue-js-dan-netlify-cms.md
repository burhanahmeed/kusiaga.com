---
title: "Belajar VueJS: Membuat Blog dengan VueJS dan NetlifyCMS."
excerpt: Ada banyak pilihan teknologi yang dapat digunakan dalam membuat sebuah
  Blog, bila tidak ingin repot bisa menggunakan Jekyll, Hugo, Gatsby, atau
  VuePress. Namun kali ini saya akan menggunakan VueJS namun bukan VuePress
  melainkan Gridsome.
date: '2020-04-25T17:00:00.000Z'
previewImage: /img/posts/external-content.duckduckgo.com.jpeg
---

Jika dulu bila ingin membuat sebuah website atau blog biasanya menggunakan Wordpress atau Blogspot, benar? Namun sekarang ini pendekatan yang dapat digunakan untuk membuat sebuah blog sangat banyak selain menggunakan Wordpress atau Blogspot. Salah satunya dengan hadirnya teknologi modern framework yang dapat di*convert* menjadi *static site.* Ada banyak pilihan teknologi yang dapat digunakan dalam membuat sebuah Blog, bila tidak ingin repot bisa menggunakan Jekyll, Hugo, Gatsby, atau VuePress. Namun kali ini saya akan menggunakan VueJS namun bukan VuePress melainkan Gridsome.

### **Lets get started!**

**Prerequisite:**

* Tahu sedikit VueJS/NuxtJS
* Tahu sedikit GraphQL
* Akun Github
* Akun Netlify
* Gridsome membutuhkan [Node.js](https://nodejs.org/) (v8.3+) dan juga NPM (saya pakai ini) atau YARN. 

**Apa itu Gridsome?**

Baca sendiri [disini](https://gridsome.org/docs/) yha. Dev yang baik harus pandai baca dokumentasi, jangan cuma mengandalkan stackoverflow. 😜

**Install GridsomeCLI**

Bila anda sudah pernah atau biasa pakai CLI apa itu React, Vue, atau Nuxt CLI maka Gridsome juga punya CLInya. Dengan adanya CLI ini maka dapat memudahkan dalam melakukan instalasi Gridsome jadi setelah install tinggal langsung pakai deh. Mau tanpa CLI bisa juga, tapi ya harus pasang struktur foldernya sendiri, udah daripada ribet pake CLI aja.

NPM

`npm install --global @gridsome/cli`

Yarn

`yarn global add @gridsome/cli`

Lalu tinggal install project Gridsomenya di directory yang anda mau. Ikuti command dibawah ini.

1. `gridsome create my-gridsome-site`untuk membuat projek Gridsome baru.
2. Kemudian buka directory projek Gridsome anda dan buka terminal
3. Lalu gunakan command `gridsome develop` untuk memulai server development project anda.

*Okay All is set,* project Gridsome anda sudah bisa digunakan. Tapi *objective* kita adalah membuat blog dengan menggunakan NetlifyCMS, benar?

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── About.vue
    └── templates/
```

Strultur folder yang berhasil dibuat adalah seperti ini. Cukup mirip dengan NuxtJS. File `Index.vue`pada `src/pages` digunakan sebagai entry file dimana ini akan menjadi root URL `localhost:8080/`. 

Sampai disini anda bisa melakukan modifikasi pada `Index.vue` dan `About.vue` lalu setelah ini upload project anda ke Github. Ikuti langkahnya [disini](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line) untuk upload ke repo. 

Setelah upload ke Giithub, sekarang saatnya deploy project ke [Netlify](https://www.netlify.com/). Gampang kok tinggal klik-klik aja jika udah anda akan mendapatkan alamat website anda dari Netlify.

**Menghubungkan Dengan Netlify CMS**

Dari dokumentasi dari Gridsome sudah sangat jelas untuk menghubungkan project Gridsome dengan Netlify CMS. Bacanya bisa mulai dari [sini](https://gridsome.org/docs/guide-netlify-cms/#install-the-required-dependencies).

Udah? Sipp

**Membuat List Blog Post**

Setelah semua diatas selesai, anda bisa login melalui `{alamat web anda}/admin` dan anda sudah bisa posting post blog pertama anda.

![CMS Netlify](/img/posts/screenshot-from-2020-04-26-13-33-09.png "Dashboard Netliy CMS")

Setelah anda menambahkan NetlifyCMS maka struktur folder anda menjadi seperti berikut ini bukan?

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
|   └── uploads
├── posts/
└── src/
    ├── main.js
    ├── admin/
    │   ├── config.yml
    |   ├── index.js
    │   └── index.html
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   ├── Blog.vue (Tambahkan file ini)
    │   └── About.vue
    └── templates/
```

Untuk membuat halaman list blog post, maka tambahkan file `Blog.vue` pada folder pages. Halaman ini sebagai halaman yang akan menampilkan list dari postingan blog yang telah kita buat.

Isi dari `Blog.vue`. Untuk CSSnya anda bisa bikin sendiri ya.

```javascript
<template>
    <Layout>
        <h1>Blog</h1>
        <div class="content-wrapper">
          <template v-for="(p, idx) in $page.Post.edges">
            <g-link :to="p.node.path" :key="idx">
                <div class="item">
                  <h4>{{ p.node.title }}</h4>
                  <span><small>Posted from {{ p.node.date }}</small></span>
                  <p>{{ p.node.excerpt }}</p>
                </div>
            </g-link>
          </template>
        </div>
    </Layout>
</template>
```

Seletelah itu, masih berada di file yang sama `Blog.vue`, kita tambahkan script buat query graphQL untuk mendapatkan data dari folder `/posts`. Tambahkan dibawah `</template>`. 

```plsql
<page-query>
query {
  Post: allPost (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        excerpt
        date
        path
      }
    }
  }
}
</page-query>
```

Sampai disini seharusnya daftar postingan blog sudah muncul.



**Membuat Single Page Blog Post**

Jika diatas tadi halaman akan memunculkan list postingan blog, maka halaman ini akan memunculkan postingan blog yang diklik dari list diatas. 

Pada langkah ini kita akan membutuhkan [template](https://gridsome.org/docs/templates/). 

Mari menuju `gridsome.config.js`

```javascript
// gridsome.config.js

module.exports = {
  ....
  
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/other/location/Post.vue'
      }
    ]
  }
}
```

Kemudian buat file `Post.vue` didalam folder `/src/templates/Post.vue `

```javascript
//Post.vue

<template>
  <Layout>
    <div class="information">
      <h2>{{ $page.post.title }}</h2>
      <span>Date posted: {{ $page.post.date }}</span>
      <!-- <span>Date posted: {{ $page.post.date | date_format }}</span> -->
    </div>
    <div class="content">
      <div class="markdown-body main-c" v-html="$page.post.content"/>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    date
    content
    excerpt
  }
}
</page-query>
```

Tambahan -> 

Mari jangan kita abaikan faktor SEO, yaitu `title` dan `metatags` untuk single page ini. Masih pada halaman `Post.vue` kita tambahkan` metaInfo` dibawah `</page-query>`.

```javascript
//Post.vue

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title + ' - Gridsome' },
      ],
    }
  }
};
</script>
```

Sampai langkah ini seharusnya halaman untuk per postingan sudah bisa diakses dan perjumpaan kita sampai disini. Semoga tidak ada yang terlewat, jika ada sesuatu bisa komentar dibawah ini.