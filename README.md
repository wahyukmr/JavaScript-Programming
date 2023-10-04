<h1 align="center"> :clipboard: Notes </h1>

</br>

<details><summary>

## [Fundamentals-Part-1](https://github.com/wahyukmr/JavaScript-Programming/blob/master/01-Fundamentals-Part-1/script.js)

</summary>

### ~ INTRODUCATION OF JAVASCRIPT :

<strong>JavaScript is a High-Level, Object-oriented, Multi-paradigm programming language.</strong>

- **Programming language** hanyalah alat yang memungkinkan kita untuk menulis kode yang akan memerintahkan komputer untuk melakukan sesuatu.
- **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer.
- **Object-oriented** berarti bahasa tersebut sebagian besar didasarkan pada konsep objek untuk menyimpan sebagian besar jenis data.
- **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.

### ~ TYPE CONVERSION AND COERCION :

Type Conversion atau Type Coercion adalah konversi nilai dari tipe data yang berbeda dan menentukan mana yang memiliki posisi lebih tinggi untuk dieksekusi terlebih dahulu.

- **Type Conversion**, ketika kita secara menual mengonversi dari satu tipe data ke tipe lainnya.
- **Type Coercion**, terjadi setiap kali operator berurusan dengan dua nilai yang memiliki tipe data berbeda, Jadi javascript dibalik layar mengonversi salah satu nilai agar sesuai dengan nilai lainnya sehingga operasi dapat dijalankan.

### ~ TRUTHY AND FALSY :

Operator Truthy dan falsy adalah konsep dalam JavaScript yang menentukan apakah suatu nilai dianggap true atau false dalam konteks logika.

- **Truthy operator** adalah nilai yang dianggap true dalam kondisi logika, seperti angka selain 0, string yang tidak kosong, objek, array, dan nilai true itu sendiri.

- **Falsy operator** adalah nilai yang dianggap false dalam kondisi logika, seperti angka 0, string kosong, null, undefined, NaN, dan nilai false itu sendiri.

Ketika menggunakan operator logika pada if atau while, nilai yang dianggap falsy akan dianggap sebagai false, sedangkan nilai yang dianggap truthy akan dianggap sebagai true. Konsep truthy dan falsy operator ini berguna untuk mengevaluasi nilai yang dihasilkan dari ekspresi atau fungsi yang kompleks, serta membantu pengembang dalam menulis kode yang lebih efisien dan mudah dibaca.

### ~ STATEMENTS AND EXPRESSIONS

**Expressions** adalah sebuah kode yang menghasilkan nilai atau representasi dari nilai itu sendiri. Expression bisa berupa nilai tunggal, operasi matematika, atau pemanggilan fungsi. Contoh:

    let z = 1 + 2; // Ini adalah sebuah expression yang menghasilkan nilai 3 dan menyimpannya pada variabel z.
    let x = 3; // Ini juga sebuah expression yang memberi nilai 3 pada variabel x.

**Statements** adalah sebuah intruksi yang melakukan tindakan tertentu. Statement bisa berupa deklarasi variabel, perulangan, atau percabangan. Contoh:

    let x; // Ini adalah sebuah statement deklarasi variabel

    for (let i = 0; i < 5; i++) { // Ini adalah sebuah statement perulangan
        console.log(i);
    }
    if (x === 3) { // Ini adalah sebuah statement percabangan
        console.log("Nilai x sama dengan 3");
    }

Perbedaan utama antara expression dan statement adalah bahwa **expression menghasilkan nilai**, sedangkan **statement melakukan tindakan**. Selain itu, expression dapat digunakan sebagai bagian dari statement.

</details>

<details> <summary>

## [Fundamentals-Part-2](https://github.com/wahyukmr/JavaScript-Programming/blob/master/02-Fundamentals-Part-2/script.js)

</summary>
  
### ~ ACTIVATING STRICT MODE :

Selalu gunakan **_'use strict'_** untuk membantu men-debug code.

### ~ REVIEWING FUNCTIONS :

Tiga perbedaan cara menulis fungsi, tetapi semua bekerja dengan cara yang sama (menerima input data, mengubah data, dan kemudian mengeluarkan data).

1. **Fuction declaration**

   Fuction declaration merupakan fungsi yang dapat dipanggil sebelum atau setelah dideklarasikan, karena ada konsep "Hoisting" di javaScript.

   Situasi yang tepat untuk menggunakan function declaration:

   - ketika ingin membuat fungsi utama yang akan digunakan di seluruh program. Sehingga dapat memanggilnya sebelum dideklarasikan.
   - ketika ingin mempermudah hoisting dan membuat code terlihat lebih teratur dengan mendeklarasikan semua fungsi di awal program.

2. **Function expression**

   Fungsi ditugaskan ke variabel tertentu. Variabel tersebut kemudian dapat digunakan untuk memanggil fungsi tersebut. Function expression harus didefinisikan sebelum dipanggil, karena variabel harus dideklarasikan terlebih dahulu sebelum digunakan.

   Situasi yang tepat untuk menggunakan function declaration:

   - ketika ingin memberikan fungsi sebagai argument ke fungsi lain (callback function).
   - ketika ingin membuat fungsi local yang hanya akan digunakan dalam blok if atau loop.
   - ketika ingin menggunakan fungsi seperti fungsi anonymous atau arrow function.

3. **Arrow function**

   Arrow function adalah cara lain untuk mendeklarasikan fungsi di JavaScript. Mereka memberikan sintaksis yang lebih ringkas dan memiliki perilaku khusus terkait penjelajahan "this" dibandingkan dengan fungsi biasa.

   Arrow function tidak memiliki konteks "this" sendiri, mereka mengikuti konteks "this" dari scope di sekitarnya.

   Situasi yang tepat untuk menggunakan function declaration:

   - arrow function sering digunakan dalam fungsi callback atau ketika ingin menulis fungsi yang lebih pendek dan ringkas.
   - jika fungsi hanya me-return satu baris statement, kita dapat menghilangkan tanda kurung kurawal dan kata kunci "return" untuk menulisnya lebih ringkas.
   - jika perlu mendefinisikan fungsi anonymous, misalnya sebagai argumen langsung ke method atau sebagai fungsi yang akan langsung dipanggil.

Meskipun JavaScript memungkinkan pemanggilan fungsi sebelum dideklarasikan, disarankan untuk memanggil fungsi setelah dideklarasikan untuk menjaga kejelasan code.

Tidak ada masalah dalam menggunakan ketiga pendekatan tersebut dalam satu file atau code, selama dapat memahami perbedaan dan memastikan penggunaannya sesuai dengan kebutuhan.

### ~ BREAKING AND CONTINUING :

- **continue** berarti keluar dari iterasi loop saat ini dan melanjutkan ke loop selanjutnya.

- **break** digunakan untuk sepenuhnya mengakhiri seluruh loop.

### ~ LOOPING :

Berikut penjelasan mengenai beberapa jenis looping di JavaScript.

1.  **For Loop:**

    digunakan untuk mengulang sejumlah iterasi yang diketahui sebelumnya. Biasanya digunakan untuk melakukan iterasi pada tipe data array dengan menggunakan indeks sebagai variabel pengontrol.

    beberapa contoh penggunaan For loop:

    - mengulangi setiap elemen dalam sebuah array dan melakukan operasi pada setiap elemen.

          const numbers = [1, 2, 3, 4, 5];

          for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
          }

    - mengulang sejumlah kali dan melakukan operasi pada setiap iterasi.

          for (let i = 0; i < 10; i++) {
            console.log(i);
          }

    - mengulang setiap karakter dalam sebuah string.

          const str = 'JavaScript';

          for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
          }

    - mengulang setiap elemen dalam array multidimensi.

          const matrix = [
            [1, 2],
            [3, 4],
            [5, 6]
          ];

          for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
              console.log(matrix[i][j]);
            }
          }

2.  **while Loop:**

    While loop sering digunakan ketika kita tidak tahu berapa kali kita ingin melakukan pengulangan, tetapi kita tahu kondisi kapan pengulangan akan berhenti.

    Beberapa contoh penggunaan while loop:

    - melakukan pengulangan selama kondisi terpenuhi.

          let i = 0;
          while (i < 10) {
            console.log(i);
            i++;
          }

    - membaca input dari pengguna hingga input yang benar diberikan.

          let input;
          while (input !== 'yes') {
            input = prompt('Apakah kamu yakin ingin melanjutkan?');
          }

    - mengakses data pada sebuah array dengan index.

          const numbers = [1, 2, 3, 4, 5];
          let i = 0;
          while (i < numbers.length) {
            console.log(numbers[i]);
            i++;
          }

    - melakukan proses tertentu selama kondisi terpenuhi.

          let count = 0;
          while (count < 10) {
            console.log('Ini adalah iterasi ke-', count);
            count++;
          }

3.  **do-while Loop:**

    Do-while loop digunakan ketika kita ingin menjalankan blok kode setidaknya satu kali dan kemudian mengecek kondisi pengulangan.

    Beberapa contoh penggunaan do-while loop:

    - validasi input dari user.

          let number;
          do {
            number = parseInt(prompt("Enter a positive number: "));
          } while (isNaN(number) || number <= 0);

          console.log("Valid number entered: ", number);

    - menjalankan kode setidaknya satu kali, bahkan jika kondisi yang diuji pada awal loop tidak terpenuhi.

          let count = 0;
          do {
            console.log("The count is: ", count);
            count++;
          } while (count < 5);

</details>

<details> <summary>

## [Developer-Skills](https://github.com/wahyukmr/JavaScript-Programming/blob/master/03-Developer-Skills/script.js)

</summary>

### ~ 4 STEP TO SOLVE ANY PROBLEM :

1. Pastikan untuk memahami 100% masalahnya. **_ajukan pertanyaan yang tepat_** untuk mendapatkan gambaran yang jelas tentang masalah yang dihadapi.
2. **_Membagi masalah_**, memecah masalah besar menjadi sub-masalah yang lebih kecil.
3. Jangan takut untuk melakukan **_research_** pada setiap masalah (Google, stackoverflow, MDN web docs,...).
4. Untuk masalah yang lebih besar, **_tulis pseudo-code_** atau rancangan program sebelum menulis kode yang sebenarnya.

### ~ THE DEBUGGING PROCESS :

1. **Identify**

   - Mengidentifiksinya selama proses development.
   - Mengidentifiksinya melalui testing software.
   - Report dari pengguna (user) selama production.
   - Context: browsers, user, etc.

2. **Find**

   - Mencari bug melalui **developer console** (simple code).
   - Mencari bug melalui **Debugger** (complex code).

3. **Fix**

   - Memperbaiki bug yang didapat dengan mengubah solusi yang salah dengan solusi yang benar.

4. **Prevent** (Mencegahnya agar tidak terjadi lagi)

   - Mencari bug yang kemungkinan atau sama didalam code.
   - Menulis test menggunakan testing software.

   </details>

<details> <summary>

## [DOM and Events](<https://github.com/wahyukmr/JavaScript-Programming/blob/master/04-Dom-And-Events-Fundamental-(Project#1-Guess-My-Number)/script.js>)

</summary>

### ~ DOM (Document Object Model) :

**DOM** adalah Struktur yang merepresentasikan html documents. Memungkinkan javascript untuk mengakses elemen html dan memanipulasi style (mengubah teks, atribut html dan bahkan gaya CSS nya).

**DOM bukanlah javascript**, melainkan bagian dari Web API. Jadi, methods dan properti untuk memanipulasi DOM bukan bagian dari JavaScript, tetapi dapat berinteraksi dengan javascript.

**Tipe data yang terdapat pada DOM**:

