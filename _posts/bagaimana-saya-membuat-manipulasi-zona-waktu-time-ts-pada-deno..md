---
title: Bagaimana Saya Membuat Manipulasi Zona Waktu Time.ts pada Deno
excerpt: Deno baru saja meluncur pada bulan May 2020 lalu, namun hypenya sudah
  begitu terasa dikalangan JS/TS developer. Ratusan library / module sudah
  langsung muncul sejak hari pertama Deno dirilis.  Namun sepertinya untuk
  manipulasi timezone masih belum mendukung, dan lahirlah Time.ts.
date: '2020-06-07T02:11:58.682Z'
previewImage: /img/posts/time.ts-mod.jpg
---
Deno baru saja meluncur pada bulan May 2020 lalu, namun hypenya sudah begitu terasa dikalangan JS/TS developer. Ratusan library / module sudah langsung muncul sejak hari pertama Deno dirilis. Sampai saat ini saya sudah meliihat lebih dari sepuluh web framework Deno yang sudah dibuat oleh komunitas. Yang paling populer adalah [Oak Server](https://deno.land/x/oak) namun karena saya tidak mau mainstream seperti orang lain maka saya memilih menggunakan [Attain web middleware framework](https://deno.land/x/attain), untuk itu saya juga membuat web project started untuk Attain framework, [Denamo](https://github.com/burhanahmeed/Denamo).

Namun saya tidak akan membahas hal ini, mungkin akan dibahas di tulisan yang lainnya.

Tiba-tiba kepikiran untuk bikin module untuk datetime, ya meskipun sudah ada momenJS di Deno. Namun sepertinya untuk manipulasi timezone masih belum mendukung, dan lahirlah [Time.ts](https://deno.land/x/time.ts).

Untuk saat ini **Time.ts** tidak mendukung untuk melakukan manipulasi format datetime namun kedepannya saya agendakan untuk membuat sedikit datetime manipulation. 

Pada dasarnya cara kerja Time.ts ini sangat simple sekali cukup ambil waktu UTC saat ini dengan menggunakan `new Date() `seperti pada javascript biasa dan dari situ saya mendapatkan waktu **UTC** atau **GMT+0**. Kemudian ubah menjadi format *milisecond* dengan menggunakan `getTime()`.

```javascript
let getUTCDate = new Date().getTime()
// we will get current UTC time in milisecond format.
```

Okay, setelah mendapakan waktu saat ini versi UTC, selanjutnya saya akan mendapatkan waktu saat ini untuk zona waktu saya sendiri, yaitu di **GMT+7**. Karena GMT+7 maka selisih waktu saya dengan UTC adalah overlap 7 jam atau kalau kalau dari zona waktu saya ke UTC adalah -7 jam, benar?

Maka secara program, saya perlu mendapatkan offset waktu saya saat ini ke UTC yaitu dengan `new Date().getTimezoneOffset()`. Lalu saya akan mendapatkan selisih menit waktu saya saat ini ke UTC yaitu  `-7 * 60 menit = -420` dan dari menit itu saya akan convert ke dalam format milisecond agar bisa dijumlahkan. Oh iya dengan menggunakna getTimezoneOffset ini akan menghitung jarak menit **waktu server** kalian ke waktu UTC. Jadi waktu server, **bukan** waktu PC kalian.

```javascript
let getUTCDate = new Date().getTime();
// we will get current UTC time in milisecond format.

let TIME_IN_MILISECOND = 60000;

let getTimeDiff = new Date.getTimezoneOffsite();
// -420
let convertToMs = getTimeDiff * TIME_IN_MILISECOND;

let getMyTime = new Date(getUTCDate - convertToMs).toISOString();
//it returns time in my timezone GMT+7

/**
 - Why minus ( - ) ? well actually it's a plus ( + )
    we also can do this.
    convertToMs *= -1
    new Date(getUTCDate + convertToMs)
*/

```

Lalu bagaimana bila saya ingin mendapatkan zona waktu lainnya misalkan Singapura? Perlu kita lihat dulu Singapura adalah **GMT + 8**, maka overlap 8 jam dari UTC. Mudah saja, tinggal tambahkan waktu UTC milisecond degan 8 jam dalam format milisecond.

```javascript
let SGOverlap = 8 * 60 * 60000;

let UTCTime = new Date().getTime();

let SGTime = new Date(UTCTime + SGOverlap).toISOString();
```

## Time.TS

Untuk menggunakan Time.ts mudah saja tinggal *import* project time.ts.

```javascript
import { Time, timezone } from "https://denopkg.com/burhanahmeed/time.ts/mod.ts";
//or
import { Time, timezone } from "https://deno.land/x/time.ts/mod.ts";
//or
import { Time, timezone } from "https://denoland.id/x/time.ts/mod.ts";
```

Lalu untuk contoh codenya adalah seperti berikut ini.

```javascript
import { Time } from "https://denopkg.com/burhanahmeed/time.ts/mod.ts";

console.log('Jakarta Timezone: ', new Time().timezone('Asia/Jakarta'))
//Jakarta Timezone:  2020-06-06T20:21:14.765Z

console.log('Singapore Timezone: ', new Time().timezone('Asia/Singapore'))
//Singapore Timezone:  2020-06-06T21:21:14.766Z

console.log('Jakarta Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Jakarta'))
//Jakarta Timezone:  2020-06-06T14:33:12.000Z

console.log('Singapore Timezone: ', new Time('2020-06-06 14:33:12').timezone('Asia/Singapore'))
//Singapore Timezone:  2020-06-06T15:33:12.000Z

console.log('UTC timezone: ', new Time().utc)
//UTC timezone:  2020-06-06T13:21:14.766Z

console.log('Now timezone: ', new Time().now)
//Now timezone:  2020-06-06T20:21:14.766Z
```

Kedepannya semoga saya ada waktu untuk mengembangakan module ini lebih jauh lagi. Bila menemukan suatu masalah bisa submit issue di [github Time.ts](https://github.com/burhanahmeed/time.ts).

Jangan lupa juga coba boilerplate [Denamo](https://github.com/burhanahmeed/Denamo) saya.