1.  **Document**

    merupakan representasi dari halaman web.

    dalam satu web, terdapat satu document, dan kita tidak perlu membuatnya secara menual, karena otomatis akan ada di browser.

    **Document Object** adalah cara untuk mengakses document, dengan menggunakan kata kunci "document".

          console.log(document);

          // output:
          <!DOCTYPE html>
          <html>
            <head></head>
            <body></body>
          </html>

    **Document Property**, property dalam document bisa digunkan untuk melihat semua data yang terdapat dalam document halaman web. Contoh:

          console.log(document.title);
          console.log(document.head);
          console.log(document.body);

    **Document Method**, banyak method yang terdapat di document digunakan untuk memanipulasi data DOM, misal membuat Node, Element, Attribute atau mengambil dan menyeleksi Node di dalam document. Contoh menyeleksi attribute id dalam element:

          // contoh mendapatkan id "getId"
          console.log(document.getElementById("getId");

2.  **Node**

    node adalah base class untuk semua tipe data di DOM, seperti document, element, dan Attr.

    artinya semua fitur yang dimiliki di Node akan dimiliki juga oleh turunannya.

    node dalam DOM itu bentuknya adalah tree, artinya dengan Node kita bisa melihat **Parent** (induk node), **Children** (anak node), dan **Sibling** (node yang bersebelahan / se-level).

    **Node Method**, method di Node bisa digunakan untuk memanipulasi data Node didalam Node tersebut. Misalnya menghapus Node children :

        <ul id="menu">
            <li id="first">First</li>
            <li id="second">Second</li>
        </ul>
        <script>
            const menu = document.getElementById("menu");
            menu.removeChildren(document.getElementById("first"));
        </script>

3.  **Element**

    element merupakan Node yang berbentuk element dihalaman web, misal: head, body, form, dll.

    contoh menambahkan konten di element H1:

        <h1 id="title"></h1>

        <script>
            const title = document.getElementById("title");
            title.textContent = "Belajar JavaScript";
        </script>

    **Element Property**, karena element adalah turunan dari Node, semua property Node pun bisa digunakan di element.

    **Element Method**, karena element adalah turunan dari Node, semua method Node pun bisa digunakan di element.

4.  **NodeList**

    NodeList merupakan array/collection atau kumpulan dari Node.

    biasanya NodeList digunakan ketika kita menyeleksi banyak Node sekaligus, misal ketika kita ingin mengambil semua children di Node misalnya.

    NodeList memiliki 2 tipe, yaitu **live** dan **static**.

    **live**, artinya perubahan yang terjadi pada NodeList nya, akan merubah semua NodeList yang sama. Contohnya saat kita menggunakan `element.chiidNodes`, NodeList tersebut bersifat live.

    **Static**, artinya perubahan yang terjadi pada NodeList nya, tidak akan merubah semua NodeList yang sama. Contohnya saat kita menggunakan `document.querySelectorALl()`, NoteList tersebut bersifat static.

5.  **Attr / Attribute**

    attr / attribute merupakan representasi dari attribute sebuah element. Singkatnya attr / attribute bisa dikatakan sebagai key-value, key nya adalah nama attribute dan value nya adalah value attribute. Contoh mendapatkan nama dan value attribute:

        <img id="example" src="https://example.com" alt="example">

        <script>
          imageId = document.getElementById("example");
          attribute = imageId.getAttributeNode("src");

          console.log("attribute.name"); // get name of attribute
          console.log("attribute.value"); // get value of attribute
        </script>

    **Attr Value**, dalam kebanyakan kasus kita langsung ingin mendapatkan value attribute. Untuk mendapatkan value attribute secara langsung menggunakan method `getAttribute("nameAttr")` di element. Contohnya:

        <img id="example" src="https://example.com" alt="example">

        <script>
          imageId = document.getElementById("example");
          attrValue = imageId.getAttribute("src");

          console.log("attrValue");
        </script>

    **Membuat attribute**, untuk membuat attribute bisa menggunakan `document.createAttribute("nameAttr")`. Lalu untuk menambahkannya ke element menggunakan `element.setAttributeNode(attribute)`. Atau bisa juga langsung membuat attribute dengan name dan value nya sekaligus menggunakan `document.setAttribute(name, value)`.

        <img id="example">

        <script>
          const image = document.getElementById("example");

          const addAttr = image.setAttribute("src", "http://example.com");
        </script>

6.  **NamedNodeMap**

    namedNodeMap merupakan kumpulan atau collections yang berisikan attribute dalam bentuk Map. Mirip seperti NodeList, namun isinya adalah attribute. Contoh:

        <img id="example" src="https://example.com" alt="example image">

        <script>
          const image = document.getElementById("example");
          const attributes = image.attributes;

          for (let attr of attributes) {
            console.log(`${attr.name} : ${attr.value}`)
          }
        </script>

7.  **Text Node**

    text node merupakan Text tanpa tag HTML. Dalam membuat Text Node, kita bisa menggunakan `document.createTextNode(string)`. Hasilnya berupa text yang bisa ditambahkan ke Node lain. Contoh:

        // menambahkan nama text "wahyu" kedalam element div HTML
        <div id="name"></div>

        <script>
          const name = document.querySelector("#name");

          const textName = document.createTextNode("wahyu");
          name.appendChild(textName);
        </script>

### ~ EVENT HANDLERS :

Node memiliki kemampuan bereaksi terhadap suatu kejadian, misal kejadian saat di klik atau saat mouse berada diatas node tersebut, dll.

Ada banyak sekali jenis kejadian yang bisa kita buatkan aksinya ketika kejadian tersebut terjadi, atau ini dikenal dengan nama **Event Handler**.

Ada dua cara menambahkan Event Handler ke Node, menggunakan **Event Target** atau **Global Event Handler**.

1.  **Event Target**

    merupakan parent class dari Node, artinya semua Node memiliki kemampuan dari Event Target.

    pada Event Target, kita bisa menggunakan method `addEventListener(type, callback)` untuk menambahkan Event Target.

    contoh: menambahkan suatu kejadian atau event handler ketika input di klik:

        <input id="clickMe" type="button" value="Click Me" />

        <script>
          const clickMe = document.getElementById("clickMe");

          clickMe.addEventListener("click", () => {
            clickMe.setAttribute("value", "You Already Click Me");
          };
        </script>

2.  **Global Events Handlers**

    Global Events Handlers sendiri bukanlah sebuah super class, hanya kontrak yang bisa digunakan untuk menambahkan event handler sesuai type event nya. Contoh:

        <input id="button" type="button" value="Click Me" />

        <script>
          const button = document.getElementById("button");

          button.onclick = () => {
            button.setAttribute("value", "You Already Click Me");
          }
        </script>

**Events**, beberapa jenis events yang sering digunakan:

1. **window Event**, adalah event dari browser.

   Event DOMContentLoaded dan load merupakan html event penting wajib diketahui bagi front-end web developer. Sangat disarankan menggunakan event DOMContentLoaded dibandingkan event load ketika menjalankan javascript.

   - **Event DOMContentLoaded** : event html yang dipanggil ketika dokumen HTML telah selesai load dan parsing tanpa menunggu stylesheets atau css, images, atau subframes selesai diproses.
   - **Event load** : event yang terjadi ketika halaman web telah selesai loading.
   - **onpageshow** : event yang terjadi jika halaman dikunjungi kembali.
   - **onresize** : event yang terjadi saat halaman di resize.

2. **Keyboard Event**, saat di tekan atau dilepasnya tombol pada keyboad.
   - **onkeydown** : terjadi saat menekan keyboard.
   - **onkeypress** : saat masih dalam keadaan menekan tombol.
   - **onkeyup** : saat melepas tombol.
3. **Clipboard Event**, berasal pada saat proses cut,copy atau paste pada element.
   - **oncopy** : ketika melakukan proses copy.
   - **oncut** : ketika melakukan proses cut.
   - **onpaste** : ketika melakukan proses paste.
4. **Mouse Event**, saat klik mouse.
   - **onclik** : saat cursor menekan element tertentu.
   - **ondblclick** : saat cursor menekan element 2x berturut-turut.
   - **onmouseover** : saat mouse berada di atas element tertentu.
5. **Form Event**, digunakan untuk menangkap input dari user dalam jumlah banyak sekaligus.
   - **onsubmit** : terjadi saat menekan tombol submit.
   - **oninput** : terjadi saat penambahan atau pengurangan karakter.
   - **onchange** : terjadi setelah memberi input pada field.
   - **oncopy** : terjadi jika menyalin isi dari element.
   - **onpaste** : terjadi jika menempel isi hasil copy.
   - **onfocus** : teraadi saat sebuah element pada form di pilih.
   - **onblur** : terjadi jika element tidak dipilih lagi.
6. **Method preventDefault()**, sangat berguna jika kita mau menjalankan perintah JavaScript tanpa adanya efek reload.

### ~ STYLES :

DOM juga bisa digunakan untuk memanipulasi attribute style pada element dengan lebih mudah. Kita bisa menggunakan `element.style.name = value`. Untuk penamaan Style nya menggunakan format pascalCase, misal backgroundColor. Contoh:

    <input type="button" value="blue" />
    <input type="button" value="red" />
    <input type="button" value="yellow" />
    <div id="canvas" style="width: 500px; height: 500px; background-color: black;"></div>

    <script>
      const buttons = document.querySelectorAll("input");
      const canvas = document.getElementById("canvas");

      for (const button of buttons) {
        button.addEventListener("click", () => {
          canvas.style.backgroundColor = button.getAttribute("value");
        })
      }
    </script>

### ~ InnerText and innerHTML :

1.  **InnerText**

    selain **textContent**, terdapat property lain bernama **innerText** untuk mendapatkan isi text sebuah element.

    tujuannya sama, untuk mengambil atau mengubah isi text konten sebuah element, namun ada perbedaannya. **TextContent** akan mengambil semua isi dari konten text sebuah element. **InnerText** bisa tahu, bagaian text mana yang akan ditampilkan, dia hanya akan mengambil text nya saja. Contoh perbedaan textContent dan innertext:

        <p id="content">
          <script>
            console.log("hai");
          </script>
          <b>wahyu</b> komarudin <i>hidayah</i>
        </p>

        <script>
          const content = document.getElementById("content");

          console.log(content.innerText); // wahyu komarudin hidayah

          console.log(content.textContent); // console.log("hai"); </br> wahyu komarudin hidayah
        </script>

2.  **innerHTML**

    innerHTML akan mengambil seluruh element HTML nya sebagai text. Ini juga cocok jika ingin mengubah isi dari element menggunakan text yang berisi tag HTML nya sekalian. Contoh, mengambil seluruh element HTML nya sebagai text:

        <p id="content">
          <script>
            console.log("hai");
          </script>
          <b>wahyu</b> komarudin <i>hidayah</i>
        </p>

        <script>
          const content = document.getElementById("content");

          console.log(content.innerHTML);
          // Output:
          // <script>
                console.log("hai");
             </script>
             <b>wahyu</b> komarudin <i>hidayah</i>
        </script>

    salah satu kemampuan dari innerHTML adalah bisa mengubah isi dari children sebuah element hanya dengan string. Tag yang terdapat di dalam string secara otomatis akan menjadi child element. Contoh:

        <p id="content"></p>

        <script>
          const content = document.getElementById("content");

          content.innerHTML = "<h1>Title</h1><p>Description</p>";
        </script>

### ~ WINDOWS :

**Window** merupakan representasi window yang berisikan DOM Document.

Beberapa JavaScript function sebenarnya berasal dari object window seperti alert(), confirm() dan prompt().

Untuk menggunakan Window, cukup menggunakan kata kunci **window**.

Contoh:

    <p id="content"></p></p>

    <script>
      const content = document.getElementById("content");
      const height = window.screen.height;
      const width = window.screen.width;

      content.textContent = `Window width: ${width} - height: ${height}`;
    </script>

### ~ QUERY SELECTOR :

**Query Selector** merupakan method untuk menseleksi node sesuai dengan pola yang kita ingin cari.

Terdapat dua method untuk Query Selector :

1. Document.querySelector(pola) digunakan menyeleksi node pertama yang sesuai dengan pola.
2. Document.querySelectorAll(pola) digunakan untuk menyeleksi semua node yang sesuai dengan pola.

**Pola Query Selector**, Pola untuk Query Selector adalah menggunakan CSS Selector. Jadi, penggunaannya seperti ketika membuat selector di CSS.

- **Universal Selector** merupakan selector untuk menyeleksi semua element. Bisa menggunakan karakter `*`.

  Contoh :

        <script>
          const element = document.querySelectorAll("*");
          console.log(element);
        </script>

- **Type Selector** adalah selector yang digunakan untuk menyeleksi tag type HTML yang kita pilih. Untuk menggunakannya, kita bisa langsung sebutkan **nama tag** nya.

  Contoh :

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <script>
          const element = document.querySelectorAll("li");

          console.log(element);
        </script>

- **Class Selector** merupakan selector untuk menyeleksi semua element yang memiliki class yang sesuai selector. Untuk menggunakannya, memakai tanda `.` kemudian dilanjutkan dengan nama kelasnya.

  Contoh :

        <ul class="menu">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <script>
          const element = document.querySelectorAll(".menu");

          console.log(element);
        </script>

- **ID Selector** merupakan selector yang digunakan untuk menyeleksi id yang sesuai selector. Untuk menggunakannya, kita bisa gunakan nama id diawali dengan karakter `#`.

  Contoh :

        <ul class="menu">
          <li id="menu-item">1</li>
          <li>2</li>
          <li id="menu-item">3</li>
        </ul>

        <script>
          const element = document.querySelectorAll("#menu-item");

          console.log(element);
        </script>

- **Attribute Selector** merupakan selector yang bisa digunakan untuk menyeleksi element berdasarkan attribute nya. Kita bisa menggunakan selector [attribute]. Atau bisa juga untuk tag tertentu, misal menggunakan selector div[attribute].

  Contoh :

        <div class="1"></div>
        <div class="2"></div>
        <div class="3"></div>

        <script>
          const element = document.querySelectorAll("[class]");

          console.log(element);
        </script>

- **Operator di Attribute Selector**, Kita juga bisa menggunakan operator pada attribut selector. Misal [attribute=value], [attribute^=value] dan lain-lain

  Contoh :

        <div class="1"></div>
        <div class="2"></div>
        <div class="3"></div>

        <script>
          const element = document.querySelectorAll("div[class^='1']");

          console.log(element);
        </script>

### ~ WEB STORAGE :

**Web storage** adalah salah satu Web API (perantara agar kode JavaScript bisa "berkomunikasi" dengan browser) yang dapat menyimpan data secara lokal pada sisi client (disimpan secara lokal pada perangkat kita). Web Storage dapat menampung data maksimal 10MB per domain. Fungsi dari Web Storage:

- Menyimpan data dalam bentuk string yang dihasilkan oleh halaman web agar bisa diakses secara offline.
- Cocok juga untuk menyimpan data konfigurasi preference untuk pengguna web.

Macam-macam Web Storage:

1. **Local Storage**:

   digunakan untuk menyimpan data tanpa ada batasan waktu. Data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup kecuali jika kita menghapusnya.

   untuk menggunakan local storage, kita harus mengaksesnya melalui objek yang bernama "localStorage".

2. **Session Storage**:

   digunakan untuk menyimpan data sementara pada browser. Data akan hilang ketika browser atau tab browser ditutup.

   untuk menerapkan Session Storage, kita dapat menggunakan global objek sessionStorage.

Data yang tersimpan dalam **localStorage** atau **sessionStorage** adalah nilai dengan tipe data primitif seperti number, boolean, atau string. Bisa juga berbentuk JavaScript objek dengan mengubahnya ke dalam string (JSON)

**_Key-value_** = method yang dapat digunakan untuk menyimpan dan mengakses data pada storage.

Fungsi-fungsi yang ada pada Web Storage:

1. **_setItem_** = Digunakan untuk menyimpan data pada Web Storage. Fungsi ini membutuhkan dua parameter yakni key (sebagai kunci untuk mendapatkan nilai) dan value (sebagai nilai yang akan disimpan).
2. **_getItem_** = Digunakan untuk mengakses data pada Web Storage. Fungsi ini membutuhkan satu parameter yakni key (sebagai kunci untuk mendapatkan nilai), dan data yang disimpan pada Web Storage akan dikembalikan dalam bentuk string.
3. **_removeItem(key)_** = menghapus key beserta value-nya.
4. **_clear()_** = menghapus semuanya.
5. **_key(index)_** = mendapatkan key pada posisi tertentu.
6. **_length_** = jumlah item yang disimpan.

Menyimpan dan Mendapatkan Data Kompleks pada Web Storage:

- Untuk menyimpan data kompleks seperti objek JavaScript dapat dilakukan dengan mengubah objek menjadi string menggunakan JSON.stringify().
- Untuk mendapatkan data kompleks seperti objek JavaScript dari Web Storage dapat dilakukan dengan mengubah string objek menjadi objek menggunakan JSON.parse().

</details>

<details> <summary>

## [Behind-the-Scenes](https://github.com/wahyukmr/JavaScript-Programming/blob/master/07-Behind-the-Scenes/script.js)

</summary>

### ~ OVERVIEW - JAVASCRIPT BEHIND the SCENES :

JavaScript adalah bahasa pemrograman yang dijalankan disisi klien (client-side) pada browser. Ketika browser membuka halaman web yang mengandung javascript, browser akan memuat dan mengeksekusi kode JavaScript secara otomatis. Prosesnya meliputi:

- Parsing : mengurai kode JavaScript pada halaman web.
- Compilation : kode JavaScript akan dikompilasi menjadi byte code.
- Execution : byte code akan dieksekusi oleh JavaScript Engine, yang bertanggung jawab untuk menjalankan kode JavaScript.
- Memory management : JavaScript Engine juga bertanggung jawab mengelola alokasi memori pada program, meliputi pengelolaan memori untuk variabel, fungsi, dan objek pada program javaScript.
- Garbage collection : fitur yang akan menghapus data yang tidak lagi digunakan oleh program untuk mengoptimalkan penggunaan memori.

Dalam prosesnya, JavaScript juga mengandalkan DOM untuk memanipulasi elemen pada halaman web, dan juga memanfaatkan AJAX (Asynchronous javascript And XML) untuk mengirim dan menerima data dari server tanpa perlu memuat ulang halaman web.

### ~ JAVASCRIPT :

- **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer. Kelemahannya tidak akan secepat atau dioptimalkan seperti bahasa low-level.
- **Garbage-collected** adalah algoritma didalam javascript yang secara otomatis menghapus objek lama yang tidak digunakan dari memori.
- **Interpreted or just-in-time compiled** dengan ini javascript mengkompilasi seluruh kode kedalam mesin sekaligus dan kemudian mengeksekusinya segera.
- **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.
- **Prototype-based object-oriented** adalah pendekatan object-oriented berbasis prototype.
- **First-class functions** berarti bahwa fungsi diperlakukan seperti variabel biasa, jadi dapat meneruskan fungsi ke fungsi lain dan bahkan mereturn fungsi dari fungsi.
- **Dynamically-type language** Ini berarti bahwa JS tidak memerlukan deklarasi eksplisit dari variabel sebelum digunakan.
- **Single-threaded** berarti bahwa JS hanya dapat melakukan satu hal pada satu waktu. Thread pada dasarnya tempat kode kita dieksekusi di CPU.
- **Non-blocking event loop** event loop mengambil tugas yang berjalan, mengeksekusi mereka di background dan mengembalikannya ke thread utama setelah selesai.

### ~ JS ENGINE :

**JS Engine** hanyalah sebuah program komputer yang mengeksekusi kode javascript, jadi bertanggung jawab untuk mengurai kode dan mengonversinya menjadi perintah yang dapat dijalankan dan dipahami oleh komputer.

Beberapa contoh JS Engine populer adalah V8 dari Google, SpiderMonkey dari Mozilla, dan Chakra dari Microsoft.

Setiap Engine JavaScript selalu berisi **Call Stack** dan **Heap**.

**Call Stack** adalah tempat kode kita sebenarnya dieksekusi menggunakan sesuatu yang disebut **execution context**.

**Execution context** adalah environment di mana potongan javascript diekseksi, seperti kotak yang menyimpan semua informasi yang diperlukan untuk beberapa kode yang akan dieksekusi. execution context mengandung variable environment, scope chain dan this keyword.

**Variabel environment** mencakup variable declaration(let, const dan var), function dan argument object.

**Heap** adalah tempat kumpulan memori yang terstruktur yang menyimpan semua objek(reference types) yang dibutuhkan.

### ~ JS RUNTIME :

**JavaScript runtime** seperti kotak yang menyediakan beberapa objek ke JavaScript yang kita butuhkan sehingga dapat berinteraksi dengan dunia luar.

Inti dari setiap JS runtime selalu merupakan JS Engine. Misalnya, Browser Chrome dan node.js menggunakan Engine yang sama - V8, tetapi Runtime mereka berbeda: di Chrome memiliki window, objek DOM, dll., sedangkan node memberi kita require, Buffers dan processes.

JavaScript runtime biasanya juga menyertakan **_callback queue_**, ini adalah struktur data yang berisi semua fungsi callback yang siap dieksekusi. Misalnya callback fungsi dari DOM event listener(click, timer, dll).

ketika call stack kosong, fungsi callback diteruskan ke stack agar dapat dieksekusi. Dan ini terjadi berkat **Event loop**. Jadi event loop mengambil fungsi callback dari callback queue dan menempatkannya ke call stack sehingga dapat dieksekusi.

### ~ SCOPE in JAVASCRIPT :

**Scope:**

Scope merupakan area akses sebuah data.

Analogi sederhana dari Scope, seperti sebuah tas yang berisikan buku, dimana tas adalah scope yang merupakan lingkungan atau environments tempat buku itu berada atau data itu dideklarasikan.

**Scope Concepts:**

Scoping mengajukan pertanyaan "dimana variabel tinggal?" atau "dimana kita bisa mengakses variabel tertentu dan dimana yang tidak".

Beberapa konsep scope diantaranya:

- **lexical scope** menentukan scope variabel berdasarkan posisi variabel di dalam kode.

- **Variabel Lookup** adalah bagian dari **Scope chain**, meskipun keduanya terkait, variabel lookup fokus pada proses mencari variabel tertentu di dalam scope chain, sementara scope chain mengacu pada urutan atau rantai dari semua scope yang ada dalam sebuah program JavaScript, dimulai dari scope yang terdalam dan berakhir pada scope global.

- **Closure** memungkinkan fungsi untuk mengambil nilai dari variabel yang berada di luar scope fungsi itu sendiri, dan menjaga akses ke nilai tersebut bahkan setelah fungsi tersebut selesai dieksekusi.

Scope chain adalah **one-way street**: artinya Scope induk tidak akan pernah memiliki akses ke variabel dari inner Scope (merujuk pada lingkup variabel yang dibuat di dalam sebuah fungsi atau blok kode tertentu).

**Tiga jenis Scope di Javascript:**

1. Global Scope
   - Berada di luar dari function atau block apapun.
   - Variabel yang dideklarasikan di global scope dapat diakses **dimana saja**.
   - Data di global scope bisa diakses di local scope dan block scope.
2. Function Scope
   - Scope atau ruang lingkup dari **function**.
   - Variabel hanya dapat diakses **didalam function, Bukan** diluar.
   - Juga biasa dipanggil **_local scope_**.
   - Data di local scope bisa diakses di block scope dan tidak bisa di global scope.
3. Block Scope (ES6)
   - Mengacu pada kode didalam kurung kurawal seperti pada: **if block, for loop block, etc**
   - Data di block scope hanya bisa digunakan pada block tersebut.

### ~ HOISTING in JAVASCRIPT :

**Hoisting** adalah konsep di mana JavaScript mengangkat (memindahkan) deklarasi variabel dan fungsi ke atas scope, sehingga variabel atau fungsi dapat diakses sebelum dideklarasikan dalam kode. Dalam praktiknya, sebaiknya tetap dideklarasikan variabel atau fungsi terlebih dahulu sebelum digunakan agar kode lebih mudah dipahami dan dijaga keamanannya. Namun, pemahaman tentang hoisting akan membantu menghindari kesalahan dalam penulisan kode JavaScript.

Kesimpulan dari bagian ini:

- Jangan menggunakan **var** untuk mendeklarasikan variabel.
- Gunakan "const" pada waktu mendeklarasikan variabel.
- Mengakses variabel sebelum mendeklarasikannya adalah praktik yang buruk dan harus dihindari.
- Selalu mendeklarasikan fungsi terlebih dahulu sebelum menggunakannya.

### ~ "THIS" KEYWORD :

**this keyword/variable** adalah variabel spesial yang dibuat untuk setiap execution context(dalam kasus ini untuk setiap fungsi). Mengambil nilai yang merujuk ke "pemilik" dari fungsi dimana kata kunci **this** ini digunakan.

Pengertian diatas bukan static. Tergantung pada bagaimana fungsi dipanggil, dan nilainya hanya diberikan ketika fungsi sebenarnya dipanggil.

Penerapan kata kunci **this:**

- This dalam **Object Method** 👉 kata kunci **_this_** merujuk ke **objek** pemilik functionnya.
- this dalam sebuah **Function** (jika menggunakan strict mode) 👉 kata kunci **_this_** mengembalikan **undefined**.
- This dalam **Arrow Function** 👉 kata kunci **_this_** merujuk ke this dari fungsi induk terdekatnya.
- This dalam **Event Listener** 👉 kata kunci **_this_** merujuk ke elemen DOM tempat tempat penanganan dilampirkan.

### ~ PRIMITIVES VS OBJECTS (Primitive vs. Reference Types) :

**Tipe Primitive**

- Tipe primitive merepresentasikan nilai tunggal yang sederhana dan bukan object.

- Beberapa contoh diantaranya: String, Number, Boolean, Null, BigInt, Simbool, Undefined.

- Dalam management memorinya, **Tipe Primitive** yang dibuat akan disimpan pada Stack engine JS, tepatnya didalam execution context (dimana mereka dideklarasikan). Setiap variabel ditempatkan pada Stack yang berbeda.

- Dengan pernyataan diatas, membuat tipe primitive dianggap sebagai nilai yang tidak berubah atau "immutable". Artinya, ketika sebuah variabel dengan tipe primitif diubah nilainya, sebenarnya variabel tersebut menciptakan salinan baru dari nilai primitif tersebut. Jadi, perubahan tidak akan mempengaruhi nilai sebelumnya.

- Contoh :

        // variabel `x` dengan tipe data primitive diubah nilainya, variabel `y` tidak terpengaruh karena `x` dan `y` memiliki salinan terpisah.
        let x = 10;
        let y = x;
        y = 20;

        console.log(x); // output: 20
        console.log(y); // output: 10

**Tipe Reference**

- **Tipe reference** merepresentasikan referensi ke object yang kompleks dan dapat memiliki properti dan method.

- Di JavaScript **Tipe reference** mencakup semua jenis Object. Seperti Object Literal, Arrays, Functions, Date, Map, Set, RegExp, dan banyak lagi.

- Semua **Tipe Reference** akan disimpan pada **Heap** engine JS sebagai suatu referensi, bukan sebagai nilai yang sebenarnya.

- Tipe reference ini dianggap sebagai nilai yang dapat berubah atau "mutable". Ketika sebuah variabel dengan tipe referensi diubah, variabel tersebut masih merujuk pada objek yang sama di memori Heap, dan perubahan tersebut akan tercermin di semua referensi ke objek tersebut.

- Contoh :

        // saat variabel `obj1` dengan tipe data reference diubah propertinya, perubahan tersebut juga mempengaruhi variabel `obj2` karena keduanya merujuk pada object yang sama.
        let obj1 = { value: 10 };
        let obj2 = obj1;
        obj2.value = 20;

        console.log(obj1.value); // Output: 20
        console.log(obj2.value); // Output: 20

Mendeklarasikan variabel const tidak dapat diubah nilainya hanya berlaku untuk nilai Primitive, tetapi tidak untuk nilai Reference. karena ini hanya mengubah nilai objek yang disimpan di Heap.

### ~ REGULAR FUNCTIONS VS ARROW FUNCTIONS :

Jangan menggunakan Arrow Function pada object method.

Ketika memiliki fungsi didalam method, solusi terbaik menggunakan arrow function.

Penggunaan kata kunci **this** bergantung pada object yang memanggilnya.

Kata kunci **arguments** tidak lagi penting di javascsript karena ada cara yang lebih modern untuk melakukannya.

</details>

<details> <summary>

## [Regular-Expressions](https://github.com/wahyukmr/JavaScript-Programming/blob/master/08-Regular-Expressions/script.js)

</summary>

**Pengertian RegExp**

Regex (Regular Expression) adalah suatu alat yang kuat dalam pemrograman untuk mencocokkan dan memanipulasi pola string. Dalam JavaScript, Anda dapat menggunakan objek `RegExp` untuk membuat dan bekerja dengan ekspresi reguler. Ekspresi reguler digunakan untuk mencari, mencocokkan, dan mengubah teks berdasarkan pola yang ditentukan.

**Membuat Ekspresi Reguler**

KIta dapat membuat ekspresi reguler dengan menggunakan **_sintaks literal_** atau menggunakan **_konstruktor RegExp_**.

1.  sintaks literal

        // Syntax:
        let regex = /pola/flags;

        // Contoh penggunaan:
        let regex = /hello/;

2.  konstruktor RegExp

        // Syntax:
        let regex = new RegExp(pola, flags);


        // Contoh penggunaan:
        let regex = new RegExp("hello");

**Method String**

Method string digunakan untuk melakukan pencocokan dan pemodifikasian:

- `search(regex)` : Mencari string untuk kecocokan dengan ekspresi reguler dan mengembalikan indeks pertama kecocokan atau -1 jika tidak ditemukan.
- `match(regex)` : Mengembalikan array hasil pencocokan dengan ekspresi reguler atau null jika tidak ditemukan.
- `replace(regex, replacement)` : Menggantikan kecocokan dengan ekspresi reguler dengan string pengganti.
- `split(regex)` : Membagi string menjadi array substring berdasarkan ekspresi reguler.

Contoh penggunaan:

    let regex = /hello/;
    let str = "Hello, world!";

    console.log(str.search(regex)); // Output: -1 (tidak ditemukan)

    console.log(str.match(regex)); // Output: null (tidak ditemukan)

    console.log(str.replace(regex, "Hi")); // Output: Hi, world!

    console.log(str.split(regex)); // Output: ["Hello, world!"] (tidak ada pembagian)

**Method Object**

- `test(string)` : Menguji apakah string cocok dengan ekspresi reguler dan mengembalikan nilai true atau false.
- `exec(string)` : Mencari kecocokan dalam string dan mengembalikan array hasil atau null jika tidak ditemukan. Namun jika ingin mendapatkan hasil kecocokan yang lain harus menggunakan perulangan, karena penggunaan flag global (g) tidak bisa.

Contoh penggunaan:

    // method test:
    let regex = /hello/;
    let str = "Hello, world!";

    let result = regex.test(str);
    console.log(result); // Output: true

    // method exec:
    let regex = /apple/g;
    let str = "I have an apple, an apple pie, and an apple tree.";

    let match;
    while ((match = regex.exec(str)) !== null) {
      console.log(match[0]); // Output: "apple", "apple", "apple"
    }

**Modifiers (Modifier Flags)**

Flags (bendera) bersifat opsional dan dapat digunakan untuk mengubah perilaku ekspresi reguler:

- `g` (global): Mencocokkan semua kejadian yang cocok, bukan hanya yang pertama.
- `i` (ignore case): Tidak memperhatikan perbedaan antara huruf besar dan kecil.
- `m` (multiline): Mencocokkan awal dan akhir setiap baris baru dalam sebuah teks.
- `u` (unicode): Mengaktifkan fitur Unicode untuk memanipulasi karakter yang tidak termasuk dalam BMP (Basic Multilingual Plane).
- `s` (dotAll): memungkinkan karakter `.` dalam regex untuk mencocokkan karakter baru (\n).

**Karakter Special**

- `.` : Mencocokkan karakter apa pun kecuali karakter baru (\n).
- `\d` : Mencocokkan angka (digit) dari 0 hingga 9.
- `\D` : Mencocokkan karakter selain angka.
- `\w` : Mencocokkan karakter alfanumerik (huruf, angka, dan underscore) atau singkatan dari `[a-zA-Z0-9_]`.
- `\W` : Mencocokkan karakter selain karakter alfanumerik.
- `\s` : Mencocokkan karakter spasi putih (spasi, tab, baris baru).
- `\S` : Mencocokkan karakter selain karakter spasi putih.
- `\n` : Mencocokkan karakter mencocokkan karakter baris baru.
- `x|y` : Mencocokkan salah satu ekspresi x atau y.

**Karakter Kuantifier** (menunjukan jumlah atau kuantitas)

- `*` : Mencocokkan 0 atau lebih kejadian dari karakter sebelumnya.
- `+` : Mencocokkan 1 atau lebih kejadian dari karakter sebelumnya.
- `?` : Mencocokkan 0 atau 1 kejadian dari karakter sebelumnya.
- `{n}` : Mencocokkan tepat n kejadian dari karakter sebelumnya.
- `{n,}` : Mencocokkan setidaknya n kejadian dari karakter sebelumnya.
- `{n,m}` : Mencocokkan antara n dan m kejadian dari karakter sebelumnya.

**Karakter Set dan Ranges**

- `[abc]` : Mencocokkan salah satu karakter yang ada di dalam tanda kurung.
- `[^abc]` : Mencocokkan karakter yang tidak ada di dalam tanda kurung.
- `[a-z]` : Mencocokkan karakter dalam rentang a hingga z (huruf kecil).
- `[A-Z]` : Mencocokkan karakter dalam rentang A hingga Z (huruf besar).
- `[0-9]` : Mencocokkan karakter dalam rentang 0 hingga 9.

**Anchors (Pengikat)**

- `^` : Mencocokkan pola di awal string.
- `$` : Mencocokkan pola di akhir string.
- `\b` : Mencocokkan batas kata (word boundary).
- `\B` : Mencocokkan posisi selain batas kata.

**Grup dan Backreferences**

- `(pola)` (regular group): untuk mencocokkan dan menangkap pola tertentu.
- `(?:pola)` (non-capturing group): digunakan saat hanya ingin mencocokkan pola tanpa menangkap hasilnya.
- `(?<name>pola)` (named capturing group): memungkinkan untuk memberi nama grup penangkapan sehingga hasilnya dapat diakses dengan nama tersebut.
- `\n` (n adalah angka): untuk mencocokkan teks yang cocok dengan grup yang sudah ada sebelumnya.

**Lookahead dan Lookbehind**

- `x(?=y)` : Lookahead positif, mencocokkan `x` hanya jika diikuti oleh karakter `y`, tetapi karakter `y` tidak diikutsertakan dalam hasil pencocokan.
- `x(?!y)` : Lookahead negatif, mencocokkan `x` hanya jika tidak diikuti oleh `y`, dan karakter `y` tidak diikutsertakan dalam hasil pencocokan.
- `(?<=y)x` : Lookbehind positif, mencocokkan `x` hanya jika diawali oleh `y` tanpa mengonsumsi karakter `y`.
- `(?<!y)x` : Lookbehind negatif, mencocokkan `x` hanya jika tidak diawali oleh `y` tanpa mengonsumsi karakter `y`.

</details>

<details> <summary>

## [Data-Structures](https://github.com/wahyukmr/JavaScript-Programming/blob/master/09-Data-Structures-Operators/script.js)

</summary>

### ~ DESTRUCTURING :

Destructuring adalah untuk membongkar nilai Array atau Objek menjadi variabel terpisah. Dengan kata lain destructuring memecah struktur data kompleks menjadi struktur data kecil seperti variabel.

### ~ SPREAD OPERATORS ( ... ) :

**Spread operator** adalah operator dalam JavaScript yang digunakan untuk mengambil semua elemen dari sebuah array dan mengeluarkannya sebagai argumen terpisah. Artinya, dengan menggunakan spread operator, kita dapat mengambil semua nilai dari sebuah array dan melemparkannya sebagai argumen terpisah ke dalam sebuah fungsi atau menyimpannya dalam array baru.

Seperti halnya Object.assign, Spread operator juga membuat **Shallow copy** artinya hanya menyalin nilai yang berada pada **top value**, nilai yang lebih dalam berupa **Reference types** dimana jika nilai yang disalin dimodifikasi akan berpengaruh juga pada nilai aslinya.

**Spread operator** bekerja untuk tipe data array dan objek di JavaScript. Saat digunakan pada objek, spread operator akan menyebar properti objek tersebut menjadi properti terpisah. Sedangkan saat digunakan pada array, spread operator akan menyebar elemen array tersebut menjadi elemen terpisah

Dapat membuat Array atau properti objek baru dan atau untuk meneruskan nilai dalam suatu fungsi secara bersamaan. Merupakan dua kasus penggunaan Spread operator. Contoh penggunaan:

- untuk mengambil nilai dari array dan memasukkannya ke dalam array baru.

      const numbers = [1, 2, 3];

      const newNumbers = [...numbers, 4, 5, 6];
      console.log(newNumbers);
      // output: [1, 2, 3, 4, 5, 6]

- untuk memisahkan nilai dari sebuah objek dan meletakkannya ke dalam objek baru.

      const person = { name: 'John', age: 30 };
      const newPerson = {...person, email: 'john@example.com' };

      console.log(newPerson);
      // output: { name: 'John', age: 30, email: 'john@example.com' }

### ~ REST PETTERN AND REST PARAMETERS ( ... ) :

**Rest parameter** dan **rest pattern** adalah fitur baru di JavaScript yang memungkinkan kita untuk mengumpulkan atau menggabungkan beberapa nilai ke dalam sebuah array.

**Rest parameters**

- **Rest parameter** ditandai dengan menggunakan tanda tiga titik (...) di depan parameter terakhir sebuah fungsi, yang berfungsi untuk mengambil sisa argumen dan secara otomatis akan dikonversi menjadi array.
- **Rest parameters** hanya boleh ada satu di function.
- **Rest parameters** hanya boleh berada di posisi paling akhir, tidak boleh di depan atau ditengah, kecuali memang cuma ada 1 parameter.
- Contoh penggunaan rest parameter adalah sebagai berikut:

      function myFunction(a, b, ...args) {
        console.log(a); // output: 1
        console.log(b); // output: 2
        console.log(args); // output: [3, 4, 5]
      }

      myFunction(1, 2, 3, 4, 5);

**Rest pattern**

- Rest pattern, di sisi lain, adalah cara untuk memperluas array atau objek menjadi daftar argumen. Ini dilakukan dengan menempatkan tanda tiga titik (...) di depan variabel yang diharapkan menjadi array atau objek.
- Contoh penggunaan rest pattern adalah sebagai berikut:

      const myArray = [1, 2, 3, 4, 5];

      const [first, second, ...rest] = myArray;

      console.log(first); // output: 1
      console.log(second); // output: 2
      console.log(rest); // output: [3, 4, 5]

Dalam penggunaannya, rest parameter dan rest pattern digunakan pada parameter atau variabel yang berfungsi sebagai penerima nilai, sedangkan spread operator digunakan pada nilai yang ingin disebar atau dipisahkan.

### ~ SHORT CIRCUITING ( && and || ) IN NON BOOLEAN :

**Or Operator** ( || )

- membaca operan dari kiri ke kanan.
- akan mengembalikan nilai pertama yang bernilai truty dari semua operan, atau hanya nilai terakhir jika semuanya falsy.
- Dalam praktiknya kita dapat menggunakan **Or Operator** untuk menetapkan nilai default.

**And Operator** ( && )

- Membaca operan dari kiri ke kanan.
- Berarti sebaliknya dari **Or Operator**, yakni akan mengembalikan nilai pertama yang bernilai falsy.
- jika tidak ada satupun yang bernilai falsy, maka operan terakhir yang akan diambil.
- Sering kali kita dapat menggunakan **Operator And** untuk benar-benar menghindari if statement, yakni memeriksa apakah properti atau nilai tertentu benar-benar ada.

### ~ THE NULLISH COALESCING OPERATOR ( ?? ) :

Merupakan operator yang mirip dengan ternary operator, berbeda pada kondisinya, jika berilai null atau undefined maka value default nya dieksekusi.

Nilai Nullish adalah: Null dan Undefined (**_tidak termasuk:_** 0 or ""). Jadi, jika nilainya berupa Null atau undefined, maka operan kedua yang akan dieksekusi dan direturn.

### ~ LOGICAL ASSIGNMENT OPERATORS :

Prinsip dari cara kerjanya sama seperti OR, AND dan NULLISH operators. Tetapi dengan menggunakan Logical Assignment Operators menjadi lebih sederhana.

### ~ LOOPING ARRAYS - the for-of loop :

Looping ini digunakan untuk melakukan perulangan terhadap isi value dari iterable object (object yang dapat diiterasi), seperti Array, String, Set, Map, dll dan mengakses nilai elemen langsung tanpa harus menggunakan indeks seperti pada for loop.

Dengan menggunakan for-of loop kita masih bisa menggunakan **continue** dan **break** keywords.

### ~ OPTIONAL CHAINING ( ? ) :

Optional Chaining = memeriksa ada atau tidaknya nilai(ada yang berarti tidak Null dan undefined), jika ada akan mengembalikan nilainya, jika tidak akan mengembalikan undefined.

### ~ LOOPING OBJECT - For-in loop, Object.keys(), Object.values(), Object.entries() :

**Looping object** adalah proses untuk melakukan pengulangan atau iterasi terhadap properti-properti (property) yang ada di dalam sebuah objek. Di JavaScript.

- Looping melalui **For-in** loop :

  Merupakan perulangan for yang digunakan untuk mengulangi setiap properti yang terdefinisi dalam sebuah objek atau index di array, baik dari properti objek itu sendiri maupun properti yang diwarisi dari prototype-nya. Biasanya digunakan pada objek yang kompleks, seperti objek JSON, untuk memproses dan memanipulasi data.

- Looping melalui Object method di javascript :

  1.  Looping melalui method **Object.keys()**

      Digunakan untuk mengambil semua kunci (key) dari objek dan melakukan iterasi terhadap nilai-nilai (value) dari setiap properti di dalam objek tersebut.

      Contohnya seperti ini:

          const person = {
            name: 'John',
            age: 25,
            gender: 'Male'
          };

          for (const key of Object.keys(person)) {
            console.log(key);
          }

  2.  Looping melalui method **Object.values()**

      Digunakan untuk mengambil semua nilai (value) dari objek dan melakukan iterasi terhadap nilai-nilai tersebut.

      Contohnya seperti ini:

          const person = {
            name: 'John',
            age: 25,
            gender: 'Male'
          };

          for (const value of Object.values(person)) {
            console.log(value);
          }

  3.  Looping melalui method **Object.entries()**

      Digunakan untuk mengambil semua kunci dan nilai (key dan value) dari objek dan melakukan iterasi terhadap kunci dan nilai tersebut.

      Contohnya seperti ini:

          const person = {
            name: 'John',
            age: 25,
            gender: 'Male'
          };

          for (const [key, value] of Object.entries(person)) {
            console.log(key + ': ' + value);
          }

  Ketiga method Object diatas, mengembalikan iterable object (memungkinkan objek untuk dilooping atau diiterasi menggunakan method iterasi built-in, seperti for-of, array.from(), atau spread operator). Dalam bahasa yang lebih sederhana, iterabel object dapat dianggap sebagai objek yang dapat dilakukan iterasi, mirip dengan array.

### ~ Object.fromEntries() :

Metode JavaScript `Object.fromEntries()` adalah untuk membuat objek dari daftar pasangan key-value.

### ~ METHODS OBJECT SUMMARY :

- `hasOwnProperty(property)` = untuk memeriksa apakah object memiliki properti dengan nama yang ditentukan. Mengembalikan `true` jika nilai tersebut ada dalam object dan `false` jika tidak.
- `keys()` = mengembalikan array yang berisi semua property keys object.
- `values()` = mengembalikan array yang berisi semua property values object.
- `entries()` = mengembalikan array yang berisi pasangan property key-value object dalam bentuk array dua dimensi.
- `assign(target, source1, source2, ..., sourceX)` = menggabungkan property-property dari satu atau lebih `source` object ke `target` object. Jika terdapat property dengan nama yang sama, property di `source` object kemudian akan menggantikan property dengan nama yang sama di `target` object.
- `freeze()` = untuk membekukan object, sehingga tidak dapat mengubah nilai property atau menambah property baru. Method ini mengembalikan object yang telah dibekukan.
- `seal()` = menyegel object, sehingga tidak dapat menambah atau menghapus property, tetapi masih memungkinkan untuk mengubah nilai property yang ada. Method ini mengembalikan object yang disegel.
- `isFrozen(object)` = memeriksa apakah object telah dibekukan. Mengembalikan `true` jika object telah dibekukan dan `false` jika tidak.
- `isSealed(object)` = memeriksa apakah object telah disegel. Mengembalikan `true` jika object telah dibekukan dan `false` jika tidak.
- `getOwnPropertyDescriptor(property)` = mengembalikan deskriptor property sendiri untuk peroperty yang ditentukan.
- `defineProperty(property, descriptor)` = menentukan property baru atau memodifikasi property yang ada dengan deskriptor yang ditentukan.
- `toString()` = mengembalikan representasi string dari object.
- `toLocaleString()` = mengembalikan representasi string dari object yang sesuai dengan pengaturan local.
- `valueOf()` = mengembalikan nilai primitif object.

### ~ METHODS SET SUMMARY :

- `add(value)` = untuk menambahkan nilai baru ke dalam Set.
- `delete(value)` = untuk menghapus nilai tertentu dari Set.
- `has(value)` = untuk memeriksa apakah Set mengandung nilai tertentu. Mengembalikan `true` jika nilai tersebut ada dalam Set dan `false` jika tidak.
- `clear()` = untuk menghapus semua nilai dari Set, menjadikannya kosong.
- `size` = properti yang mengemmbalikan jumlah elemen (nilai) dalam Set.
- `value()` = mengembalikan iterator yang berisi semua nilai dalam Set, dalam urutan penambahan.
- `entries()` = mengembalikan iterator yang berisi pasangan `[value, value]` untuk setiap elemen dalam Set, dalam urutan penambahan.
- `forEach(callbackFn, thisArg)` = menjalankan fungsi callback pada setiap nilai dalam Set. Fungsi callback menerima tiga argumen: nilai saat ini, nilai saat ini juga sebagai kunci, dan Set itu sendiri. Opsi `thisArg` dapat digunakan untuk menentukan konteks `this` dalam pemanggilan fungsi callback.

### ~ METHODS MAP SUMMARY :

- `set(key, value)` = untuk menentukan pasangan key-value baru dalam Map.
- `get(key)` = mengembalikan nilai yang terkait dengan key tertentu dalam Map. Jika key tidak ditemukan, mengembalikan `undefined`.
- `has(key)` = untuk memeriksa apakah Map mengandung key tertentu. Mengembalikan `true` jika key tersebut ada dalam Map dan `false` jika tidak.
- `delete()` = untuk menghapus pasangan key-value yang terkait dengan key tertentu dari Map.
- `clear()` = untuk menghapus semua pasangan key-value dari Map, menjadikannya kosong.
- `size` = properti yang mengemmbalikan jumlah pasangan key-value dalam Map.
- `keys()` = mengembalikan iterator yang berisi semua key dalam Map, dalam urutan penambahan.
- `value()` = mengembalikan iterator yang berisi semua value dalam Map, dalam urutan penambahan.
- `entries()` = mengembalikan iterator yang berisi pasangan `[key, value]` untuk setiap elemen dalam Map, dalam urutan penambahan.
- `forEach(callbackFn, thisArg)` = menjalankan fungsi callback pada setiap pasangan key-value dalam Map. Fungsi callback menerima tiga argumen: nilai saat ini, nilai saat ini juga sebagai kunci, dan Map itu sendiri. Opsi `thisArg` dapat digunakan untuk menentukan konteks `this` dalam pemanggilan fungsi callback.

### ~ METHODS STRING SUMMARY :

- `charAt(index)` = mengembalikan karakter pada posisi index yang ditentukan dalam string.
- `charCodeAt(index)` = mengembalikan kode Unicode dari karekter pada posisi index yang ditentukan dalam string.
- `concat(string2, string3, ..., stringX)` = menggabungkan dua atau lebih string dan mengembalikan string baru yang dihasilkan.
- `includes(searchString, position)` = memeriksa apakah string mengandung substring yang ditentukan. Jika ditemukan, mengembalikan `true` jika tidak mengembalikan `false`.
- `indexOf(searchValue, fromIndex)` = mengembalikan index pertama yang ditemukan `searchValue` dalam string. Jika tidak ditemukan, mengembalikan -1.
- `lastIndexOf(searchValue, fromIndex)` = mengembalikan index terakhir yang ditemukan `searchValue` dalam string. Jika tidak ditemukan, mengembalikan -1.
- `length` = mengembalikan jumlah karakter dalam string.
- `replace(searchValue, replaceValue)` = menggantikan `searchValue` dengan `replaceValue` dalam string dan mengembalikan string baru yang dihasilkan.
- `slice(startIndex, endIndex)` = mengambil potongan (substring) dari string berdasarkan `startIndex` dan `endIndex` yang ditentukan, dan mengembalikan potongan tersebut sebagai string baru.
- `split(separator, limit)` = memisahkan string menjadi array substring berdasarkan separator yang ditentukan. Opsi limit dapat digunakan untuk membatasi jumlah elemen dalam array yang dihasilkan.
- `substring(startIndex, endIndex)` = mengambil potongan (substring) dari string berdasarkan `startIndex` dan `endIndex` yang ditentukan, dan mengembalikan potongan tersebut sebagai string baru. Method ini mirip dengan `slice()` tetapi tidak mendukung index negatif.
- `toLowerCase()` = mengkonversi semua karakter dalam string menjadi huruf kecil dan mengembalikan string baru.
- `toUpperCase()` = mengkonversi semua karakter dalam string menjadi huruf besar dan mengembalikan string baru.
- `trim()` = menghapus spasi kosong di awal dan akhir string dan mengembalikan string baru sebagai hasilnya.
- `startsWith(searchString, position)` = memeriksa apakah string dimulai dengan substring yang ditentukan. Jika benar, mengembalikan nilai `true`, jika tidak mengembalikan nilai `false`.
- `endsWith(searchString, length)` = memeriksa apakah string diakhir dengan substring yang ditentukan. Jika benar, mengembalikan nilai `true`, jika tidak mengembalikan nilai `false`.

### ~ ARRAYS VS SETS :

Keduannya dapat digunakan jika hanya bermain dengan daftar nilai sederhana dan hanya memiliki nilai tanpa deskripsi apa pun.

**Keunggulan Array**:

1. Dapat digunakan jika membutuhkan daftar nilai yang berurutan (mungkin berisi nilai yang sama).
2. Dapat digunakan saat perlu untuk memaniplasi data.

**Keunggulan Set**:

1. Digunakan ketika perlu bekerja dengan nilai yang unik (tidak ada nilai yang sama).
2. Digunakan saat mementingkan kinerja yang tinggi.
3. Dapat digunakan untuk menghapus duplikasi nilai pada Array.

### ~ OBJECTS VS MAPS :

Keduanya dapat digunakan jika perlu pasangan key dan value. Jadi dengan key akan memiliki cara untuk mendeskripsikan atau menggambarkan value.

**Keunggulan Object**:

1. Cara **sederhana** untuk menyimpan keys/value.
2. Mudah untuk menulis dan mengakses value ( menggunakan operator dot atau bracket[] ).
3. Key hanya bisa bertipe **_String_**.
4. Gunakan saat membutuhkan fungsi didalamnya (method).
5. Gunakan jika ingin bekerja dengan JSON.
6. Penggunaan data Object masih digunakan sepanjang waktu.

**Keunggulan Map**:

1. Performa yang lebih baik.
2. Key bisa bertipe data apapun.
3. Mudah melakukan perulangan.
4. Mudah untuk menghitung panjang/ukuran data.
5. digunakan hanya ketika perlu memetakan key ke value.
6. Gunakan saat membutuhkan key yang bukan bertipe **_String_**.
7. Map merupakan data struktur yang penting saat ini.

Penggunaan Objek Array juga umum di JavaScript.

### ~ WORKING WITH STRING :

- Ingat bahwa String tidak bisa dirubah (primitive), ketika menggunakan String method itu datang dari String objek, setelahnya itu akan mengembalikan String kembali.
- Semua String method akan mengembalikan string baru(tidak mempengaruhi string aslinya).

</details>

<details> <summary>

## [Functions](https://github.com/wahyukmr/JavaScript-Programming/blob/master/10-Functions/script.js)

</summary>
  
### ~ HOW PASSING ARGUMENT - value vs reference :
  
Jika kita meneruskan nilai Primitive types sebagai argumen dari sebuah fungsi, maka argumen itu merupakan salinan dari nilai aslinya, akan menjadi nilai atau variabel yang berbeda. Karnanya apabila nilai salinan diubah tidak akan mengubah nilai originalnya.

lain halnya jika kita meneruskan Reference types ke fungsi, apa yang disalin sebenarnya hanyalah referensi ke objek di memori Heap atau bisa dikatakan keduanya menunjuk pada objek yang sama di memori Heap. Jadi saat mencoba memanipulasi salinan, sama saja memaniplasi nilai originalnya.

Dalam Programming ada dua istilah yang digunakan saat berhadapan dengan fungsi, yakni **passing by value** dan **passing by reference**. Javascript tidak memiliki passing by reference, hanya passing by value. Meskipun terlihat seperti passing by reference, namun reference itu sendiri masih merupakan nilai yang berisi memori address. Jadi pada dasarnya kita meneruskan reference ke fungsi tetapi tidak melakukan **passing by reference** seperti pada pemrograman C++.

### FUNCION RETURN VALUE :

Secara default, function tidak menghasilkan value apapun.

Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return didalam block function nya, diikuti dengan data yang ingin kita hasilkan.

Saat menggunakan kata kunci return, maka kode setelahnya tidak akan dieksekusi.

kita bisa menggunakan return untuk menghentikan eksekusi sebuah function.

### ~ FIRST-CLASS FUNCTIONS AND HIGHER-ORDER FUNCTIONS :

Javascript adalah bahasa yang memiiliki **First-class function** yang berarti fungsi hanya diperlakukan sebagai nilai. Karena itu kita dapat melakukan beberapa hal:

1.  Menyimpan fungsi dalam variabel atau peoperti.
2.  Meneruskan fungsi sebagai argumen ke fungsi lain, seperti saat menambahkan event listener atau event handler ke DOM Object.
3.  Dapat me-Return fungsi dari fungsi lain.
4.  Karna fungsi merupakan objek, dia juga memiliki method (**method function**). Contohnya **bind** method.

Fakta bahwa JavaScript memiliki First-class function, memungkinkan kita untuk menggunakan dan menulis **Higher-order functions**. Higher-order functions adalah fungsi yang menerima fungsi lain (Callback function) sebagai argumen atau fungsi yang mengembalikan fungsi baru.

First-class function dan Higher-order functions adalah dua hal yang berbeda. First-class function hanyalah fitur yang dimiliki atau tidak dimiliki oleh bahasa pemrograman.

### ~ FUNCTIONS ACCEPING CALLBACK FUNCTIONS :

Callbacks sangat sering digunakan dalam JavaScript.

Beberapa keuntungan utama Callback function:

1.  Membuat mudah untuk memecah kode menjadi bagaian yang lebih dapat digunakan kembali dan saling berhubungan.
2.  Membuat abstractions, berarti bahwa kita menyembunyikan detail dari beberapa implementasi kode, karena kita tidak terlalu peduli dengan semua detail itu.

### ~ FUNCTIONS RETURNING FUNCTIONS :

Fungsi ini berguna dibeberapa situasi. Apalagi jika menggunakan paradigma pemrograman yang sangat penting yaitu **pemrograman fungsional**.

### ~ THE CALL, APPLY, AND BIND METHODS :

Sebagai catatan, Seperti yang dibahas sebelumnya dalam pemanggilan regular function kata kunci this merujuk ke undefined (dalam strict mode).

Tiga method ini yaitu call, apply, dan bind adalah bagian dari prototipe fungsi JavaScript. Ketiganya digunakan untuk memanggil sebuah fungsi dan mengubah nilai "this" pada saat pemanggilan. Namun, ketiganya memiliki cara yang berbeda dalam mengirimkan argumen ke dalam fungsi.

1.  **Method Call**
    Pada **call method** argument pertama akan mengatur kata kunci this merujuk ke fungsi apapun yang kita inginkan, dan argument setelahnya hanyalah argumen dari fungsi aslinya.

    Digunakan jika kita tahu jumlah argumen yang dibutuhkan oleh fungsi dan tipe data argumen tersebut sama. Misalnya, jika sebuah fungsi membutuhkan dua angka sebagai argumen, maka kita dapat menggunakan method "call" untuk memanggil fungsi tersebut dan mengirimkan dua angka sebagai argumen

    Cara kerja method ini adalah dengan menggunakan sintaks:

        namaFungsi.call(thisArg, arg1, arg2, ..)

    Contoh method "call" digunakan untuk memanggil fungsi "greet" dari objek "person" dengan mengubah nilai "this" menjadi objek "newPerson" :

        const person = {
            name: "John",
            age: 30,
            greet: function() {
                console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
            }
        };

        const newPerson = {
            name: "Jane",
            age: 25
        };

        person.greet.call(newPerson); // Output: Hello, my name is Jane and I'm 25 years old.

2.  **Method Apply**

    **apply method tidak digunakan lagi dalam modern javascript. Karena sekarang memiliki cara yang lebih baik untuk melakukan hal yang sama persis dengan call method. Yakni denganmenggunakan spread operator untuk menyebarkan array.**

3.  **Method Bind**
    Digunakan untuk membuat salinan fungsi yang baru dengan menetapkan nilai "this" tetap pada nilai yang telah ditentukan dan memungkinkan penggunaan argumen yang dapat diubah.

    Digunakan jika kita ingin membuat fungsi baru dengan mengikat nilai "this" pada saat pembuatan fungsi. Kita dapat menggunakan method "bind" untuk membuat fungsi baru dengan nilai "this" yang sudah terikat pada objek tertentu dan nilai argumen tertentu

    Method ini sangat berguna ketika sedang menggunakan event listener.

    Cara kerja method ini adalah dengan menggunakan sintaks:

        namaFungsi.call(thisArg, arg1, arg2, ..)

    Contoh penggunaannya :

        const person = {
            name: "John",
            age: 30,
            greet: function(greeting) {
                console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old.`);
            }
        };

        const newPerson = {
            name: "Jane",
            age: 25
        };

        const newGreet = person.greet.bind(newPerson, "Hi");

        newGreet(); // Output: Hi, my name is Jane and I'm 25 years old.

Jika nilai argumen diketahui sebelum waktu runtime dan jumlah argumen tidak banyak, maka method "call" adalah pilihan yang baik. Jika jumlah argumen banyak atau nilainya tidak diketahui pada waktu runtime, maka method "apply" lebih cocok digunakan. Sedangkan, jika kita ingin membuat fungsi baru dengan nilai "this" yang tetap dan argumen dapat diubah, maka method "bind" merupakan pilihan yang tepat.

### ~ IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (IIFE) :

**IIFE** merupakan sebuah teknik dalam JavaScript untuk menjalankan sebuah fungsi secara otomatis pada saat ia didefinisikan.

IIFE dibuat dengan menempatkan fungsi dalam tanda kurung () dan menambahkan tanda kurung () lagi di bagian belakang untuk langsung memanggilnya.

IIFE sering digunakan untuk menjaga agar variabel yang didefinisikan di dalam fungsi tidak bocor ke lingkup global.

Sebagai contoh, jika kita ingin menjalankan sebuah fungsi secara otomatis pada saat halaman web kita dimuat, kita dapat menulisnya dalam IIFE sehingga fungsi tersebut hanya berjalan sekali saja dan tidak perlu dipanggil lagi di masa mendatang

IIFE juga dapat digunakan untuk membuat lingkup scope terisolasi, sehingga variabel yang didefinisikan di dalamnya tidak akan berkonflik dengan variabel di luar lingkup.

IIFE dapat dipanggil beberapa kali, tetapi setiap kali dipanggil, fungsi akan dibuat dan dijalankan dari awal.

### ~ CLOSURE :

Memungkinkan fungsi untuk mengambil nilai dari variabel yang berada di luar scope fungsi itu sendiri, dan menjaga akses ke nilai tersebut bahkan setelah fungsi tersebut selesai dieksekusi.

### ~ CURRYING :

Memecah fungsi dengan banyak argumen menjadi serangkaian fungsi yang masing-masing menerima satu argumen.

Ini seperti membuat versi baru dari fungsi tersebut yang membagi argumen-argumennya menjadi beberapa tahap. Pada setiap tahap, fungsi tersebut hanya menerima satu argumen dan mengembalikan fungsi baru yang siap untuk menerima argumen berikutnya.

### ~ COMPOSE :

Compose adalah sebuah fungsi utilitas yang digunakan untuk menggabungkan beberapa fungsi menjadi satu fungsi tunggal. Fungsi ini mengambil sejumlah fungsi sebagai argumen dan mengembalikan fungsi baru yang menerapkan fungsi-fungsi tersebut secara berurutan dari kanan ke kiri.

Ini juga meningkatkan keterbacaan implementasi. Alih-alih fungsi bersarang, kita dapat dengan jelas menggabungkan fungsi dan membuat fungsi urutan yang lebih tinggi dengan nama yang bermakna.

Implementasi sederhana dari compose adalah:

    const compose = (f1, f2) => value => f2( f1(value) );

Untuk mendapatkan lebih banyak fleksibilitas, kita dapat menggunakan fungsi `reduceRight`:

    const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);

### ~ AVOIDING SIDE-EFFECTS :

Sebisa mungkin untuk membuat fungsi yang meminimalkan **Side-effects** (fungsi yang mengubah data di luar scope fungsi itu sendiri) dan memiliki pure functionality yang disebut **Deterministic** (input yang dimasukkan dalam fungsi selalu mengembalikan hal yang sama)

</details>

<details> <summary>

## [Arrays-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/11-Arrays-Bankist/script.js)

</summary>

### ~ METHODS ARRAYS SUMMARY :

**Method yang mengubah nilai asli dari array**

- `push(element1, element2, ..., elementX)` = untuk menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru setelah elemen baru ditambahkan.

- `unshift(element1, element2, ..., elementX)` = untuk menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang array yang baru setelah elemen baru ditambahkan.

- `pop()` = untuk menghapus dan mengembalikan elemen terakhir dari array.

- `shift()` = untuk Menghapus dan mengembalikan elemen pertama dari array, menggeser semua elemen lain ke indeks yang lebih rendah.

- `splice(startIndex, deleteCount, item1, item2, ..., itemX)` = untuk mengubah isi array dengan menghapus, menambahkan, atau mengganti elemen-elemen yang ada. Menghapus sejumlah deleteCount elemen mulai dari startIndex dan, jika diperlukan, menambahkan elemen item1, item2, dan seterusnya ke array. Mengembalikan array yang berisi elemen-elemen yang dihapus.

- `reverse()` = untuk membalik urutan elemen-elemen dalam sebuah array.

- `sort(compareFunction)` = untuk mengurutkan elemen-elemen dalam array secara leksikografis atau berdasarkan fungsi pembanding yang ditentukan. Secara default, method ini akan mengurutkan elemen-elemen dalam array berdasarkan urutan karakter Unicode dari nilai-nilai elemen tersebut.

- `fill()` = untuk mengisi semua elemen dalam array dengan nilai yang sama.

  Contoh penggunaan:

      let angka = [1, 2, 3, 4, 5];
      angka.fill(0); // nilai dari angka sekarang adalah [0, 0, 0, 0, 0]

      console.log(angka); // output: [0, 0, 0, 0, 0]

  Method `fill()` juga dapat menerima dua argumen opsional, yaitu indeks awal dan indeks akhir dari bagian array yang ingin diisi dengan nilai yang sama, seperti berikut:

      let angka = [1, 2, 3, 4, 5];
      angka.fill(0, 1, 4); // nilai dari angka sekarang adalah [1, 0, 0, 0, 5]

      console.log(angka); // output: [1, 0, 0, 0, 5]

`Method yang membuat salinan baru dari array`

- `map(callback(currentValue, index, array), thisArg)` = untuk membuat array baru dengan hasil pemanggilan fungsi callback pada setiap elemen array. Fungsi callback dapat mengubah nilai elemen saat ini dan mengembalikan nilai baru.

- `filter(callback(currentValue, index, array), thisArg)` = untuk membuat array baru dengan elemen-elemen yang lulus uji kondisi yang ditentukan dalam fungsi callback. Fungsi callback mengembalikan true untuk elemen yang harus disertakan dalam array baru.

- `reduce(callback(accumulator, currentValue, index, array), initialValue)` = untuk menerapkan fungsi callback pada setiap elemen array untuk menghasilkan nilai akhir tunggal. Fungsi callback mengakumulasi nilai menggunakan accumulator dan mengoperasikan currentValue.

  Contoh penggunaan:

      const products = [
        { name: 'Laptop', price: 1000 },
        { name: 'Mouse', price: 20 },
        { name: 'Keyboard', price: 50 },
      ];
      const total = products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
      console.log(total); // Output: 1070

- `slice(startIndex, endIndex)` = untuk mengambil potongan (subarray) dari array berdasarkan indeks awal dan akhir yang ditentukan, dan mengembalikan subarray tersebut sebagai array baru.

  Contoh penggunaan: jika ingin mengambil sub-array dari awal array hingga indeks tertentu, dapat memberikan nilai 0 sebagai indeks awal pada method slice(), seperti berikut:

      let buah = ['apel', 'mangga', 'pisang', 'jeruk', 'durian'];
      let buah2 = buah.slice(0, 3); // nilai dari buah2 adalah ['apel', 'mangga', 'pisang'], dan nilai dari buah tidak berubah

      console.log(buah); // output: ['apel', 'mangga', 'pisang', 'jeruk', 'durian']
      console.log(buah2); // output: ['apel', 'mangga', 'pisang']

- `concat(array2, array3, ..., arrayX)` = untuk menggabungkan dua atau lebih array dan mengembalikan array baru yang dihasilkan.

- `flat(depth)` untuk menggabungkan semua elemen pada array, dengan level kedalaman yang ditentukan, ke dalam array baru.

  Contoh penggunaan:

      // example 1:
      let arr = [1, 2, [3, 4]];
      let arrFlat = arr.flat();
      console.log(arr); // output: [1, 2, [3, 4]]
      console.log(arrFlat); // output: [1, 2, 3, 4]

      // example 2:
      let arr = [1, 2, [3, [4, 5]]];
      let arrFlat = arr.flat(2);
      console.log(arr); // output: [1, 2, [3, [4, 5]]]
      console.log(arrFlat); // output: [1, 2, 3, 4, 5]

      // example 3:
      const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
      arr4.flat(Infinity);
      // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

- `flatMap()` adalah method pada Array di JavaScript yang menggabungkan dua method yaitu `map()` dan `flat()`. Metode ini melakukan operasi pada setiap elemen array dan mengembalikan array baru yang dihasilkan dari hasil pemetaan elemen-elemen tersebut, kemudian menggabungkan array yang dihasilkan tersebut menjadi satu array dengan level yang sama.

  Contoh penggunaan:

      let arr = [1, 2, 3];
      let arrFlatMap = arr.flatMap((num) => num * 2);

      console.log(arr); // output: [1, 2, 3]
      console.log(arrFlatMap); // output: [2, 4, 6]

  Method `flatMap()` akan menghilangkan nilai-nilai yang kosong (null, undefined, NaN, atau '') dari array yang dihasilkan. Contohnya sebagai berikut:

      let arr = [1, 2, 3];
      let arrFlatMap = arr.flatMap((num) => [num * 2, null, undefined, NaN, '']);

      console.log(arr); // output: [1, 2, 3]
      console.log(arrFlatMap); // output: [2, null, undefined, NaN, '', 4, null, undefined, NaN, '', 6, null, undefined, NaN, '']

  Berikut adalah perbandingan contoh penggunaan method `flatMap()` dan `map()`, `flat()` secara terpisah pada nested array:

      // menggunakan flatMap()
      const nestedArr = [[1, 2], [3, 4], [5, 6]];
      const flattenedArr1 = nestedArr.flatMap((arr) => arr.map((val) => val * 2));

      console.log(flattenedArr1); // [2, 4, 6, 8, 10, 12]

      // menggunakan map() dan flat() terpisah
      const flattenedArr2 = nestedArr.map((arr) => arr.map((val) => val * 2)).flat();

      console.log(flattenedArr2); // [2, 4, 6, 8, 10, 12]

- `join(separator)` = untuk menggabungkan semua elemen dalam array menjadi sebuah string, dengan memisahkan elemen-elemen tersebut menggunakan separator yang ditentukan.

- `forEach(callback(currentValue, index, array), thisArg)` = untuk menjalankan fungsi callback pada setiap elemen array, dengan argumen berupa `currentValue`, `index`, dan `array`. Opsi `thisArg` dapat digunakan untuk menentukan konteks this dalam pemanggilan fungsi callback.

  method `forEach()` tidak mengembalikan nilai apa pun dan hanya digunakan untuk menjalankan fungsi pada setiap elemen pada array. Oleh karena itu, method `forEach()` tidak dapat digunakan untuk mengubah elemen pada array seperti halnya method `map()`. Namun, kita masih dapat memanfaatkan `forEach()` untuk melakukan operasi yang diperlukan pada setiap elemen pada array, seperti menghitung nilai atau memanggil fungsi lain pada setiap elemen.

**Method untuk mencari index atau elemen**

- `indexOf(searchElement, fromIndex)` = untuk mengembalikan indeks pertama kali ditemukannya `searchElement` dalam array. Jika tidak ditemukan, mengembalikan -1.

  Contoh penggunaan:

      let arr = [1, 2, 3, 4, 5, 3];
      let index = arr.indexOf(3, 3);

      console.log(index); // output: 5

- `findIndex(callback(currentValue, index, array), thisArg)` = untuk mencari indeks dari elemen pertama pada sebuah array yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi tersebut, maka method ini akan mengembalikan nilai -1.

  Contoh penggunaan:

      // example 1:
      let arr = [1, 2, 3, 4, 5];
      let index = arr.findIndex((num) => num > 3); // nilai dari index adalah 3

      console.log(index); // output: 3

      // example 2:
      let arr = [1, 2, 3, 4, 5];
      let index = arr.findIndex((num, index, array) => {
          return num > 3 && index > 1 && array.length > 4;
      });

      console.log(index); // output: 3

- `find(callback(currentValue, index, array), thisArg)` = untuk mencari elemen pertama pada sebuah array yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi tersebut, maka method ini akan mengembalikan nilai undefined.

  Contoh panggunaan:

      // example 1:
      const arr = [1, 2, 3, 4, 5];
      const result = arr.find((num) => num > 3);

      console.log(result); // output: 4

      // example 2:
      const arr = [1, 2, 3, 4, 5];
      const result = arr.find((num, index, array) => {
          return num > 3 && index > 1 && array.length > 4;
      });

      console.log(result); // output: 4

**Method untuk mengecek ada atau tidaknya elemen pada array**

- `includes(element, start)` = untuk memeriksa apakah sebuah nilai tertentu terdapat pada sebuah array. Jika nilai tersebut ditemukan, maka method ini akan mengembalikan nilai true. Jika tidak ditemukan, maka method ini akan mengembalikan nilai false.

  Contoh penggunaan:

      // example 1:
      let arr = [1, 2, 3, 4, 5];
      let check = arr.includes(3);
      console.log(check); // output: true

      let check2 = arr.includes(6);
      console.log(check2); // output: false

      // example 2:
      let arr = [1, 2, 3, 4, 5];
      let check = arr.includes(3, 2);
      console.log(check); // output: true

      let check2 = arr.includes(2, 3);
      console.log(check2); // output: false

- `some(callback(currentValue, index, array), thisArg)` = untuk memeriksa apakah setidaknya satu elemen pada array memenuhi kondisi tertentu yang diuji oleh sebuah fungsi. Method ini akan mengembalikan nilai true jika setidaknya satu elemen pada array memenuhi kondisi tersebut, dan mengembalikan nilai false jika tidak ada elemen yang memenuhi kondisi.

  Contoh penggunaan:

      // example 1:
      let arr = [1, 2, 3, 4, 5];

      let check = arr.some(function(elem) {
          return elem % 2 === 0;
      });
      console.log(check); // output: true

      let check2 = arr.some(function(elem) {
          return elem > 5;
      });
      console.log(check2); // output: false

      // example 2:
      let arr = [1, 2, 3, 4, 5];

      let check = arr.some(function(elem, index, array) {
          console.log(`Index of ${elem} is ${index} in [${array}]`);
          return elem > 3;
      });
      console.log(check); // output: true

- `every(callback(currentValue, index, array), thisArg)` = untuk memeriksa apakah semua elemen pada array memenuhi kondisi tertentu yang diuji oleh sebuah fungsi. Method ini akan mengembalikan nilai true jika semua elemen pada array memenuhi kondisi tersebut, dan mengembalikan nilai false jika ada setidaknya satu elemen yang tidak memenuhi kondisi.

  Contoh penggunaan:

      // example 1:
      let arr = [2, 4, 6, 8, 10];

      let check = arr.every(function(elem) {
          return elem % 2 === 0;
      });
      console.log(check); // output: true

      let check2 = arr.every(function(elem) {
          return elem > 5;
      });
      console.log(check2); // output: false

      // example 2:
      let arr = [2, 4, 6, 8, 10];

      let check = arr.every(function(elem, index, array) {
          console.log(`Index of ${elem} is ${index} in [${array}]`);
          return elem % 2 === 0;
      });
      console.log(check); // output: true

### ~ The MAGIC of CHAINING METHODS :

**Chaining method** pada JavaScript adalah teknik menggabungkan beberapa method pada objek atau array menjadi satu baris kode dengan tujuan untuk memperpendek dan memperjelas kode. Dalam chaining method, nilai yang dihasilkan dari method pertama akan langsung digunakan sebagai input untuk method kedua, dan seterusnya.

**chaining method** juga dapat membuat kode menjadi sulit dibaca dan sulit untuk diperbaiki jika terjadi kesalahan. Oleh karena itu, penggunaan chaining method sebaiknya dibatasi hanya pada kasus yang sederhana dan mudah dibaca.

### ~ PROJECT PALNNING :

1. **User Stories**

   adalah deskripsi fungsionalitas aplikasi dari sudut pandang pengguna / user. Kemudian semua user stories disatukan dengan jelas dan akan menggambarkan fungsionalitas seluruh aplikasi.

   format umum: sebagai siapa (user, admin, dll). Ingin melakukan **apa**, apa manfaatnya (**kenapa**).

2. **Features**

   setelah mendeskripsikan gambaran umum dari keseluruhan aplikasi, langkah selanjutnya memungkinkan developer untuk menentukan fitur yang tepat dalam aplikasi agar membuat user storie dapat benar-benar berfungsi.

3. **Flowchart**

   flowchart digunakan untuk menerapkan semua fitur yang telah ditentukan sebelumnya dan memvisualisasikan berbagai tindakan serta bagaimana program tersebut bereaksi terhadap tindakan dari user / pengguna.

4. **Architecture**

   adalah bagaimana cara kita mengatur code dan fitur atau package javascript apa saja yang akan kita gunakan untuk menerapkan flowchart yang telah dibuat.
   Architecture juga bisa diartikan untuk menyatukan semua kode dan memberi kita struktur dimana kita dapat mengembangkan fungsionalitas aplikasi.

5. **Development**

   adalah langkah untuk mengimplementasikan semua rencana yang kita buat menggunakan kode.

</details>

<details> <summary>

## [Advanced-DOM-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/13-Advanced-DOM-Bankist/script.js)

</summary>

### ~ EVENT PROPA GATION - bubbling and capturing :

**Note:**
Setiap fungsi atau code yang ditetapkan untuk menangani suatu **event** yang terjadi pada elemen HTML tertentu, atau disebut juga "handler", dapat mengakses **_property object event_**.

- **event.target** merujuk ke elemen terdalam yang menjadi sumber terjadinya event.
- **event.currentTarget (this)** merujuk ke elemen tempat EventLister dilampirkan.

1. **Capturing** adalah konsep di mana event listener dijalankan pada elemen induk (parent) terlebih dahulu sebelum mencapai elemen target (child), yaitu dimulai dari elemen terluar (outer) menuju elemen terdalam (inner).

   **_Poin penting_**: Capturing sering digunakan untuk validasi input data atau untuk menentukan elemen target dengan akurat.

2. **Bubbling** adalah konsep di mana event listener dijalankan pada elemen target (child) terlebih dahulu sebelum mencapai elemen induk (parent), yaitu dimulai dari elemen terdalam (inner) menuju elemen terluar (outer).

   **_Poin penting_**: Bubbling sering digunakan untuk menangani event pada elemen HTML secara dinamis dan efisien melalui konsep delegasi event.

### ~ DOM TRAVERSING :

**DOM Traversing** adalah konsep dalam JavaScript yang digunakan untuk menjelajahi dan memanipulasi elemen HTML dan node di dalam dokumen HTML.

Dalam DOM Traversing, kita dapat menggunakan method dan properti pada objek "**_parentNode_**", "**_childNodes_**", "**_nextSibling_**", "**_previousSibling_**", "**_firstChild_**", dan "**_lastChild_**" untuk menjelajahi struktur dokumen HTML. Method dan properti ini memungkinkan kita untuk menelusuri dari satu elemen ke elemen lainnya, dan melakukan manipulasi terhadap elemen tersebut.

Sebagai contoh, kita dapat menggunakan method "**_parentNode_**" untuk mengakses elemen induk dari suatu elemen HTML. kita juga dapat menggunakan method "**_childNodes_**" untuk mengakses semua node (termasuk elemen, teks, komentar, dll.) yang menjadi anak dari suatu elemen HTML.

Selain itu, kita juga dapat menggunakan method "**_querySelector_**" dan "**_querySelectorAll_**" untuk mencari elemen HTML berdasarkan selector CSS. Metode "**_querySelector_**" mengembalikan elemen HTML pertama yang cocok dengan selector yang diberikan, sementara method "**_querySelectorAll_**" mengembalikan semua elemen HTML yang cocok dengan selector tersebut dalam bentuk NodeList.

Dalam DOM Traversing, kita dapat melakukan manipulasi pada elemen HTML dan node, seperti mengubah nilai atribut, menambah atau menghapus elemen, dan memanipulasi teks. Manipulasi tersebut dapat dilakukan dengan menggunakan method dan properti pada objek "**_setAttribute_**", "**_getAttribute_**", "**_createElement_**", "**_appendChild_**", "**_removeChild_**", "**_insertBefore_**", "**_replaceChild_**", "**_textContent_**", dan banyak lagi.

### ~ EFFICIENTS SCRIPT LOADING - defer and async :

**Efficient Script Loading** merujuk pada teknik-teknik yang digunakan untuk memuat script pada halaman web dengan cara yang lebih efisien dan dapat meningkatkan kecepatan dan kinerja halaman tersebut. Ada tiga teknik utama yang digunakan untuk memuat script: defer, regular, dan async.

**Regular:**

- Ketika script dimuat tanpa atribut defer atau async, maka script tersebut akan dimuat secara sinkronus, dan akan menghentikan proses rendering halaman web sampai script selesai dimuat dan dieksekusi.
- Gunakan jika perlu support dengan browser lama. karena defer dan async hanya support browser modern.
- Best practice penempatan scriptnya diletakkan di akhir elemen Body.

**Async:**

- Script dimuat pada saat yang sama saat HTML diurai (dengan cara Asynchronous), jadi script sebenarnya diunduh secara Asynchronous tetapi kemudian dieksekusi segera dengan cara Synchronous dan kode HTML harus menunggu untuk diurai sampai script selesai dieksekusi.
- Script tidak dijamin akan dieksekusi sesuai urutan perintah kode, karena konten yang lebih cepat diambil itulah yang akan pertama dieksekusi.
- Gunakan untuk skrip pihak ke-3 di mana urutan perintah kode tidak masalah (misalnya Google Analytics, atau penggunaan iklan).
- Dengan ini masih mempersingkat waktu daripada menggunakan teknik regular.
- Best practice penempatan scriptnya diletakkan di bagian elemen Head.

**Defer:**

- Script masih dimuat secara Asynchronous tetapi eksekusi script ditangguhkan hingga akhir penguraian HTML. Jadi dalam praktiknya waktu loading mirip dengan attribute Async, tetapi perbedaannya eksekusi script dijalankan di akhir, dilakukan setelah penguraian HTML selesai dimuat.
- Script akan dieksekusi sesuai urutan perintah kode.
- Secara keseluruhan inilah yang terbaik, untuk script yang kita gunakan dan ketika misalnya menyertakan Library.
- Best practice penempatan scriptnya diletakkan di bagian elemen Head.

</details>

<details> <summary>

## [OOP (Object-Oriented Programming)](https://github.com/wahyukmr/JavaScript-Programming/blob/master/14-OOP/script.js)

</summary>

### ~ WHAT IS OOP :

OOP merupakan paradigma (gaya menulis dan mengatur kode) pemrograman yang didasarkan pada konsep object. Program dikembangkan dengan memodelkan dunia nyata sebagai Object yang memiliki property dan method. Object-object ini saling berinteraksi untuk mencapai tujuan yang diinginkan.

Keuntungan OOP adalah membuat kode program lebih terstruktur dan mudah dimengerti. Selain itu, OOP juga memungkinkan menggunakan kembali kode yang sudah ada.

### ~ CLASS and INSTANCE (Classical OOP) :

Paradigma Classical OOP dikenal karena menggunakan class sebagai dasar dari pembuatan objek. Konsep ini digunakan oleh banyak bahasa pemrograman seperti Java, C++, atau C#.

**Class:**

Dalam konsep OOP, **class** adalah sebuah blueprint atau template untuk menciptakan object dan menentukan property dan method yang akan dimiliki oleh object tersebut.

Sistem class dalam paradigma Classical OOP menggunakan konsep pewarisan atau inheritance untuk memperluas atau memodifikasi method dan attribute dari class dasar (superClass) ke class anak (subClass).

**Object:**

Dalam konteks OOP, **instance (object)** merupakan object nyata yang dibuat berdasarkan sebuah class dan mewarisi method atau property dari class tersebut melalui inheritance.

Sebagai analogi, kita dapat membayangkan class sebagai blueprint atau sketsa sebuah rumah, yang berisi gambaran tentang struktur, tata letak, dan ukuran ruangan. Sedangkan instance (Objek) adalah rumah yang sebenarnya, yang dibangun berdasarkan blueprint tersebut. Kita dapat membuat banyak rumah yang serupa dengan blueprint yang sama, namun setiap rumah dianggap sebagai instance yang unik, dengan karakteristik dan data yang berbeda.

Dalam OOP, ketika kita membuat sebuah **Objek** dari sebuah class, maka kita sedang membuat sebuah **instance** dari class tersebut. Instance ini akan memiliki properti dan method yang sudah didefinisikan di dalam class, namun nilai dari properti tersebut dapat berbeda-beda antara satu instance dengan instance lainnya.

### ~ PRINSIP FUNDAMENTAL OOP :

Dengan berpaku pada prinsip dasar OOP ini, dapat membantu untuk mengimplementasikan atau men-design class dengan baik. Pada dasarnya, teknik ini juga dapat digunakan diluar OOP, tetapi sangat relevan dalam konteks ini.

Ada 4 prinsip utama dalam OOP, dan mereka adalah:

1. **Abstraction:**

   Abstraction berarti menyembunyikan detail tertentu yang tidak penting bagi pengguna dan hanya menampilkan fitur atau fungsi penting.

   Contoh penerapan konsep:

   - membuat class abstrak sebagai kerangka dasar untuk class-class turunannya.
   - menyembunyikan detail implementasi yang kompleks dengan menggunakan method abstrak.

2. **Encapsulation:**

   Menjaga property dan method private didalam class, jadi mereka tidak dapat diakses dari luar class dan hanya mengekspos fungsionalitas publiknya saja.

   Contoh penerapan konsep:

   - Enkapsulasi dapat diterapkan di JavaScript dengan menggunakan closure dan IIFE (Immediately Invoked Function Expression) untuk membuat properti objek menjadi **private** atau **public**.
   - menggunakan **getter** dan **setter** untuk membatasi akses ke property yang dimiliki object.

3. **Inheritance:**

   Memungkinkan untuk membuat hubungan hierarki antara object dan mewarisi property dan method dari object induknya.

   Contoh penerapan konsep:

   - pewarisan dapat dilakukan dengan menggunakan **prototype inheritance**, dimana object turunan dapat meminjam properti dan method dari object induknya.
   - menerapkan prinsip DRY (Don't Repeat Yourself) dengan menggunakan class turunan untuk mengambil kode yang sama dari class induk.

4. **Polymorphism:**

   Memungkinkan object untuk mengambil banyak bentuk, sehingga method yang sama dapat berperilaku berbeda pada object yang berbeda.

   Contoh penerapan konsep:

   - menggunakan method yang sama dengan implementasi yang berbeda pada class-class turunannya.
   - Polimorfisme juga dapat diterapkan di JavaScript menggunakan method overloading (method dengan nama yang sama, tetapi bereda jumlah atau tipe parameternya) dan overriding (method dengan nama yang sama pada object induk dan object turunannya, namun perilakunya berbeda).

### ~ PROTOTYPE (OOP di JavaScript) :

Paradigma OOP lain seperti **prototype-based** yang digunakan oleh JavaScript, menggunakan **Prototype** sebagai dasar dari pembuatan objek. Memiliki konsep serupa dengan classical OOP.

**Prototype** berfungsi sebagai "pola dasar" atau "blueprint" yang digunakan untuk membuat object-object baru.

**Prototype** merupakan sebuah mekanisme yang digunakan untuk mengimplementasikan pewarisan dalam JavaScript.

Setiap object yang dibuat berdasarkan Prototype, ini biasa disebut **Instance**.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE - Constructor Functions dan properti prototype :

Ketika kita membuat sebuah fungsi khusus yang disebut constructor function, fungsi tersebut dapat digunakan untuk membuat objek-objek baru. Ketika objek dibuat menggunakan constructor function, setiap objek tersebut akan memiliki akses ke properti dan method yang didefinisikan dalam constructor function tersebut.

Misalnya, jika kita membuat constructor function bernama `Person`, kita dapat menambahkan method dan properti ke properti `prototype` di dalamnya. Properti `prototype` ini adalah seperti kantong ajaib yang akan diwarisi oleh semua objek yang dibuat menggunakan constructor function `Person`.

Setiap objek yang dibuat menggunakan constructor function `Person` akan secara otomatis terhubung dengan objek prototype yang ditentukan oleh properti `prototype` dalam constructor function tersebut. Objek prototype ini berisi method dan properti yang akan diwarisi oleh objek-objek tersebut.

Setiap objek juga memiliki properti khusus yang disebut `[[Prototype]]` (juga dikenal sebagai **proto**, meskipun penggunaannya tidak disarankan). Properti ini secara internal mengacu pada objek prototype yang terkait dengan objek tersebut. Objek prototype ini ditentukan oleh properti `  ` dalam constructor function yang digunakan untuk membuat objek tersebut.

Melalui mekanisme pewarisan prototipe, jika suatu method atau properti tidak ditemukan di objek itu sendiri, JavaScript akan mencarinya di objek prototype melalui properti `[[Prototype]]`. Jika masih tidak ditemukan, JavaScript akan terus mencari di objek prototype berikutnya dalam rantai pewarisan, dan begitu seterusnya, hingga mencapai objek prototype terakhir yang merupakan objek prototype bawaan JavaScript yang disebut `Object.prototype`.

Keuntungan menambahkan method atau properti pada properti prototype daripada langsung pada constructor function adalah:

- **Efisiensi memori**: method atau properti yang ditambahkan pada properti prototype dibagikan oleh semua objek yang dihasilkan dari constructor function, menghemat memori.

- **Kemudahan perubahan**: Perubahan pada method atau properti pada properti prototype langsung mempengaruhi objek-objek yang menggunakannya, memberikan fleksibilitas dalam mengubah atau menambahkan fungsionalitas.

- **Kode yang terstruktur**: Menambahkan method atau properti pada properti prototype memisahkan definisi objek prototipe dari constructor function, membuat kode lebih terstruktur dan mudah dibaca.

Namun, ada kasus-kasus tertentu di mana menambahkan method atau properti langsung pada constructor function lebih cocok, terutama jika method atau properti tersebut bersifat unik dan tidak perlu diwarisi oleh objek-objek lain.

**Note:**

- Arrow function tidak bekerja dalam Constructor function.
- Mendeklarasikan Constructor function selalu memulai dengan huruf besar.
- Alih-alih membuat method didalam Constructor function, lebih baik membuatnya di properti `prototype` pada Constructor function.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE - Es6 Classes :

Dalam JavaScript ES6, kita punya fitur yang disebut "classes" yang memudahkan kita membuat objek dan menerapkan pewarisan. Ketika kita mendefinisikan sebuah class, kita bisa menentukan properti dan method yang akan dimiliki oleh objek yang dibuat dari class tersebut.

Misalnya kita punya class yang disebut `Person`. Di dalam class ini, kita bisa menentukan method atau properti yang akan dimiliki oleh objek-objek yang dibuat dari class `Person`. Misalnya kita punya method `sapa()` yang digunakan untuk menyapa, atau properti `nama` yang berisi nama orang.

Ketika kita ingin membuat objek baru dari class `Person`, kita menggunakan kata kunci `new` seperti ini: `let person = new Person()`. Objek person ini akan memiliki akses ke method dan properti yang telah kita tentukan di dalam class `Person`.

Selain itu, kita juga bisa melakukan pewarisan dengan menggunakan kata kunci `extends`. Misalnya kita punya class `Employee` yang ingin mewarisi properti dan method dari class `Person`. Kita bisa menuliskan class `Employee extends Person` untuk menunjukkan bahwa class `Employee` mewarisi class `Person`. Dengan ini, objek-objek yang dibuat dari class Employee akan memiliki akses ke method dan properti dari class `Person` dan class `Employee` sendiri.

Pewarisan ini membentuk sebuah rantai pewarisan yang serupa dengan mekanisme prototype. Jadi, jika method atau properti tidak ditemukan di objek itu sendiri, JavaScript akan mencarinya di class yang diwarisi dan terus naik ke atas dalam rantai pewarisan sampai menemukan method atau properti yang diinginkan.

Jadi, dengan menggunakan ES6 Classes, kita bisa membuat objek-objek dengan properti dan method yang telah ditentukan di dalam class. Dan kita juga bisa melakukan pewarisan antara class-class untuk membagikan method dan properti kepada class yang lain dalam sebuah rantai pewarisan.

**Note:**

- **Classes di JavaScript bekerja persis seperti constructor function**, tetapi penggunaan yang lebih baik dan lebih modern syntax. Jadi masih mengimplementasikan prototype inheritance di balik layar, namun dengan menggunakan sebuah syntax yang masuk akal bagi orang-orang yang berasal dari bahasa pemrogramman lain.
- ES6 Classes TIDAK berperilaku seperti classes di "Classical OOP" pada pembahasan sebelumnya.
- Semua method dalam Classes akan ada di object prototype, TIDAK berada di object itu sendiri, sama seperti properti `prototype` pada constructor function.
- Classes tidak bisa digunakan sebelum ia dideklarasikan.
- Classes merupakan **first-class sitizens**, yang berarti kita dapat meneruskannya ke fungsi sebagai argument dan me-return dari fungsi lain.

### ~ SETTERS and GETTERS :

Setter dan getter adalah fitur khusus dalam JavaScript yang digunakan untuk mengatur (set) dan mendapatkan (get) nilai properti objek. Mereka biasanya digunakan dalam classes, tetapi juga dapat digunakan di objek biasa.

Setter digunakan untuk mengatur nilai properti. Untuk membuat setter, kita menggunakan kata kunci set, diikuti dengan nama properti yang ingin diatur nilainya. Setter memiliki satu parameter, yaitu nilai yang ingin diatur. Jika memiliki setter untuk properti yang sudah ditentukan di constructor, maka perlu membuat properti baru dengan "underscores" didepannya.

Getter digunakan untuk mendapatkan nilai properti. Untuk membuat getter, kita menggunakan kata kunci get, diikuti dengan nama properti yang ingin diperoleh nilainya. Getter tidak memiliki parameter, dan harus mengembalikan nilai.

Setter dan Getter sangat berguna untuk memvalidasi data. Mereka memberikan kontrol tambahan atas akses dan manipulasi data dalam objek.

### ~ STATIC METHOD :

Static methods (method statis) adalah method yang terkait dengan class itu sendiri, bukan dengan instance (objek) yang dibuat dari class tersebut. Mereka tidak bisa diakses melalui instance objek, tetapi langsung melalui class itu sendiri.

Penjelasan lengkap tentang static methods:

1. **Definisi**: Static methods adalah method yang terkait dengan class itu sendiri, bukan dengan instance (objek) yang dibuat dari class tersebut.

2. **Deklarasi**: Static methods dideklarasikan di dalam class dengan menggunakan kata kunci static sebelum nama method.

3. **Aksesibilitas**: Static methods dapat diakses langsung melalui class tanpa harus membuat instance objek dari class tersebut.

4. **Penggunaan**: Static methods sering digunakan untuk mengimplementasikan fungsi utilitas yang terkait dengan class tersebut atau sebagai method pembantu untuk class. Mereka seringkali tidak bergantung pada data yang spesifik untuk setiap instance objek, tetapi lebih berkaitan dengan karakteristik umum dari class itu sendiri.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE - Object.create :

Mekanisme pewarisan prototipe menggunakan `Object.create()` melibatkan pembuatan objek baru yang mewarisi properti dan method dari objek prototipe yang ada. Dalam bahasa yang lebih santai, ini seperti membuat salinan objek prototipe yang dapat digunakan sebagai "pewarisan" untuk objek baru yang dibuat.

Berikut adalah penjelasan langkah demi langkah:

- Pertama, kita memiliki objek prototipe yang akan menjadi "induk" dari objek baru yang akan dibuat. Objek prototipe ini berisi method dan properti yang ingin kita wariskan kepada objek baru.

- Selanjutnya, kita menggunakan `Object.create()` dan mengirimkan objek prototipe sebagai argumen. Ini akan membuat objek baru yang terkait dengan objek prototipe tersebut. Objek baru ini akan memiliki hubungan pewarisan dengan objek prototipe.

- Ketika kita mencoba mengakses properti atau method pada objek baru, JavaScript akan mencari properti atau method tersebut di objek itu sendiri terlebih dahulu. Jika tidak ditemukan, pencarian akan didelegasikan ke objek prototipe melalui mekanisme pewarisan.

- Proses pencarian akan berlanjut ke objek prototipe yang lebih dalam jika properti atau method tidak ditemukan di objek prototipe yang terkait. Pencarian akan terus berlanjut hingga mencapai objek prototipe terakhir dalam rantai pewarisan, yaitu objek bawaan JavaScript yang disebut Object.prototype.

Dengan menggunakan `Object.create()`, kita dapat membuat objek baru yang memiliki pewarisan prototipe yang fleksibel. Objek baru akan mewarisi method dan properti dari objek prototipe, dan kita juga dapat menambahkan method atau properti khusus pada objek baru jika diperlukan.

### ~ CARA KERJA PEWARISAN di JAVASCRIPT :

Pewarisan memungkinkan untuk menentukan class/objek yang mengambil semua fungsionalitas dari class/objek induk dan memungkinkan untuk menambahkan lebih banyak. Menggunakan pewarisan class, class/objek dapat mewarisi semua method dan properti class lain. Ini adalah fitur berguna yang memungkinkan penggunaan kembali kode.

Berikut bentuk pewarisan dalam constructor function, class ES6, dan `Object.create()`.

1.  **Constructor Function**

    Untuk menerapkan inheritance dalam constructor function, dapat menggunakan prototype chain. Prototype chain adalah mekanisme yang memungkinkan objek mewarisi properti dan method dari objek lainnya. Ketika sebuah properti atau method diakses pada objek, JavaScript pertama kali memeriksa apakah properti atau method tersebut ada dalam objek itu sendiri. Jika tidak ditemukan, JavaScript mencari properti atau method tersebut dalam prototype objek, dan jika masih tidak ditemukan, JavaScript melanjutkan pencarian ke atas prototype chain hingga properti atau method tersebut ditemukan atau sampai akhir dari chain.

    Berikut adalah contoh implementasi inheritance menggunakan constructor function dan prototype chain:

        // Fungsi konstruktor dasar
        function Animal(nama) {
          this.nama = nama;
        }

        // Menambahkan method ke prototype Animal
        Animal.prototype.katakanNama = function() {
          console.log("Nama saya " + this.nama);
        }

        // Fungsi konstruktor turunan
        function Dog(nama, ras) {
          // Memanggil fungsi konstruktor dasar dengan menggunakan method "call" untuk mengatur konteks dan meneruskan argumen yang diperlukan
          Animal.call(this, nama);

          this.ras = ras;
        }

        // Membentuk prototype chain dengan membuat objek baru dengan prototype Animal
        Dog.prototype = Object.create(Animal.prototype);

        // Menambahkan method ke prototype Dog
        Dog.prototype.gonggong = function() {
          console.log("Guk!");
        }

        // Membuat instance dari fungsi konstruktor Dog
        const dog1 = new Dog("Max", "Labrador");
        dog1.katakanNama();  // Output: Nama saya Max
        dog1.gonggong();     // Output: Guk!

    Pada contoh di atas, fungsi konstruktor `Animal` berperan sebagai class dasar, yang menentukan properti `nama` dan method `katakanNama`. Fungsi konstruktor `Dog` adalah class turunan yang memperluas class `Animal` dengan memanggil fungsi konstruktor `Animal` menggunakan `Animal.call(this, nama)` dan menetapkan properti tambahan `ras`.

    Untuk menetapkan inheritance, kita mengatur `Dog.prototype` menjadi objek baru yang dibuat dengan `Object.create(Animal.prototype)`. Ini menciptakan objek baru yang memiliki `Animal.prototype` sebagai prototipenya, membentuk prototype chain. Sebagai hasilnya, instance dari `Dog` memiliki akses ke method `katakanNama` yang ditentukan dalam `Animal` serta method `gonggong` yang ditentukan dalam `Dog`.

    Inheritance dalam constructor function memungkinkan penggunaan ulang kode, karena properti dan method yang ditentukan dalam class dasar dapat diakses oleh class turunan. Ini juga mendukung perluasan fungsionalitas class dasar dengan menambahkan properti dan method baru ke class turunan.

2.  **ES6 Classes**

    Sangat mudah menerapkan pewarisan menggunakan syntax Class. Syntax ini memerikan cara yang lebih sederhana dan terstruktur untuk mengatur inheritance antara class. Namun ingat, ES6 classes menggunakan constructor function untuk menerapkan pewarisan dibalik layar.

    Berikut adalah contoh implementasi inheritance menggunakan ES6 Classes:

        // class dasar (superclass)
        class Animal {
          constructor(nama) {
            this.nama = nama;
          }

          katakanNama() {
            console.log(`Nama saya ${this.nama}`);
          }
        }

        // class turunan (subclass)
        class Dog extends Animal {
          constructor(nama, ras) {
            super(nama);
                this.ras = ras;
          }

          gonggong() {
            console.log("Guk!");
          }
        }

        // Membuat instance dari class Dog
        let dog1 = new Dog("Max", "Labrador");
        dog1.katakanNama();  // Output: Nama saya Max
        dog1.gonggong();     // Output: Guk!

    Dalam contoh diatas,

    Kata kunci `extends` digunakan untuk membuat class `Dog` mewarisi sifat dan perilaku dari class `Animal`.

    Method `constructor` untuk menginisialisasi properti. Jika class turunan tidak memerlukan properti baru, maka tidak perlu menulis method konstruktor di class turunan.

    kata kunci `super()` untuk memanggil constructor class dasar dan menginisialisasi properti yang ingin digunakan dari class dasar. Ini memastikan bahwa properti dapat diwarisi dari class dasar.

    Kita juga dapat melakukan override atau mengganti method pada class dasar dengan menerapkan method dengan nama yang sama di class turunan.

    Jadi, class turunan memiliki akses ke properti dan method yang ditentukan dalam class dasar dan dapat memperluas fungsionalitas dengan menambahkan method tambahan.

3.  **Object.Create()**

    Dengan menggunakan `Object.create()`, kita dapat membangun inheritance menggunakan prototype chain dengan lebih fleksibel, di mana objek turunan dapat mewarisi method-method dari objek dasar dan menambahkan method atau properti tambahan sesuai kebutuhan. Berikut adalah contoh implementasi inheritance menggunakan `Object.create()` :

        // Kelas dasar (superclass)
        const Animal = {
          init: function(nama) {
            this.nama = nama;
          },

          katakanNama: function() {
            console.log(`Nama saya ${this.nama}`);
          }
        };

        // Kelas turunan (subclass)
        const Dog = Object.create(Animal);

        Dog.init = function(nama, ras) {
          Animal.init.call(this, nama); // Memanggil method init dari superclass
          this.ras = ras;
        };

        Dog.gonggong = function() {
          console.log("Guk!");
        };

        // Membuat instance dari kelas Dog
        const dog1 = Object.create(Dog);
        dog1.init("Max", "Labrador");
        dog1.katakanNama();  // Output: Nama saya Max
        dog1.gonggong();     // Output: Guk!

    Dalam contoh di atas, kita menggunakan `Object.create()` untuk membentuk prototype chain antara `Animal` dan `Dog`.

    `Animal` adalah objek dasar yang memiliki method `init` dan `katakanNama`. Kemudian, `Dog` dibuat dengan menggunakan `Object.create(Animal)` untuk mewarisi method-method dari `Animal`.

    Di dalam `Dog`, kita menetapkan method `init` untuk menginisialisasi properti `nama` dan `ras`. method `init` pada `Dog` memanggil method `init` dari `Animal` menggunakan `Animal.init.call(this, nama)` untuk memastikan properti `nama` diinisialisasi dengan benar. Selain itu, `Dog` juga memiliki method `gonggong`.

    Dalam contoh ini, `Object.create()` digunakan untuk menciptakan instance `dog1` yang merupakan objek yang mewarisi sifat dan perilaku dari `Dog`. Kita kemudian memanggil method `init` pada `dog1` untuk menginisialisasi properti `nama` dan `ras`, dan menggunakan method `katakanNama()` dan `gonggong()` pada `dog1`.

### CARA KERJA ENCAPSULATION di JAVASCRIPT :

Encapsulation dapat didefinisikan sebagai "pengemasan data dan fungsi ke dalam satu komponen". Ini juga dikenal sebagai grouping atau bundling, dan hanya berarti menyatukan data dan method yang beroperasi pada data. Ini bisa berupa fungsi, class, atau objek.

Encapsulation memungkinkan "mengontrol akses ke komponen itu". Ketika kita memiliki data dan method terkait dalam satu unit, kita dapat mengontrol bagaimana data diakses di luar unit. Proses ini disebut **Encapsulation**.

1. **Protected Properties**

   Protected properties dalam Encapsulation di JavaScript adalah properti yang ada di antara properti publik dan pribadi. Biasanya, kita menggunakan awalan **underscore (\_)** pada nama properti atau method untuk menandakan bahwa properti tersebut bersifat protected. **Meskipun bisa diakses dari luar class, penggunaan underscore memberikan petunjuk bahwa seharusnya method atau properti tersebut tidak diakses atau dimanipulasi secara langsung dari luar class**. Namun, JavaScript tidak memiliki perlindungan akses langsung seperti bahasa lain. Untuk mengontrol aksesibilitas, kita bisa menggunakan **getter** dan **setter**. Ini memungkinkan kita menerapkan validasi atau logika tambahan saat mengakses atau mengubah nilai properti protected.

2. **Private Class fields dan Methods**

   Proposal untuk private class fields and methods dalam JavaScript saat ini berada di tahap tiga dan belum menjadi bagian dari bahasa JavaScript. Proposal ini memungkinkan kita untuk memiliki field (properti yang akan ada disemua instance) dan method yang tidak dapat diakses dari luar kelas, mirip dengan properti dan method private dalam bahasa OOP tradisional seperti Java dan C++.

   Dalam proposal untuk meningkatkan dan mengubah kelas JavaScript yang disebut "class field", ada empat field(properti) dan method yang akan kita bahas: publick fields, private fields, publick method, dan private method.

   **Publick fields** adalah properti yang akan ada pada semua instance class (jadi, tidak berada di Prototypes) dan dapat diakses melalui kata kunci "this".

   **Private fields** dideklarasikan menggunakan simbol **"#"** untuk membuat properti benar-benar tidak dapat diakses dari luar class. Private field akan ada disetiap instance.

   **Public method** adalah fungsi yang akan ada di semua instance dari class. Semua method ini akan berada di dalam prototype instance.

   **Private method** sangat berguna untuk menyembunyikan detail implementasi dari luar, karena dengan private method yang hanya dapat diakses dari dalam class. Private method diasosiasikan dengan prototipe, tetapi tidak secara langsung milik prototipe. memiliki private method di class meningkatkan penggunaan memori heap dibandingkan dengan memiliki method di prototipe.

   Ada tambahan,

   **Static public field** adalah properti yang dimiliki oleh kelas itu sendiri dan dapat diakses tanpa membuat instance.

   **Static method** adalah method yang didefinisikan pada kelas dan dapat dipanggil langsung pada kelas tanpa membuat instance.

   Kedua static diatas berguna untuk menyimpan data bersama dan mendefinisikan fungsi utilitas pada level kelas.

</details>

<details> <summary>

## [Asynchronous](https://github.com/wahyukmr/JavaScript-Programming/blob/master/16-Asynchronous/script.js)

</summary>

### ~ ASYNCHRONOUS dan SYNCHRONOUS CODE di JAVASCRIPT :

**Synchronous (blocking):**

Dalam code Synchronous, setiap baris code dieksekusi secara berurutan, menunggu baris sebelumnya selesai dieksekusi. Sebagian besar code di tulis menggunakan Synchronous.

**Asynchronous (non-blocking):**

Asynchronous adalah konsep dimana code dieksekusi di "latar belakang" tanpa menghentikan atau memblokir eksekusi code. jadi, memungkinkan eksekusi code berlanjut tanpa harus menunggu operasi asynchronous selesai. **Callback function**, **Promise**, atau **Async Await** digunakan untuk menangani operasi asynchronous dalam pemrograman JavaScript.

Operasi asynchronous adalah operasi yang membutuhkan waktu untuk selesai, seperti mengambil data dari server, permintaan jaringan, membaca atau menulis file, atau melakukan operasi yang membutuhkan waktu pemrosesan yang lama.

Jika memiliki beberapa operasi asynchronous yang ingin dieksekusi secara berurutan dapat menggunakan **Promise chaining** atau **Async/await chaining**. Namun jika ingin dieksekusi secara parallel dapat menggunakan `Promise.all()` untuk menangani multiple Promise dalam satu blok try-catch.

Konsep penting untuk mengelola kode Asynchronous:

1.  **Callback function**
    Callback function adalah fungsi yang dilewatkan sebagai argument ke fungsi lain. Callback function dapat menjamin bahwa tugas tertentu akan selesai sebelum melanjutkan ke langkah selanjutnya. Namun Callback function bisa mengakibatkan **_Callback Hell_**, yaitu penumpukan banyak callback dalam callback yang akan membuat code sulit untuk dikelola dan dibaca dengan jelas. Dari sinilah muncul konsep seperti Promise dan Async/await untuk mengatasi masalah ini.

    Penting untuk dipahami bahwa Callback function dapat bersifat Asynchronous tergantung bagaimana mereka diimplementasikan. Penggunaan Callback function dalam konteks Asynchronous membuat mereka bersifat Asynchronous, sedangkan penggunaan dalam konteks Synchronous membuat mereka bersifat Synchronous.

    Penggunaan `setTimeout` dan ketika menggunakan `then()` atau `async`/`await` untuk menangani respons dari promise, callback function dapat bersifat Asynchronous.

2.  **Promise**
    Promise adalah object yang merepresentasikan nilai yang akan tersedia dimasa depan, baik itu sukses (resolve) atau gagal (reject). Promise juga dapat digunakan untuk membuat pola desain seperti pola **_Chaining (rantai)_**, di mana dapat menggabungkan beberapa operasi asynchronous secara berurutan. Promise memungkinkan penanganan respons yang berhasil dan gagal dalam blok yang terpisah, sehingga memungkinkan penanganan kesalahan dengan lebih terstruktur.

    Ketika membuat Promise dengan `new Promise`, kita memberikan sebuah fungsi dengan dua parameter, yaitu `resolve` dan `reject`. Menggunakan `resolve` untuk mengeksekusi Promise dengan keadaan berhasil (resolve) dan `reject` untuk mengeksekusi Promise dengan keadaan gagal (reject).

    Method `.then()` digunakan untuk menangani hasil ketika promise berhasil (resolve)

    Method `.catch()` digunakan untuk menangani hasil ketika promise mengalami kesalahan (reject)

    Promise memiliki tiga status, yaitu:

    1. **pending** (sedang menunggu), kondisi atau keadaan awal Promise.
    2. **fulfilled** (terpenuhi), ketika tugas selesai dengan sukses.
    3. **rejected** (ditolak), ketika terjadi kesalahan dalam menyelesaikan tugas.

    Contoh penggunaan:

        function fetchUser(id) {
          return new Promise((resolve, reject) => {
            fetch(`http://swapi.dev/api/people/${id}`)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Gagal mendapatkan data pengguna.");
                }
              })
              .then((user) => {
                resolve(user);
              })
              .catch((error) => {
                reject(error);
              });
          });
        }

        // Menggunakan promise
        fetchUser(1)
        .then((user) => {
          console.log("Pengguna:", user);
        })
        .catch((error) => {
          console.error("Kesalahan:", error);
        });

3.  **Asycn/await**
    Async/await adalah cara baru untuk menulis kode Asynchronous dengan menggunakan Promise.

    `async` digunakan untuk mendefinisikan sebuah fungsi Asynchronous, yang akan mengembalikan Promise secara implisit.

    `await` digunakan di dalam fungsi Asynchronous untuk menunggu hasil dari sebuah Promise.

    Dengan async/await, kita bisa menulis kode Asynchronous dengan gaya yang lebih mirip dengan kode Synchronous, membuatnya lebih mudah dibaca dan dipahami.

### ~ ASYNCHRONOUS BEHIND the SCENES :

Untuk memahami bagaimana operasi asynchronous bekerja di balik layar, mari kita lihat contoh sederhana yang melibatkan sebuah aplikasi web.

Dalam pendekatan asinkron, halaman web akan memulai permintaan ke server, tetapi daripada menunggu respons, program akan terus menjalankan tugas lainnya. Sementara itu, di balik layar, server akan memproses permintaan tersebut dan mengirimkan respons. Begitu respons diterima, fungsi panggilan balik (callback) akan dijalankan untuk mengelola respons tersebut.

Berikut adalah langkah-langkah detail tentang bagaimana operasi asynchronous bekerja di balik layar:

1. Memulai Tugas Asynchronous:
   Halaman web mengirim Request Asynchronous ke server menggunakan teknologi seperti AJAX (Asynchronous JavaScript and XML) atau Fetch API. Request ini mencakup informasi tentang operasi yang diinginkan dan menentukan callback function atau menggunakan Promise untuk menangani respons yang diterima.

2. Eksekusi Tugas di Latar Belakang:
   Browser atau lingkungan runtime mengelola eksekusi tugas Asynchronous secara terpisah dari thread utama eksekusi. Hal ini memungkinkan program tetap berjalan dan menjalankan tugas lain tanpa terhalang oleh operasi Asynchronous.

3. Event Loop dan Callback Queues (antrian panggilan balik):
   Saat tugas Asynchronous sedang dieksekusi, lingkungan runtime memasuki sebuah event loop. Event loop ini terus-menerus memeriksa apakah ada tugas atau event yang telah selesai dan perlu diproses. Setelah tugas Asynchronous selesai, lingkungan runtime akan menempatkan callback function yang terkait dengan tugas tersebut ke dalam sebuah Callback Queues.

4. Callback Execution:
   Selama event loop, ketika thread utama kosong, ia memeriksa Callback Queues untuk memeriksa apakah ada callback function yang tertunda. Jika ada callback function dalam antrian, ia akan diambil dan dijalankan. Callback function ini akan mengelola respons dari server dan memperbarui tampilan halaman atau menjalankan operasi lain yang diperlukan.

5. User Interface Update:
   Jika callback function memperbarui tampilan halaman, hal ini mungkin akan memicu proses pembaruan tampilan di browser, di mana elemen-elemen yang diperbarui akan dirender ulang pada halaman web.

### ~ HTTP and HTTPS :

**HTTP** (Hypertext Transfer Protocol) dan **HTTPS** (Hypertext Transfer Protocol Secure) adalah dua protokol yang digunakan untuk mengirimkan data melalui internet. Protokol ini memungkinkan browser web untuk berkomunikasi dengan server web dan mengambil halaman web serta sumber daya lainnya.

1. **HTTP (Hypertext Transfer Protocol):**

   HTTP adalah protokol standar yang digunakan untuk mengirimkan data antara browser web dan server web. Ini adalah protokol dasar yang digunakan di web dan beroperasi di atas protokol transport seperti TCP (Transmission Control Protocol).

   Cara kerja HTTP adalah sebagai berikut:

   - Browser web mengirimkan permintaan HTTP ke server web untuk mendapatkan halaman web atau sumber daya lainnya.
   - Server web menerima permintaan tersebut dan merespons dengan mengirimkan kembali data yang diminta, seperti halaman web atau file gambar.
   - Browser web menerima respons dari server web dan menampilkan halaman web kepada pengguna.

2. **HTTPS (Hypertext Transfer Protocol Secure):**

   HTTPS adalah versi yang aman dari HTTP. Ini menggunakan enkripsi SSL/TLS (Secure Sockets Layer/Transport Layer Security) untuk melindungi data yang dikirimkan antara browser web dan server web. Enkripsi ini menjaga kerahasiaan dan integritas data serta melindungi pengguna dari serangan peretas atau penyadap yang mencoba mencuri informasi sensitif.

   Cara kerja HTTPS adalah sebagai berikut:

   - Ketika browser web mengirimkan permintaan HTTPS ke server web, server web merespons dengan mengirimkan sertifikat digital yang berisi kunci enkripsi publik.
   - Browser web memeriksa keabsahan sertifikat dengan menggunakan otoritas sertifikasi terpercaya (Certificate Authority - CA) yang menyimpan sertifikat untuk server web yang bersangkutan.
   - Setelah keabsahan sertifikat terverifikasi, browser web dan server web melakukan pertukaran kunci enkripsi simetris untuk sesi yang aman.
   - Selanjutnya, semua data yang dikirimkan antara browser web dan server web dienkripsi menggunakan kunci enkripsi simetris tersebut.
   - Data yang dienkripsi diterima oleh server web, didekripsi, diproses, dan respons dienkripsi sebelum dikirimkan kembali ke browser web.

   Penggunaan HTTPS sangat dianjurkan untuk semua jenis situs web, terutama yang memerlukan pertukaran informasi sensitif. Ini melindungi privasi pengguna dan memastikan integritas data saat berkomunikasi melalui internet.

### ~ JSON (notasi object javascript) :

JSON adalah sebuah format data untuk pertukaran dan penyimpanan data (mengirim dan menerima data antar server dan client).

Selain JSON, ada XML yang juga dapat digunakan untuk mentransfer / menerima data dari web server. Namun, JSON sekarang merupakan standar yang digunakan karena banyak kelebihan dibandingkan XML. Salah satunya JSON dapat dibaca oleh bahasa apapun, digunakan sebagai format data untuk bahasa pemrograman apapun.

alur pertukaran data antara browser dan server dengan format JSON:

1. Permintaan dari Client(browser) ke server:
   - browser membuat Request ke server, seperti mengakses halaman web atau mengirim data.
   - jika melakukan pengiriman data, data tersebut terlebih dulu diubah menjadi String JSON dengan `JSON.stringify(dataUser)`.
   - kemudian permintaan dikirim dalam bentuk HTTP Request, yang berisi informasi seperti method (GET, POST, dll.), URL, header, dan data payload (jika diperlukan).
2. Pemrosesan permintaan di server:
   - server menerima HTTP Request dari browser.
   - server memproses permintaan sesuai dengan method yang digunakan dan URL yang dituju.
   - jika diperlukan, server dapat memanipulasi atau memperoleh data dari sumber eksternal, seperti basis data.
3. Pembuatan respons dari server ke browser:
   - server menghasilkan respons yang akan dikirim kembali ke browser.
   - respons ini biasanya berisi data yang diminta oleh browser atau pesan status yang mengindikasikan apakah permintaan berhasil atau gagal.
   - respons HTTP memiliki status code, seperti 200 OK untuk berhasil, 404 Not Found untuk sumber daya yang tidak ditemukan, atau 500 Internal Server Error untuk kesalahan server.
4. Penyampaian reespons ke browser:
   - respons dikirim dalam bentuk HTTP Response, yang berisi informasi seperti status code, header, dan data payload (jika diperlukan).
   - data payload dapat berupa konten HTML, CSS, JavaScript, atau JSON.
5. Pemrosesan data JSON di browser:
   - Jika respons mengandung data dalam format JSON, browser menerima data tersebut.
   - browser dapat mengurai data JSON tersebut dengan mengubahnya menjadi sebuah Object melalui `JSON.parse(dataUser)`.
   - Data itu dapat digunakan untuk memperbarui tampilan halaman web atau melakukan tugas lainnya di browser.

Awalnya, satu-satunya cara untuk mengirimkan beberapa data formulir ke server adalah melalui tag `<form>` di HTML, dengan Request POST atau GET. Namun, sekarang kita dapat mengirimkan ke server kapan pun tanpa harus berupa `<form>`, melalui AJAX.

### ~ TEKNIK MENGIRIM REQUEST KE SERVER SECARA ASYNC :

1. **AJAX (Asynchronous JavaScript dan XML)**

   AJAX adalah salah satu cara yang dianjurkan untuk melakukan permintaan atau pengiriman HTTP request ke server dari browser. Dengan menggunakan AJAX, kita dapat mengirim permintaan ke server dan menerima responnya secara asynchronous tanpa harus memuat ulang seluruh halaman web. Meskipun namanya mengacu pada XML, sekarang ini biasanya data yang dikirimkan dan diterima menggunakan format JSON.

   AJAX memanfaatkan objek `XMLHttpRequest`(XHR) di JavaScript untuk membuat dan mengelola permintaan HTTP. Ini adalah method klasik yang telah digunakan sejak lama sebelum adanya fetch API.

   Cara kerja:

   - membuat Object XMLHttpRequest dengan menggunakan sintaks `new XMLHttpRequest()`.
   - menyiapkan detail Request menggunakan method `open()` dan mengatur parameternya seperti jenis method (GET, POST, dll), URL tujuan, Header, dan data yang akan dikirim jika ada.
   - mengirim permintaan ke server menggunakan method `send()`. Permintaan dikirim secara asynchronous, sehingga kode JavaScript akan melanjutkan eksekusinya tanpa menunggu respons dari server.
   - untuk menangani respons dari server menggunakan event listener seperti `onreadystatechange` atau `onload` pada objek XMLHttpRequest.
   - setelah respons diterima, kita dapat memprosesnya sesuai kebutuhan. Respons dari server biasanya berupa data dalam format JSON, XML, atau teks.
   - Selama proses pengiriman permintaan dan menerima respons, terdapat kemungkinan terjadinya kesalahan. kita perlu menangani kesalahan tersebut dengan menggunakan event `onerror`.

2. **Fetch API**

   Fetch API adalah API modern yang disediakan oleh JavaScript yang menyediakan antarmuka untuk melakukan permintaan HTTP dan mendapatkan respons berupa Promise dari server secara asynchronous yang membuatnya dapat ditangani dengan lebih mudah dibandingkan dengan XHR.

   Fetch API mengembalikan promise yang memudahkan penanganan respons menggunakan sintaks `async`/`await` atau `then()` untuk chaining.

   Cara Kerja:

   - membuat fetch api dengan menggunakan method `fetch()`.
   - menyiapkan detail Request, seperti jenis method (GET, POST, dll), URL tujuan, Header, dan data yang akan dikirim jika ada.
   - permintaan dikirim secara asynchronous, sehingga kode JavaScript akan melanjutkan eksekusinya tanpa menunggu respons dari server.
   - respons dari server akan diterima berupa Promise yang telah diselesaikan. Untuk menangani respons atau promise tersebut menggunakan method `then()`.
   - setelah respons diterima, kita dapat memprosesnya sesuai kebutuhan. Respons dari server biasanya berupa data dalam format JSON, XML, atau teks.
   - Selama proses pengiriman permintaan dan menerima respons, terdapat kemungkinan terjadinya kesalahan. kita perlu menangani kesalahan tersebut dengan menggunakan method `catch()`.

### ~ BLOCK TRY-CATCH :

Block try-catch adalah sebuah mekanisme dalam JavaScript yang digunakan untuk menangkap dan menangani kesalahan (exceptions) yang terjadi selama eksekusi kode. Block try-catch memungkinkan kita untuk mengontrol alur program ketika terjadi kesalahan, dan melakukan tindakan yang sesuai dengan jenis kesalahan yang terjadi.

Block try-catch tidak hanya digunakan untuk kode asynchronous. Block try-catch dapat digunakan untuk menangani kesalahan dalam kode synchronous maupun asynchronous.

Pada kode synchronous, block try-catch dapat digunakan untuk menangani kesalahan yang terjadi dalam block kode yang dieksekusi secara berurutan.

Pada kode Asynchronous, seperti penggunaan async/await atau Promise, blok try-catch digunakan untuk menangani kesalahan yang terjadi selama eksekusi operasi Asynchronous. Blok try digunakan untuk mencakup operasi Asynchronous yang mungkin memunculkan kesalahan, dan blok catch digunakan untuk menangani kesalahan yang terjadi.

### ~ PROMISE COMBINATORS :

**Promise combinator** adalah teknik untuk menggabungkan atau mengkombinasikan beberapa Promise menjadi satu Promise tunggal yang akan di-resolve atau di-reject berdasarkan hasil dari Promise-promise yang dikombinasikan tersebut. Ini berguna ketika perlu menangani beberapa operasi Asynchronous secara bersamaan atau bergantung satu sama lain.

Berikut adalah beberapa Promise combinator yang umum digunakan:

1. `Promise.all`
   Menggabungkan beberapa Promise menjadi satu Promise tunggal yang akan di-resolve jika semua Promise dalam array di-resolve, atau akan di-reject jika ada setidaknya satu Promise yang di-reject. Promise.all akan mengembalikan array hasil yang sesuai dengan urutan Promise dalam array input.
2. `Promise.race`
   Menggabungkan beberapa Promise menjadi satu Promise tunggal yang akan di-resolve atau di-reject berdasarkan Promise pertama yang diselesaikan. Promise.race akan mengembalikan hasil atau kesalahan dari Promise pertama yang diselesaikan, dan mengabaikan hasil atau kesalahan dari Promise-promise yang lain.
3. `Promise.any`
   Menggabungkan beberapa Promise menjadi satu Promise tunggal yang akan di-resolve jika minimal satu Promise dalam array di-resolve, atau akan di-reject jika semua Promise dalam array di-reject. Promise.any akan mengembalikan hasil dari Promise pertama yang di-resolve.
4. `Promise.allSettled`
   menggabungkan beberapa Promise menjadi satu Promise tunggal. Perbedaannya dengan `Promise.all` adalah bahwa `Promise.allSettled` akan menunggu semua Promise selesai, baik itu di-resolve atau di-reject. Kemudian, ia akan mengembalikan array hasil yang berisi objek untuk setiap Promise yang diselesaikan.

   Dengan menggunakan `Promise.allSettled`, dapat mengumpulkan semua hasil atau kesalahan dari beberapa Promise secara lengkap, tanpa memperdulikan apakah Promise tersebut di-resolve atau di-reject. Ini berguna dalam situasi di mana kita ingin mengeksekusi beberapa operasi Asynchronous secara paralel dan memproses hasilnya secara terpisah.
   </details>

<details><summary>

## [Modern-JS-Modules-Tooling](https://github.com/wahyukmr/JavaScript-Programming/blob/master/17-Modern-JS-Modules-Tooling/script.js)

</summary>

### ~ MODERN JAVASCRIPT DEVELOPMENT :

Berikut adalah beberapa aspek utama dari pengembangan JavaScript modern:

1. **ECMAScript 6 (ES6) dan versi terbaru:**

   ECMAScript adalah standar resmi untuk bahasa JavaScript. Versi terbaru dari ECMAScript, seperti ES6 (juga dikenal sebagai ES2015), ES7, ES8, dan seterusnya, menambahkan banyak fitur baru ke bahasa JavaScript. Misalnya, fitur seperti arrow functions, classes, template literals, dan destructuring assignment. Menggunakan fitur-fitur ini memungkinkan pengembang untuk menulis kode yang lebih bersih, lebih ekspresif, dan lebih efisien.

2. **Kerangka Kerja (Framework) dan Perpustakaan (Library):**

   Ada banyak kerangka kerja dan perpustakaan yang memudahkan pengembangan aplikasi web dengan JavaScript. Beberapa contoh kerangka kerja populer termasuk React, Angular, dan Vue.js. Kerangka kerja ini menyediakan struktur dan alat untuk membangun aplikasi yang kompleks dengan JavaScript. Perpustakaan JavaScript seperti jQuery, Lodash, dan Axios juga sangat berguna dalam pengembangan aplikasi web.

3. **Bundler dan Task Runner:**

   Bundler seperti Webpack dan Parcel digunakan untuk menggabungkan berkas JavaScript dan sumber daya lainnya menjadi satu berkas tunggal yang dapat diunggah ke server. Bundler juga dapat mengoptimalkan dan memampatkan kode JavaScript, serta mengelola dependensi. Task runner seperti Grunt dan Gulp membantu dalam otomatisasi tugas-tugas pengembangan, seperti menggabungkan dan meminify file-file JavaScript, menjalankan pengujian otomatis, dan banyak lagi.

4. **Module System:**

   JavaScript awalnya tidak memiliki dukungan bawaan untuk modul. Namun, dengan ES6, modul menjadi bagian dari bahasa itu sendiri. Sekarang, pengembang dapat menggunakan sintaks `import` dan `export` untuk mengatur kode mereka ke dalam modul yang dapat digunakan kembali. Ini memudahkan pembagian dan pengelolaan kode dalam aplikasi yang lebih besar.

5. **Asynchronous Programming:**

   JavaScript modern menggunakan pendekatan asynchronous programming yang kuat untuk menangani operasi I/O yang lambat, seperti permintaan jaringan atau operasi panggilan API. Ini dicapai dengan menggunakan callback, Promise, dan fitur-fitur baru seperti async/await. Pendekatan ini memastikan bahwa aplikasi tidak terjebak saat menunggu respons dari operasi I/O dan tetap responsif bagi pengguna.

6. **Testing dan Debugging:**

   Dalam pengembangan JavaScript modern, pengujian dan debugging adalah bagian penting. Ada alat-alat seperti Jest, Mocha, dan Jasmine yang membantu dalam menulis dan menjalankan pengujian otomatis pada kode JavaScript. Untuk debugging, browser modern menyediakan konsol JavaScript yang kuat, serta alat-alat pengembangan pihak ketiga seperti **Chrome DevTools**.

7. **Build Tools dan Automasi:**

   Build tools seperti `npm` (Node Package Manager) dan `Yarn` membantu dalam mengelola dependensi, membangun proyek, dan menjalankan tugas-tugas pengembangan lainnya. Automasi dengan menggunakan alat seperti npm scripts memungkinkan pengembang untuk mengatur aliran kerja pengembangan mereka dengan mudah.

### ~ MODULE in JAVASCRIPT :

Modul ES6 di JavaScript adalah mekanisme yang memungkinkan pengorganisasian, pengelompokan, dan pemisahan kode ke dalam unit yang dapat digunakan ulang. Diperkenalkan dalam ECMAScript 6 (ES6), modul ES6 menggunakan sintaksis `impor` dan `ekspor` untuk mengungkapkan dan mengimpor fungsi, variabel, atau class antar file JavaScript. Ini membantu dalam mengelola kompleksitas kode, mendorong pemisahan tanggung jawab, dan mempromosikan praktik pengembangan perangkat lunak yang baik. Modul ES6 dapat digunakan baik di browser maupun di lingkungan Node.js, dan alat bundling seperti Webpack dan Rollup dapat digunakan untuk menggabungkan modul ES6 ke dalam satu file yang dapat dipahami oleh browser atau environment yang lebih tua.

### ~ INTRODUCTION to NPM :

Npm adalah Node Package Manager, sebuah perangkat lunak penting dalam pengembangan perangkat lunak dengan Node.js. Npm digunakan untuk mengelola dan membagikan paket-paket perangkat lunak JavaScript. Pengembang dapat mengunduh, menginstal, dan mengelola dependensi yang diperlukan untuk proyek mereka. Npm memiliki repositori online yang berisi ribuan paket perangkat lunak yang bisa diakses secara gratis atau berbayar. Selain itu, pengembang juga dapat membuat dan membagikan paket mereka sendiri.

Pengembang dapat menggunakan terminal atau command line interface (CLI) untuk menjalankan perintah-perintah npm. Beberapa perintah umum yang sering digunakan antara lain:

1. `npm init`: Perintah ini digunakan untuk membuat file `package.json`, yang berisi informasi tentang proyek dan dependensi yang digunakan.

2. `npm install`: Perintah ini digunakan untuk menginstal semua dependensi yang terdaftar dalam file `package.json` pada proyek yang sedang berjalan.

3. `npm install <nama-paket>`: Perintah ini digunakan untuk menginstal paket perangkat lunak tertentu dari registry npm.

4. `npm uninstall <nama-paket>`: Perintah ini digunakan untuk menghapus paket perangkat lunak yang telah diinstal sebelumnya.

5. `npm update`: Perintah ini digunakan untuk memperbarui semua paket perangkat lunak yang terinstal dalam proyek.

### ~ REVIEW - modern and clean code :

1. **Mudah di baca**
   - tulis code agar orang lain dapat memahaminya.
   - tulis code agar kita sendiri dapat memahaminya selama satu tahun.
   - hindari solusi yang terlalu "pintar" dan terlalu rumit.
   - gunakan nama variabel yang deskriptif: **apa yang dikandungnya**.
   - gunakan nama fungsi yang deskriptif: **apa yang mereka lakukan**.
2. **Umum**
   - gunakan prinsip DRY (refactor code).
   - jangan mengotori **global namespace**, sebagai gantinya gunakan **encapsulation**.
   - jangan gunakan variable `var`.
   - gunakan pemeriksaan tipe yang kuat (`===` dan `!==`).
3. **Functions**
   - secara umum, fungsi hanya boleh melakukan satu hal.
   - jangan gunakan lebih dari 3 parameter fungsi.
   - gunakan default parameter jika memungkinkan.
   - umumnya, return tipe data yang sama seperti yang diterima.
   - gunakan arrow function jika ingin membuat kode yang lebih mudah dibaca.
4. **OOP**
   - gunakan ES6 Classes
   - selalu encapsulate data dan jangan mengubahnya dari luar Class.
   - implementasikan method chaining.
   - jangan gunakan arrow function sebagai method (dalam object biasa).
5. **Menghindari code yang bersarang**
   - gunakan **early return**(Guard clauses : memeriksa kondisi awal atau menguji nilai input pada awal sebuah fungsi atau blok kode, dan jika kondisi tersebut tidak terpenuhi, maka fungsi akan keluar secara dini tanpa melanjutkan eksekusi kode yang tersisa).
   - gunakan operator **ternary**(conditional) atau **logical operaator** daripada `if`.
   - gunakan beberapa `if` daripada `if`/`else-if`.
   - hindari penggunaan **for loop**, gunakan method array sebagai gantinya.
   - hindari penggunaan API Asynchronous berbasis Callback.
6. **Asynchronous Code**
   - komsumsi Promise dengan async/await untuk kejelasan yang terbaik.
   - bila memungkinkan, jalankan Promise secara paralel (Promise.all).
   - tangani error dan Promise rejections.

### ~ IMPERATIVE vs DECLARATIVE CODE :

Pendekatan imperative dan declarative adalah dua paradigma atau gaya penulisan kode yang dapat diterapkan dalam JavaScript, serta dalam bahasa pemrograman lainnya.

1.  **Imperative Code**

    Menjelaskan langkah-langkah spesifik yang harus diambil oleh program untuk mencapai tujuan yang diinginkan. Memerinci bagaimana program harus melakukan tugasnya.

    Contoh:

        let numbers = [1, 2, 3, 4, 5];
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }

    Situasi penggunaan:

    - cocok digunakan saat perlu mengontrol langkah-langkah dan alur eksekusi yang spesifik.
    - berguna dalam pengolahan data yang kompleks atau memerlukan pengendalian secara langsung.
    - lebih cocok untuk pemrosesan data yang bersifat mutable atau berubah-ubah.

2.  **Declarative Code**

    Menjelaskan apa yang harus dicapai tanpa memerinci langkah-langkahnya secara spesifik. Fokus pada apa yang ingin dilakukan, bukan bagaimana melakukannya.

    Paradigma declarative sebenarnya adalah paradigma pemrograman yang sangat besar dan populer, bahkan telah melahirkan subparadigma yang disebut **funcional programming**.

    Contoh:

        let numbers = [1, 2, 3, 4, 5];
        let sum = numbers.reduce((acc, cur) => acc + cur, 0);

    Situasi penggunaan:

    - lebih fokus pada hasil yang ingin dicapai daripada langkah-langkah spesifik untuk mencapainya.
    - memisahkan logika bisnis dari detail implementasi.
    - dapat membuat kode lebih ringkas, mudah dibaca, dan mudah dipahami.
    - lebih cocok untuk pemrosesan data yang bersifat immutable atau tidak berubah.

    Declarative Syntax:

    - menggunakan array dan object destructuring.
    - menggunakan spread operator (...).
    - menggunakan ternary operator.
    - menggunakan template literal.

Penting untuk dicatat bahwa dalam prakteknya, seringkali ada campuran antara pendekatan imperative dan deklarative dalam sebuah proyek, tidak harus menggunakan 100% deklarative. Kita dapat menggunakan pendekatan yang tepat berdasarkan kebutuhan spesifik tugas atau bagian kode yang sedang di tulis.

### ~ FUNCTIONAL PROGRAMMING (FP) PRINCIPLES :

Functional Programming dan penulisan declarative code telah menjadi cara penulisan kode modern di dunia JavaScript.

**Functional programming** dapat dianggap sebagai salah satu cara untuk mencapai pemrograman declarative, yang didasarkan pada gagasan menulis software dengan menggabungkan banyak **pure functions**, menghindari **side effects**, dan **mutating** data.

Beberapa konsep dan ide dalam functional programming:

- **Side Effects** adalah sesuatu yang dilakukan fungsi untuk mempengaruhi atau memodifikasi data apapun yang berada di luar fungsi. Contohnya mengubah variabel apapun yang berada diluar scope fungsi akan menyebabkan side effect, memasukkan sesuatu ke console serta mengubah sesuatu di DOM.

- **Pure Functions** berarti fungsi tanpa Side Effects, fungsi yang hanya bergantung pada input yang diberikan dan tidak mempengaruhi environment lain di luar fungsi.

- **Immutability** berarti State (data) tidak dapat diubah atau dimodifikasi. Daripada mengubah State asli, FP mendorong pembuatan salinan State dan momodifikasinya sesuai keinginan (dapat mencegah Side Effect).

- **First-class Functions** berarti dapat menyimpan fungsi dalam variable, mengirimkannya sebagai argument ke fungsi lain, atau mengembalikan fungsi dari fungsi lain.

- **higher-order Functions** berarti fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi. memungkinkan penggunaan pola seperti map, filter, reduce, dan lainnya.

Jadi, FP adalah pendekatan yang lebih spesifik dalam penggunaan **fungsi**, sementara Declarative Programming adalah pendekatan yang lebih umum di mana kita menyatakan **apa yang harus dicapai tanpa memberikan instruksi langkah-demi-langkah yang spesifik**. FP dapat membantu mencapai pendekatan declarative dalam pemrograman, tetapi paradigma declarative dapat diterapkan dalam berbagai paradigma pemrograman lainnya juga (seperti OOP, pendekatan imperative, Logical Programming, Constraint Programming, dan sebagainya) tergantung kebutuhan project.

### ~ MENGGUNAKAN TEKNIK FUNCTIONAL PROGRAMMING :

- mencoba menghindari memutasi data.
- selalu memilih method atau fungsi bawaan yang tidak menghasilkan Side Effects.
- melakukan transformasi data dengan method `map()`, `filter()` dan `reduce()`.
- jika memungkinkan, coba untuk menghindari Side Effects dari fungsi yang ditulis.

</details>
