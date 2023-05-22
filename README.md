<p align="right">27/11/2022</p>

<h1 align="center"> :clipboard: Notes </h1>

</br>

<details><summary>

## [Fundamentals-Part-1](https://github.com/wahyukmr/JavaScript-Programming/blob/master/01-Fundamentals-Part-1/script.js)

</summary>

### ~ Introduction of JavaScript

<strong>JavaScript is a High-Level, Object-oriented, Multi-paradigm programming language.</strong>

-   **Programming language** hanyalah alat yang memungkinkan kita untuk menulis kode yang akan memerintahkan komputer untuk melakukan sesuatu.
-   **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer.
-   **Object-oriented** berarti bahasa tersebut sebagian besar didasarkan pada konsep objek untuk menyimpan sebagian besar jenis data.
-   **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.

### ~ Type conversion and coercion :

Type Coercion atau type coercion adalah konversi nilai dari tipe data yang berbeda dan menentukan mana yang memiliki posisi lebih tinggi untuk dieksekusi terlebih dahulu.

-   **Type conversion** (ketika kita secara menual mengonversi dari satu tipe data ke tipe lainnya).
-   **Type coercion** (terjadi setiap kali operator berurusan dengan dua nilai yang memiliki tipe data berbeda, Jadi javascript dibalik layar mengonversi salah satu nilai agar sesuai dengan nilai lainnya sehingga operasi dapat dijalankan).

### ~ Truthy and falsy operators

Truthy dan falsy operator adalah konsep dalam JavaScript yang menentukan apakah suatu nilai dianggap true atau false dalam konteks logika.

-   **Truthy operator** adalah nilai yang dianggap true dalam kondisi logika, seperti angka selain 0, string yang tidak kosong, objek, array, dan nilai true itu sendiri.
-   **Falsy operator** adalah nilai yang dianggap false dalam kondisi logika, seperti angka 0, string kosong, null, undefined, NaN, dan nilai false itu sendiri.

Ketika menggunakan operator logika seperti if, while, atau for, nilai yang dianggap falsy akan dianggap sebagai false, sedangkan nilai yang dianggap truthy akan dianggap sebagai true. Konsep truthy dan falsy operator ini berguna untuk mengevaluasi nilai yang dihasilkan dari ekspresi atau fungsi yang kompleks, serta membantu pengembang dalam menulis kode yang lebih efisien dan mudah dibaca.

### ~ Statements and expressions

-   **Expressions** adalah sebuah kode yang menghasilkan nilai. Expression bisa berupa nilai tunggal, operasi matematika, atau pemanggilan fungsi. Contoh:

        1 + 2; // Ini adalah sebuah expression yang menghasilkan nilai 3
        x = 3; // Ini juga sebuah expression yang menghasilkan nilai 3, yaitu nilai yang ditetapkan pada variabel x

-   **Statements** adalah sebuah kode yang menghasilkan aksi atau perintah. Jadi pada dasarnya setiap kali sesuatu yang diakhiri dengan titik koma itu adalah statement. Statement bisa berupa deklarasi variabel, perulangan, atau percabangan. Contoh:

        let x; // Ini adalah sebuah statement deklarasi variabel

        for (let i = 0; i < 5; i++) { // Ini adalah sebuah statement perulangan
            console.log(i);
        }
        if (x === 3) { // Ini adalah sebuah statement percabangan
            console.log("Nilai x sama dengan 3");
        }

Perbedaan utama antara expression dan statement adalah bahwa expression menghasilkan nilai, sedangkan statement menghasilkan aksi. Selain itu, expression dapat digunakan sebagai bagian dari statement, seperti pada pengisian nilai variabel atau pada kondisi if-else.

</details>

<details> <summary>

## [Fundamentals-Part-2](https://github.com/wahyukmr/JavaScript-Programming/blob/master/02-Fundamentals-Part-2/script.js)

</summary>
  
### ~ Activating Strict Mode :

Selalu gunakan **_'use strict'_** untuk membantu men-debug code.

### ~ Reviewing Functions :

Tiga perbedaan cara menulis fungsi, tetapi semua bekerja dengan cara yang sama, menerima input data, mengubah data, dan kemudian mengeluarkan data.

1. **Fuction declaration**, fungsi yang dapat digunakan sebelum di nyatakan sebelumnya.
2. **Function expression**, pada dasarnya fungsu yang nilainya disimpan pada sebuah variabel.
3. **Arrow function**, bagus untuk fungsi dengan hanya satu baris statement. Tidak bisa mengakses kata kunci "this" dan Super di OOP.

### ~ Breaking and Continuing

-   **continue** berarti keluar dari iterasi loop saat ini dan melanjutkan ke loop selanjutnya.

-   **break** digunakan untuk sepenuhnya mengakhiri seluruh loop.

### ~ Looping

Penjelasan mengenai beberapa jenis looping di JavaScript.

1.  **for Loop:**

    Digunakan untuk mengulang sejumlah iterasi yang diketahui sebelumnya. Biasanya digunakan untuk melakukan iterasi pada tipe data array dengan menggunakan indeks sebagai variabel pengontrol.

    Beberapa contoh penggunaan For loop:

    -   Mengulangi setiap elemen dalam sebuah array dan melakukan operasi pada setiap elemen.

        const numbers = [1, 2, 3, 4, 5];

        for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        }

    -   Mengulang sejumlah kali dan melakukan operasi pada setiap iterasi.

            for (let i = 0; i < 10; i++) {
                console.log(i);
            }

    -   Mengulang setiap properti pada object.

            const person = {
                name: 'John',
                age: 30,
                location: 'USA'
            };

            for (const key in person) {
                console.log(`${key}: ${person[key]}`);
            }

    -   Mengulang setiap karakter dalam sebuah string.

            const str = 'JavaScript';

            for (let i = 0; i < str.length; i++) {
                console.log(str[i]);
            }

    -   mengulang setiap elemen dalam array multidimensi.

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

    -   Melakukan pengulangan selama kondisi terpenuhi.

            let i = 0;
            while (i < 10) {
                console.log(i);
                i++;
            }

    -   Membaca input dari pengguna hingga input yang benar diberikan.

            let input;
            while (input !== 'yes') {
                input = prompt('Apakah kamu yakin ingin melanjutkan?');
            }

    -   Mengakses data pada sebuah array dengan index.

            const numbers = [1, 2, 3, 4, 5];
            let i = 0;
            while (i < numbers.length) {
                console.log(numbers[i]);
                i++;
            }

    -   Melakukan proses tertentu selama kondisi terpenuhi.

            let count = 0;
            while (count < 10) {
                console.log('Ini adalah iterasi ke-', count);
                count++;
            }

3.  **do-while Loop:**

    Do-while loop digunakan ketika kita ingin menjalankan blok kode setidaknya satu kali dan kemudian mengecek kondisi pengulangan.

    Beberapa contoh penggunaan do-while loop:

    -   validasi input dari user.

            let number;

            do {
                number = parseInt(prompt("Enter a positive number: "));
            } while (isNaN(number) || number <= 0);

            console.log("Valid number entered: ", number);

    -   menjalankan kode setidaknya satu kali, bahkan jika kondisi yang diuji pada awal loop tidak terpenuhi.

            let count = 0;
            do {
                console.log("The count is: ", count);
                count++;
            } while (count < 5);

4.  **for-in Loop:**
    Merupakan perulangan for yang digunakan untuk mengulangi setiap properti yang terdefinisi dalam sebuah objek atau index di array, baik dari properti objek itu sendiri maupun properti yang diwarisi dari prototype-nya. Biasanya digunakan pada objek yang kompleks, seperti objek JSON, untuk memproses dan memanipulasi data.

</details>

<details> <summary>

## [Developer-Skills](https://github.com/wahyukmr/JavaScript-Programming/blob/master/03-Developer-Skills/script.js)

</summary>

### ~ 4 Step to solve any problem :

1. Pastikan untuk memahami 100% masalahnya. **_ajukan pertanyaan yang tepat_** untuk mendapatkan gambaran yang jelas tentang masalahnya.
2. **_Membagi masalah_**. memecah masalah besar menjadi sub-masalah yang lebuh kecil.
3. Jangan takut untuk melakukan **_research_** pada setiap masalah (Google, stackoverflow, MDN web docs,...)
4. Untuk masalah yang lebih besar, **_tulis pseudo-code_** atau rancangan program sebelum menulis kode yang sebenarnya.

### ~ The Debugging Process :

1. **Identify** (sadar bahwa ada bug)

    - Selama development
    - Testing software
    - Report dari pengguna selama production
    - Context: browsers, user, etc

2. **Find** (Mengisolasi dimana tepatnya bug terjadi dalam kode)

    - Developer console (simple code)
    - Debugger (complex code)

3. **Fix** (Perbaiki bugnya)

    - Ubah solusi yang salah dengan solusi yang benar

4. **Prevent** (Mencegahnya agar tidak terjadi lagi)

    - Mencari untuk bug yang sama dalam kode serupa
    - Menulis test menggunakan testing software

    </details>

<details> <summary>

## [DOM and Events](<https://github.com/wahyukmr/JavaScript-Programming/blob/master/05-Dom-And-Events-Fundamental-(Project#1-Guess-My-Number)/script.js>)

</summary>

### ~ DOM (Document Object Model)

**DOM** adalah Struktur yang merepresentasikan html documents. Memungkinkan javascript untuk mengakses elemen html dan memanipulasi style (mengubah teks, atribut html dan bahkan gaya CSS) nya.

**DOM bukanlah javascript**, melainkan bagian dari Web API. Jadi, methods dan properti untuk memanipulasi DOM bukan bagian dari JavaScript, tetapi dapat berinteraksi dengan javascript.

**Tipe data yang terdapat pada DOM**:

1.  **Document**

    -   Merupakan representasi dari halaman web.
    -   Dalam satu web, terdapat satu document, dan kita tidak perlu membuatnya secara menual, karena otomatis akan ada di browser.
    -   Untuk mengakses document kita bisa menggunakan object document.
    -   **Document Object**, Kita bisa langsung menggunakannya dengan kata kunci "document".

            console.log(document);

            // output:
            <!DOCTYPE html>
            <html>
                <head></head>
                <body></body>
            </html>

    -   **Document Property**, property dalam document bisa digunkan untuk melihat semua data yang terdapat dalam document halaman web. Contoh:

            console.log(document.title);
            console.log(document.head);
            console.log(document.body);

    -   **Document Method**, banyak method yang terdapat di document digunakan untuk memanipulasi data DOM, misal membuat Node, Element, Attribute atau mengambil dan menyeleksi Node di dalam document. Contoh menyeleksi attribute id dalam element:

            console.log(document.getElementById("getId");

2.  **Node**

    -   Adalah base class untuk semua tipe data di DOM, seperti document, element, dan Attr.
    -   Artinya semua fitur yang dimiliki di Node akan dimiliki juga oleh turunannya.
    -   Node dalam DOM itu bentuknya adalah tree, artinya dengan Node kita bisa melihat **Parent** (node diatasnya), **Children** (node dibawahnya), dan **Sibling** (node yang bersebelahan / se-level).
    -   **Node Method**, method di Node bisa digunakan untuk memanipulasi data Node didalam Node tersebut. Misalnya menghapus Node children :

            <ul id="menu">
                <li id="first">First</li>
                <li id="second">Second</li>
            </ul>
            <script>
                const menu = document.getElementById("menu");
                menu.removeChildren(document.getElementById("first"));
            </script>

3.  **Element**

    -   Merupakan Node yang berbentuk element dihalaman web, misal: head, body, form, dll.
    -   Contoh menambahkan konten di element H1:

            <h1 id="title"></h1>

            <script>
                const title = document.getElementById("title");
                title.textContent = "Belajar JavaScript";
            </script>

    -   **Element Property**, karena element adalah turunan dari Node, semua property Node pun bisa digunakan di element.
    -   **Element Method**, karena element adalah turunan dari Node, semua method Node pun bisa digunakan di element.

4.  **Node List**

    -   Merupakan array/collection atau kumpulan dari Node.
    -   Biasanya NodeList digunakan ketika kita menyeleksi banyak Node sekaligus, misal ketika kita ingin mengambil semua children di Node misalnya.
    -   NodeList memiliki 2 tipe, yaitu **live** dan **static**.
    -   **live** artinya perubahan yang terjadi pada NodeList nya, akan merubah semua NodeList yang sama.
    -   Contohnya saat kita menggunakan **_element.chiidNodes_**, NodeList tersebut bersifat live.
    -   **Static** artinya perubahan yang terjadi pada NodeList nya, tidak akan merubah semua NodeList yang sama.
    -   Contohnya saat kita menggunakan **_document.querySelectorALl()_**, NoteList tersebut bersifat static.

5.  **Attr / Attribute**

    -   Merupakan representasi dari attribute sebuah element, atau singkatnya key-value, key nya adalah nama attribute dan value nya adalah value attribute.
    -   Contoh mendapatkan nama dan value attribute:

            <img id="example" src="https://example.com" alt="example">

            <script>
                imageId = document.getElementById("example");
                attribute = imageId.getAttributeNode("src");

                console.log("attribute.name"); // get name of attribute
                console.log("attribute.value"); // get value of attribute
            </script>

    -   **Attr Value**, dalam kebanyakan kasus kita langsung ingin mendapatkan value attribute. Untuk mendapatkan value attribute secara langsung menggunakan method **_getAttribute(name)_** di element.
    -   Contohnya:

            <img id="example" src="https://example.com" alt="example">

            <script>
                imageId = document.getElementById("example");
                attrValue = imageId.getAttribute("src");

                console.log("attrValue");
            </script>

    -   **Membuat attribute**, untuk membuat attribute bisa menggunakan **_document.createAttribute("name")_**
    -   Lalu untuk menambahkannya ke element, menggunakan **_element.setAttributeNode(attribute)_**.
    -   Atau bisa juga langsung membuat attribute dengan name dan value nya menggunakan **_document.setAttribute(name, value)_**.

            <img id="example">

            <script>
                const image = document.getElementById("example");

                const addAttr = image.setAttribute("src", "http://example.com");
            </script>

6.  **NamedNodeMap**

    -   Merupakan kumpulan atau collections yang berisikan attribute dalam bentuk Map.
    -   Mirip seperti NodeList, namun isinya adalah attribute.
    -   Contoh:

            <img id="example" src="https://example.com" alt="example image">

            <script>
                const image = document.getElementById("example");

                const attr = image.attributes;

                for (let babi of attr) {
                    console.log(`${babi.name} : ${babi.value}`)
                }
            </script>

**Text Node**, Merupakan Text tanpa tag HTML.

-   Dalam membuat Text Node, kita bisa menggunakan method **_document.createTextNode(string)_**. Hasilnya berupa text yang bisa ditambahkan ke Node lain.
-   Contoh, menambahkan nama text "wahyu" kedalam element div HTML :

        <div id="name"></div>

        <script>
            const name = document.querySelector("#name");

            const textName = document.createTextNode("wahyu");
            name.appendChild(textName);
        </script>

### ~ Event handlers

Node memiliki kemampuan bereaksi terhadap suatu kejadian, misal kejadian saat di klik atau saat mouse berada diatas node tersebut, dll.

Ada banyak sekali jenis kejadian yang bisa kita buatkan aksinya ketika kejadian tersebut terjadi, atau ini dikenal dengan nama **Event Handler**.

Ada dua cara menambahkan Event Handler ke Node, menggunakan **Event Target** atau **Global Event Handler**.

1.  **Event Target**

    -   merupakan parent class dari Node, artinya semua Node memiliki kemampuan dari Event Target.
    -   Pada Event Target, kita bisa menggunakan method **_addEventListener(type, callback)_** untuk menambahkan Event Target.
    -   Contoh, menambahkan suatu kejadian atau event handler ketika input di klik:

            <input id="clickMe" type="button" value="Click Me" />

            <script>
                const clickMe = document.getElementById("clickMe");
                clickMe.addEventListener("click", () => {
                    clickMe.setAttribute("value", "You Already Click Me");
                };
            </script>

2.  Global Events Handlers

    -   Untuk menambahkan Event Handler kita juga bisa menggunakan Global Events Handlers.
    -   Global Events Handlers sendiri bukanlah sebuah super class, hanya kontrak yang bisa digunakan untuk menambahkan event handler sesuai type event nya.
    -   Contoh:

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

### ~ Style

DOM juga bisa digunakan untuk memanipulasi attribute style pada element dengan lebih mudah.

Kita bisa menggunakan **_element.style.name = value_**.

Untuk penamaan Style nya menggunakan format pascalCase, misal backgroundColor.

Contoh:

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

### ~ InnerText and innerHTML

Selain **textContent**, terdapat property lain bernama **innerText** untuk mendapatkan isi text sebuah element.

Tujuannya sama, untuk mengambil atau mengubah isi text konten sebuah element, namun ada perbedaannya.

**TextContent** akan mengambil semua isi dari konten text sebuah element.

**InnerText** bisa tahu, bagaian text mana yang akan ditampilkan, dia hanya akan mengambil text nya saja.

Contoh, perbedaan textContent dan innertext:

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

**innerHTML**, innerHTML akan mengambil seluruh element HTML nya sebagai text.

Ini juga cocok jika ingin mengubah isi dari element menggunakan text yang berisi tag HTML nya sekalian.

Contoh, mengambil seluruh element HTML nya sebagai text:

    <p id="content">
        <script>
            console.log("hai");
        </script>
        <b>wahyu</b> komarudin <i>hidayah</i>
    </p>

    <script>
        const content = document.getElementById("content");
        console.log(content.innerHTML);
        // Output:  <script>
                        console.log("hai");
                    </script>
                        <b>wahyu</b> komarudin <i>hidayah</i>
    </script>

Salah satu kemampuan dari innerHTML adalah bisa mengubah isi dari children sebuah element hanya dengan string.

Tag yang terdapat di dalam string secara otomatis akan menjadi child element.

Contoh :

    <p id="content"></p></p>

    <script>
        const content = document.getElementById("content");
        content.innerHTML = "<h1>Title</h1><p>Description</p>";
    </script>

### ~ Window

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

### ~ Query Selector

**Query Selector** merupakan method untuk menseleksi node sesuai dengan pola yang kita ingin cari.

Terdapat dua method untuk Query Selector :

1. Document.querySelector(pola) digunakan menyeleksi node pertama yang sesuai dengan pola.
2. Document.querySelectorAll(pola) digunakan untuk menyeleksi semua node yang sesuai dengan pola.

**Pola Query Selector**, Pola untuk Query Selector adalah menggunakan CSS Selector. Jadi, penggunaannya seperti ketika membuat selector di CSS.

**Universal Selector** merupakan selector untuk menyeleksi semua element. Bisa menggunakan karakter \*.

Contoh :

    <script>
        const element = document.querySelectorAll("*");
        console.log(element);
    </script>

**Type Selector** adalah selector yang digunakan untuk menyeleksi tag type HTML yang kita pilih. Untuk menggunakannya, kita bisa langsung sebutkan nama tag nya.

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

**Class Selector** merupakan selector untuk menyeleksi semua element yang memiliki class yang sesuai selector. Untuk menggunakannya, kita bisa sebutkan nama class nya diawali dengan titik.

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

**ID Selector** merupakan selector yang digunakan untuk menyeleksi id yang sesuai selector. Untuk menggunakannya, kita bisa gunakan nama id diawali dengan karakter #.

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

**Attribute Selector** merupakan selector yang bisa digunakan untuk menyeleksi element berdasarkan attribute nya.

Kita bisa menggunakan selector [attribute].

Atau bisa juga untuk tag tertentu, misal menggunakan selector div[attribute].

Contoh :

    <div class="1"></div>
    <div class="2"></div>
    <div class="3"></div>

    <script>
        const element = document.querySelectorAll("[class]");
        console.log(element);
    </script>

**Operator di Attribute Selector**, Kita juga bisa menggunakan operator pada attribut selector.

Misal [attribute=value], [attribute^=value] dan lain-lain

Contoh :

    <div class="1"></div>
    <div class="2"></div>
    <div class="3"></div>

    <script>
        const element = document.querySelectorAll("div[class^='1']");
        console.log(element);
    </script>

### ~ Web Storage

**Web storage** adalah salah satu Web API (perantara agar kode JavaScript bisa "berkomunikasi" dengan browser) yang dapat menyimpan data secara lokal pada sisi client (disimpan secara lokal pada perangkat kita).

Web Storage dapat menampung data maksimal 10MB per domain.

Fungsi dari Web Storage:

-   Menyimpan data dalam bentuk string yang dihasilkan oleh halaman web agar bisa diakses secara offline.
-   Cocok juga untuk menyimpan data konfigurasi preference untuk pengguna web.

Macam-macam Web Storage:

1. **Local Storage**:

    - Digunakan untuk menyimpan data tanpa ada batasan waktu. Data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup kecuali jika kita menghapusnya.
    - Untuk menggunakan local storage, kita harus mengaksesnya melalui objek yang bernama "localStorage".

2. **Session Storage**:

    - Digunakan untuk menyimpan data sementara pada browser. Data akan hilang ketika browser atau tab browser ditutup.
    - Untuk menerapkan Session Storage, kita dapat menggunakan global objek sessionStorage.

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

-   Untuk menyimpan data kompleks seperti objek JavaScript dapat dilakukan dengan mengubah objek menjadi string menggunakan JSON.stringify().
-   Untuk mendapatkan data kompleks seperti objek JavaScript dari Web Storage dapat dilakukan dengan mengubah string objek menjadi objek menggunakan JSON.parse().

</details>

<details> <summary>

## [Behind-the-Scenes](https://github.com/wahyukmr/JavaScript-Programming/blob/master/08-Behind-the-Scenes/script.js)

</summary>

### ~ Penjelasan singkat bagaimana JavaScript bekerja dibalik layar

JavaScript adalah bahasa pemrograman yang dijalankan disisi klien (client-side) pada browser. Ketika browser membuka halaman web yang mengandung javascript, browser akan memuat dan mengeksekusi kode JavaScript secara otomatis. Prosesnya meliputi:

-   Parsing : mengurai kode JavaScript pada halaman web.
-   Compilation : kode JavaScript akan dikompilasi menjadi byte code.
-   Execution : byte code akan dieksekusi oleh JavaScript Engine, yang bertanggung jawab untuk menjalankan kode JavaScript.
-   Memory management : JavaScript Engine juga bertanggung jawab mengelola alokasi memori pada program, meliputi pengelolaan memori untuk variabel, fungsi, dan objek pada program javaScript.
-   Garbage collection : fitur yang akan menghapus data yang tidak lagi digunakan oleh program untuk mengoptimalkan penggunaan memori.

Dalam prosesnya, JavaScript juga mengandalkan DOM untuk memanipulasi elemen pada halaman web, dan juga memanfaatkan AJAX (Asynchronous javascript And XML) untuk mengirim dan menerima data dari server tanpa perlu memuat ulang halaman web.

### ~ JavaScript :

-   **High-level** berarti kita tidak perlu memikirkan banyak hal rumit, seperti mengelola memeori komputer. Kelemahannya tidak akan secepat atau dioptimalkan seperti bahasa low-level.
-   **Garbage-collected** adalah algoritma didalam javascript yang secara otomatis menghapus objek lama yang tidak digunakan dari memori.
-   **Interpreted or just-in-time compiled** dengan ini javascript mengkompilasi seluruh kode kedalam mesin sekaligus dan kemudian mengeksekusinya segera.
-   **Multi-paradigm** berarti fleksibel dan serbaguna, sehingga kita dapat menggunakan semua jenis gaya pemrograman yang berbeda (cara berbeda untuk menyusun kode) seperti imperative dan deklarative programming.
-   **Prototype-based object-oriented** adalah pendekatan object-oriented berbasis prototype.
-   **First-class functions** berarti bahwa fungsi diperlakukan seperti variabel biasa, jadi dapat meneruskan fungsi ke fungsi lain dan bahkan mereturn fungsi dari fungsi.
-   **Dynamically-type language** Ini berarti bahwa JS tidak memerlukan deklarasi eksplisit dari variabel sebelum digunakan.
-   **Single-threaded** berarti bahwa JS hanya dapat melakukan satu hal pada satu waktu. Thread pada dasarnya tempat kode kita dieksekusi di CPU.
-   **Non-blocking event loop** event loop mengambil tugas yang berjalan, mengeksekusi mereka di background dan mengembalikannya ke thread utama setelah selesai.

### ~ JS Engine

**JS Engine** hanyalah sebuah program komputer yang mengeksekusi kode javascript, jadi bertanggung jawab untuk mengurai kode dan mengonversinya menjadi perintah yang dapat dijalankan dan dipahami oleh komputer.

Beberapa contoh JS Engine populer adalah V8 dari Google, SpiderMonkey dari Mozilla, dan Chakra dari Microsoft.

Setiap Engine JavaScript selalu berisi **Call Stack** dan **Heap**.

**Call Stack** adalah tempat kode kita sebenarnya dieksekusi menggunakan sesuatu yang disebut **execution context**.

**Execution context** adalah environment di mana potongan javascript diekseksi, seperti kotak yang menyimpan semua informasi yang diperlukan untuk beberapa kode yang akan dieksekusi. execution context mengandung variable environment, scope chain dan this keyword.

**Variabel environment** mencakup variable declaration(let, const dan var), function dan argument object.

**Heap** adalah tempat kumpulan memori yang terstruktur yang menyimpan semua objek(reference types) yang dibutuhkan.

### ~ JS Runtime

**JavaScript runtime** seperti kotak yang menyediakan beberapa objek ke JavaScript yang kita butuhkan sehingga dapat berinteraksi dengan dunia luar.

Inti dari setiap JS runtime selalu merupakan JS Engine. Misalnya, Browser Chrome dan node.js menggunakan Engine yang sama - V8, tetapi Runtime mereka berbeda: di Chrome memiliki window, objek DOM, dll., sedangkan node memberi kita require, Buffers dan processes.

JavaScript runtime biasanya juga menyertakan **_callback queue_**, ini adalah struktur data yang berisi semua fungsi callback yang siap dieksekusi. Misalnya callback fungsi dari DOM event listener(click, timer, dll).

ketika call stack kosong, fungsi callback diteruskan ke stack agar dapat dieksekusi. Dan ini terjadi berkat **Event loop**. Jadi event loop mengambil fungsi callback dari callback queue dan menempatkannya ke call stack sehingga dapat dieksekusi.

### ~ Scope in JavaScript :

**Scope:**

Scope merupakan area akses sebuah data.

Analogi sederhana dari Scope, seperti sebuah tas yang berisikan buku, dimana tas adalah scope yang merupakan lingkungan atau environments tempat buku itu berada atau data itu dideklarasikan.

**Scope Concepts:**

Scoping mengajukan pertanyaan "dimana variabel tinggal?" atau "dimana kita bisa mengakses variabel tertentu dan dimana yang tidak".

Beberapa konsep scope diantaranya:

-   **lexical scope** menentukan scope variabel berdasarkan posisi variabel di dalam kode.

-   **Variabel Lookup** adalah bagian dari **Scope chain**, meskipun keduanya terkait, variabel lookup fokus pada proses mencari variabel tertentu di dalam scope chain, sementara scope chain mengacu pada urutan atau rantai dari semua scope yang ada dalam sebuah program JavaScript, dimulai dari scope yang terdalam dan berakhir pada scope global.

-   **Closure** memungkinkan fungsi untuk mengambil nilai dari variabel yang berada di luar scope fungsi itu sendiri, dan menjaga akses ke nilai tersebut bahkan setelah fungsi tersebut selesai dieksekusi.

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

### ~ Hoisting in javascript :

**Hoisting** adalah konsep di mana JavaScript mengangkat (memindahkan) deklarasi variabel dan fungsi ke atas scope, sehingga variabel atau fungsi dapat diakses sebelum dideklarasikan dalam kode. Dalam praktiknya, sebaiknya tetap dideklarasikan variabel atau fungsi terlebih dahulu sebelum digunakan agar kode lebih mudah dipahami dan dijaga keamanannya. Namun, pemahaman tentang hoisting akan membantu menghindari kesalahan dalam penulisan kode JavaScript.

Kesimpulan dari bagian ini:

-   Jangan menggunakan **var** untuk mendeklarasikan variabel.
-   Gunakan "const" pada waktu mendeklarasikan variabel.
-   Mengakses variabel sebelum mendeklarasikannya adalah praktik yang buruk dan harus dihindari.
-   Selalu mendeklarasikan fungsi terlebih dahulu sebelum menggunakannya.

### ~ How the "this" Keyword works :

**this keyword/variable** adalah variabel spesial yang dibuat untuk setiap execution context(dalam kasus ini untuk setiap fungsi). Mengambil nilai yang merujuk ke "pemilik" dari fungsi dimana kata kunci **this** ini digunakan.

Pengertian diatas bukan static. Tergantung pada bagaimana fungsi dipanggil, dan nilainya hanya diberikan ketika fungsi sebenarnya dipanggil.

Penerapan kata kunci **this:**

-   Dalam **Object Method** 👉 kata kunci **_this_** merujuk ke **objek** pemilik functionnya.
-   Di **Function** (jika menggunakan strict mode) 👉 kata kunci **_this_** mengembalikan **undefined**.
-   **Arrow Function** 👉 kata kunci **_this_** merujuk ke this dari fungsi induk terdekatnya.
-   **Event Listener** 👉 kata kunci **_this_** merujuk ke elemen DOM tempat tempat penanganan dilampirkan.

### ~ Primitives vs. Objects (Primitive vs. Reference Types) :

**Tipe Data Primitive**

-   Tipe data primitive adalah tipe data yang dianggap sebagai nilai tunggal dan bukan object.
-   Beberapa contoh diantaranya: String, Number, Boolean, Null, BigInt, Simbool, Undefined.
-   Dalam management memorinya, **Tipe Data Primitive** yang dibuat akan disimpan pada Stack engine JS, tepatnya didalam execution context (dimana mereka dideklarasikan). Setiap variabel ditempatkan pada Stack yang berbeda.
-   Jadi pada **Tipe Data Primitive**, ketika kita mengubah nilai sebuah variabel, yang terjadi adalah kita tidak mengubah nilai yang ada di dalam memori, melainkan kita membuat sebuah nilai baru yang kemudian disimpan ke dalam memori dan menggantikan nilai lama yang sebelumnya disimpan di sana. nilai lama yang sebelumnya disimpan di sana kemudian akan dibebaskan atau dihapus dari memori jika tidak digunakan lagi oleh program.
-   Contoh :

        // menggunakan tipe data primitive
        let x = 10;
        let y = x;
        x = 20;

        console.log(x); // output: 20
        console.log(y); // output: 10

**Tipe Data Reference**

-   **Tipe data reference** adalah tipe data yang merepresentasikan referensi ke object.
-   Di JavaScript **Tipe data reference** mencakup semua jenis Object. Seperti Object Literal, Arrays, Functions, Date, Map, Set, RegExp, dan banyak lagi.
-   Semua **Tipe Data Reference** akan disimpan pada **Heap** engine JS sebagai suatu referensi, bukan sebagai nilai yang sebenarnya. Saat kita membuat variabel yang menunjuk ke suatu objek atau array (tipe data reference), variabel tersebut sebenarnya menyimpan alamat memori di **Heap** di mana objek atau array tersebut disimpan, bukan isi dari objek atau array itu sendiri. Maka dari itu, jika ada perubahan keduannya akan ikut berubah.
-   Contoh :

          let obj1 = { value: 10 };
          let obj2 = obj1;

          console.log(obj1.value); // Output: 10
          console.log(obj2.value); // Output: 10

          obj1.value = 20;

          console.log(obj1.value); // Output: 20
          console.log(obj2.value); // Output: 20

          obj2.value = 30;

          console.log(obj1.value); // Output: 30
          console.log(obj2.value); // Output: 30

Mendeklarasikan variabel const tidak dapat diubah nilainya hanya berlaku untuk nilai Primitive, tetapi tidak untuk nilai Reference. karena ini hanya mengubah nilai objek yang disimpan di Heap.

### ~ Regular Functions vs. Arrow Functions :

Jangan menggunakan Arrow Function pada object method.

Ketika memiliki fungsi didalam method, solusi terbaik menggunakan arrow function.

Penggunaan kata kunci **this** bergantung pada object yang memanggilnya.

Kata kunci **arguments** tidak lagi penting di javascsript karena ada cara yang lebih modern untuk melakukannya.

</details>

<details> <summary>

## [Data-Structures](https://github.com/wahyukmr/JavaScript-Programming/blob/master/09-Data-Structures-Operators/script.js)

</summary>

### ~ Destructuring :

Destructuring adalah untuk membongkar nilai Array atau Objek menjadi variabel terpisah. Dengan kata lain destructuring memecah struktur data kompleks menjadi struktur data kecil seperti variabel.

### ~ Spread Operators ( ... ) :

**Spread operator** adalah operator dalam JavaScript yang digunakan untuk mengambil semua elemen dari sebuah array dan mengeluarkannya sebagai argumen terpisah. Artinya, dengan menggunakan spread operator, kita dapat mengambil semua nilai dari sebuah array dan melemparkannya sebagai argumen terpisah ke dalam sebuah fungsi atau menyimpannya dalam array baru.

Seperti halnya Object.assign, Spread operator juga membuat **Shallow copy** artinya hanya menyalin nilai yang berada pada **top value**, nilai yang lebih dalam berupa **Reference types** dimana jika nilai yang disalin dimodifikasi akan berpengaruh juga pada nilai aslinya.

**Spread operator** bekerja untuk tipe data array dan objek di JavaScript. Saat digunakan pada objek, spread operator akan menyebar properti objek tersebut menjadi properti terpisah. Sedangkan saat digunakan pada array, spread operator akan menyebar elemen array tersebut menjadi elemen terpisah

Dapat membuat Array atau properti objek baru dan atau untuk meneruskan nilai dalam suatu fungsi secara bersamaan. Merupakan dua kasus penggunaan Spread operator. Contoh penggunaan:

-   untuk mengambil nilai dari array dan memasukkannya ke dalam array baru.

        const numbers = [1, 2, 3];

        const newNumbers = [...numbers, 4, 5, 6];
        console.log(newNumbers);
        // output: [1, 2, 3, 4, 5, 6]

-   untuk memisahkan nilai dari sebuah objek dan meletakkannya ke dalam objek baru.

        const person = { name: 'John', age: 30 };
        const newPerson = {...person, email: 'john@example.com' };

        console.log(newPerson);
        // output: { name: 'John', age: 30, email: 'john@example.com' }

### ~ Rest Pattern and Rest Parameters ( ... ) :

**Rest parameter** dan **rest pattern** adalah fitur baru di JavaScript yang memungkinkan Anda untuk mengumpulkan atau menggabungkan beberapa nilai ke dalam sebuah array.

**Rest parameters**

-   **Rest parameter** ditandai dengan menggunakan tanda tiga titik (...) di depan parameter terakhir sebuah fungsi, yang berfungsi untuk mengambil sisa argumen dan secara otomatis akan dikonversi menjadi array.
-   **Rest parameters** hanya boleh ada satu di function.
-   **Rest parameters** hanya boleh berada di posisi paling akhir, tidak boleh di depan atau ditengah, kecuali memang cuma ada 1 parameter.
-   Contoh penggunaan rest parameter adalah sebagai berikut:

        function myFunction(a, b, ...args) {
            console.log(a); // output: 1
            console.log(b); // output: 2
            console.log(args); // output: [3, 4, 5]
        }

        myFunction(1, 2, 3, 4, 5);

**Rest pattern**

-   Rest pattern, di sisi lain, adalah cara untuk memperluas array atau objek menjadi daftar argumen. Ini dilakukan dengan menempatkan tanda tiga titik (...) di depan variabel yang diharapkan menjadi array atau objek.
-   Contoh penggunaan rest pattern adalah sebagai berikut:

        const myArray = [1, 2, 3, 4, 5];

        const [first, second, ...rest] = myArray;

        console.log(first); // output: 1
        console.log(second); // output: 2
        console.log(rest); // output: [3, 4, 5]

Dalam penggunaannya, rest parameter dan rest pattern digunakan pada parameter atau variabel yang berfungsi sebagai penerima nilai, sedangkan spread operator digunakan pada nilai yang ingin disebar atau dipisahkan.

### ~ Short Circuiting ( && and || ) di Non Boolean :

**Or Operator** (||)

-   membaca operan dari kiri ke kanan.
-   akan mengembalikan nilai pertama yang bernilai truty dari semua operan, atau hanya nilai terakhir jika semuanya falsy.
-   Dalam praktiknya kita dapat menggunakan **Or Operator** untuk menetapkan nilai default.

**And Operator** (&&)

-   Membaca operan dari kiri ke kanan.
-   Berarti sebaliknya dari **Or Operator**, yakni akan mengembalikan nilai pertama yang bernilai falsy.
-   jika tidak ada satupun yang bernilai falsy, maka operan terakhir yang akan diambil.
-   Sering kali kita dapat menggunakan **Operator And** untuk benar-benar menghindari if statement, yakni memeriksa apakah properti atau nilai tertentu benar-benar ada.

### ~ The Nullish Coalescing Operator ( ?? ) :

Merupakan operator yang mirip dengan ternary operator, berbeda pada kondisinya, jika berilai null atau undefined maka value default nya dieksekusi.

Nilai Nullish adalah: Null dan Undefined (**_tidak termasuk:_** 0 or ""). Jadi, jika nilainya berupa Null atau undefined, maka operan kedua yang akan dieksekusi dan direturn.

### ~ Logical Assignment Operators :

Prinsip dari cara kerjanya sama seperti OR, AND dan NULLISH operators. Tetapi dengan menggunakan Logical Assignment Operators menjadi lebih sederhana.

### ~ Looping Arrays: The for-of Loop

Looping ini digunakan untuk melakukan perulangan terhadap isi value dari iterable object (object yang dapat diiterasi), seperti Array, String, Set, Map, dll dan mengakses nilai elemen langsung tanpa harus menggunakan indeks seperti pada for loop.

Dengan menggunakan for-of loop kita masih bisa menggunakan **continue** dan **break** keywords.

### ~ Optional Chaining ( ? ) :

Optional Chaining = memeriksa ada atau tidaknya nilai(ada yang berarti tidak Null dan undefined), jika ada akan mengembalikan nilainya, jika tidak akan mengembalikan undefined.

### ~ Looping Object: Object Keys, Values, and Entries :

**Looping object** adalah proses untuk melakukan pengulangan atau iterasi terhadap properti-properti (property) yang ada di dalam sebuah objek. Di JavaScript, terdapat tiga cara untuk melakukan looping pada objek, yaitu:

1.  Looping melalui **Object.keys**

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

2.  Looping melalui **Object.values**

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

3.  Looping melalui **Object.entries**

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

### ~ Arrays vs Sets:

Keduannya dapat digunakan jika hanya bermain dengan daftar nilai sederhana dan hanya memiliki nilai tanpa deskripsi apa pun.

Keunggulan Array:

1. Dapat digunakan jika membutuhkan daftar nilai yang berurutan (mungkin berisi nilai yang sama).
2. Dapat digunakan saat perlu untuk memaniplasi data.

Keunggulan Set:

1. Digunakan ketika perlu bekerja dengan nilai yang unik (tidak ada nilai yang sama).
2. Digunakan saat mementingkan kinerja yang tinggi.
3. Dapat digunakan untuk menghapus duplikasi nilai pada Array.

### ~ Objects vs Maps:

Keduanya dapat digunakan jika perlu pasangan key dan value. Jadi dengan key akan memiliki cara untuk mendeskripsikan atau menggambarkan value.

Keunggulan Object:

1. Cara **sederhana** untuk menyimpan keys/value.
2. Mudah untuk menulis dan mengakses value ( menggunakan operator dot atau bracket[] ).
3. Key hanya bisa bertipe **_String_**.
4. Gunakan saat membutuhkan fungsi didalamnya (method).
5. Gunakan jika ingin bekerja dengan JSON.
6. Penggunaan data Object masih digunakan sepanjang waktu.

Keunggulan Map:

1. Performa yang lebih baik.
2. Key bisa bertipe data apapun.
3. Mudah melakukan perulangan.
4. Mudah untuk menghitung panjang/ukuran data.
5. digunakan hanya ketika perlu memetakan key ke value.
6. Gunakan saat membutuhkan key yang bukan bertipe **_String_**.
7. Map merupakan data struktur yang penting saat ini.

Penggunaan Objek Array juga umum di JavaScript.

### ~ Working with String :

-   Ingat bahwa String tidak bisa dirubah (primitive), ketika menggunakan String method itu datang dari String objek, setelahnya itu akan mengembalikan String kembali.
-   Semua String method akan mengembalikan string baru(tidak mempengaruhi string aslinya).

</details>

<details> <summary>

## [Functions](https://github.com/wahyukmr/JavaScript-Programming/blob/master/10-Functions/script.js)

</summary>
  
### ~ How Passing Argument Works: value vs reference :
  
Jika kita meneruskan nilai Primitive types sebagai argumen dari sebuah fungsi, maka argumen itu merupakan salinan dari nilai aslinya, akan menjadi nilai atau variabel yang berbeda. Karnanya apabila nilai salinan diubah tidak akan mengubah nilai originalnya.

lain halnya jika kita meneruskan Reference types ke fungsi, apa yang disalin sebenarnya hanyalah referensi ke objek di memori Heap atau bisa dikatakan keduanya menunjuk pada objek yang sama di memori Heap. Jadi saat mencoba memanipulasi salinan, sama saja memaniplasi nilai originalnya.

Dalam Programming ada dua istilah yang digunakan saat berhadapan dengan fungsi, yakni **passing by value** dan **passing by reference**. Javascript tidak memiliki passing by reference, hanya passing by value. Meskipun terlihat seperti passing by reference, namun reference itu sendiri masih merupakan nilai yang berisi memori address. Jadi pada dasarnya kita meneruskan reference ke fungsi tetapi tidak melakukan **passing by reference** seperti pada pemrograman C++.

### Fuction return value

Secara default, function tidak menghasilkan value apapun.

Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return didalam block function nya, diikuti dengan data yang ingin kita hasilkan.

Saat menggunakan kata kunci return, maka kode setelahnya tidak akan dieksekusi.

kita bisa menggunakan return untuk menghentikan eksekusi sebuah function.

### ~ First-class function and Higher-order functions :

Javascript adalah bahasa yang memiiliki **First-class function** yang berarti fungsi hanya diperlakukan sebagai nilai. Karena itu kita dapat melakukan beberapa hal:

1.  Menyimpan fungsi dalam variabel atau peoperti.
2.  Meneruskan fungsi sebagai argumen ke fungsi lain, seperti saat menambahkan event listener atau event handler ke DOM Object.
3.  Dapat me-Return fungsi dari fungsi lain.
4.  Karna fungsi merupakan objek, dia juga memiliki method (**method function**). Contohnya **bind** method.

Fakta bahwa JavaScript memiliki First-class function, memungkinkan kita untuk menggunakan dan menulis **Higher-order functions**. Higher-order functions adalah fungsi yang menerima fungsi lain (Callback function) sebagai argumen atau fungsi yang mengembalikan fungsi baru.

First-class function dan Higher-order functions adalah dua hal yang berbeda. First-class function hanyalah fitur yang dimiliki atau tidak dimiliki oleh bahasa pemrograman.

### ~ Functions Accepting Callback Functions :

Callbacks sangat sering digunakan dalam JavaScript.

Beberapa keuntungan utama Callback function:

1.  Membuat mudah untuk memecah kode menjadi bagaian yang lebih dapat digunakan kembali dan saling berhubungan.
2.  Membuat abstractions, berarti bahwa kita menyembunyikan detail dari beberapa implementasi kode, karena kita tidak terlalu peduli dengan semua detail itu.

### ~ Functions Returning Functions :

Fungsi ini berguna dibeberapa situasi. Apalagi jika menggunakan paradigma pemrograman yang sangat penting yaitu **pemrograman fungsional**.

### ~ The Call, Apply, and Bind Methods :

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

### ~ Immediately Invoked Function Expressions (IIFE) :

**IIFE** merupakan sebuah teknik dalam JavaScript untuk menjalankan sebuah fungsi secara otomatis pada saat ia didefinisikan.

IIFE dibuat dengan menempatkan fungsi dalam tanda kurung () dan menambahkan tanda kurung () lagi di bagian belakang untuk langsung memanggilnya.

IIFE sering digunakan untuk menjaga agar variabel yang didefinisikan di dalam fungsi tidak bocor ke lingkup global.

Sebagai contoh, jika kita ingin menjalankan sebuah fungsi secara otomatis pada saat halaman web kita dimuat, kita dapat menulisnya dalam IIsp sehingga fungsi tersebut hanya berjalan sekali saja dan tidak perlu dipanggil lagi di masa mendatang

IIFE juga dapat digunakan untuk membuat lingkup scope terisolasi, sehingga variabel yang didefinisikan di dalamnya tidak akan berkonflik dengan variabel di luar lingkup.

IIFE dapat dipanggil beberapa kali, tetapi setiap kali dipanggil, fungsi akan dibuat dan dijalankan dari awal.

</details>

<details> <summary>

## [Arrays-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/11-Arrays-Bankist/script.js)

</summary>

### ~ Methods Arrays summary :

**Method yang mengubah nilai asli dari array**

-   **push()** = untuk menambahkan satu atau lebih elemen ke akhir dari sebuah array. Method ini mengembalikan panjang array yang baru setelah elemen baru ditambahkan.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk'];
        let panjangArrayBaru = buah.push('pisang', 'kiwi'); // nilai dari panjangArrayBaru adalah 5

        console.log(buah); // output: ["apel", "mangga", "jeruk", "pisang", "kiwi"]
        console.log(panjangArrayBaru); // output: 5

-   **unshift()** = untuk menambahkan satu atau lebih elemen ke awal dari sebuah array. Method ini mengembalikan panjang array yang baru setelah elemen baru ditambahkan.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk'];
        let panjangArrayBaru = buah.unshift('pisang', 'kiwi'); // nilai dari panjangArrayBaru adalah 5, dan nilai dari buah sekarang adalah ["pisang", "kiwi", "apel", "mangga", "jeruk"]

        console.log(buah); // output: ["pisang", "kiwi", "apel", "mangga", "jeruk"]
        console.log(panjangArrayBaru); // output: 5

-   **pop()** = untuk menghapus elemen terakhir dari sebuah array dan mengembalikan elemen yang dihapus.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk', 'pisang', 'kiwi'];
        let buahTerakhir = buah.pop(); // nilai dari buahTerakhir adalah "kiwi", dan nilai dari buah sekarang adalah ["apel", "mangga", "jeruk", "pisang"]

        console.log(buah); // output: ["apel", "mangga", "jeruk", "pisang"]
        console.log(buahTerakhir); // output: "kiwi"

-   **shift()** = untuk menghapus elemen pertama dari sebuah array dan mengembalikan elemen yang dihapus.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk'];
        let buahPertama = buah.shift(); // nilai dari buahPertama adalah "apel", dan nilai dari buah sekarang adalah ["mangga", "jeruk"]

        console.log(buah); // output: ["mangga", "jeruk"]
        console.log(buahPertama); // output: "apel"

-   **splice()** = untuk mengubah isi dari sebuah array dengan menghapus atau menambahkan elemen ke dalam array tersebut. Method ini mengembalikan array baru yang berisi elemen-elemen yang dihapus.

    Format umum dari method splice() adalah sebagai berikut:

        array.splice(start, deleteCount, item1, item2...)

    -   start: Angka yang menentukan index array mulai dari mana penghapusan atau penambahan elemen akan dimulai.
    -   deleteCount: Jumlah elemen yang akan dihapus, dimulai dari index start. Jika nilai ini dihilangkan, maka semua elemen setelah index start akan dihapus.
    -   item1, item2, ...: Elemen yang akan ditambahkan ke dalam array, dimulai dari index start. Jika nilai ini dihilangkan, maka tidak ada elemen yang ditambahkan ke dalam array.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk', 'pisang', 'kiwi'];
        let buahDihapus = buah.splice(2, 2, 'anggur', 'semangka'); // nilai dari buahDihapus adalah ["jeruk", "pisang"], dan nilai dari buah sekarang adalah ["apel", "mangga", "anggur", "semangka", "kiwi"]

        console.log(buah); // output: ["apel", "mangga", "anggur", "semangka", "kiwi"]
        console.log(buahDihapus); // output: ["jeruk", "pisang"]

-   **reverse()** = untuk membalik urutan elemen-elemen dalam sebuah array.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'jeruk', 'pisang', 'kiwi'];
        buah.reverse(); // nilai dari buah sekarang adalah ["kiwi", "pisang", "jeruk", "mangga", "apel"]

        console.log(buah); // output: ["kiwi", "pisang", "jeruk", "mangga", "apel"]

-   **sort()** = untuk mengurutkan elemen-elemen dalam sebuah array berdasarkan kondisi pada callback function. Secara default, method ini akan mengurutkan elemen-elemen dalam array berdasarkan urutan karakter Unicode dari nilai-nilai elemen tersebut.

    Contoh penggunaan:

        let angka = [5, 2, 8, 1, 9];

        angka.sort(function(a, b) {
            return a - b;
        }); // nilai dari angka sekarang adalah [1, 2, 5, 8, 9]

        console.log(angka); // output: [1, 2, 5, 8, 9]

-   **fill()** = untuk mengisi semua elemen dalam array dengan nilai yang sama.

    Contoh penggunaan:

        let angka = [1, 2, 3, 4, 5];
        angka.fill(0); // nilai dari angka sekarang adalah [0, 0, 0, 0, 0]

        console.log(angka); // output: [0, 0, 0, 0, 0]

    Method fill() juga dapat menerima dua argumen opsional, yaitu indeks awal dan indeks akhir dari bagian array yang ingin diisi dengan nilai yang sama, seperti berikut:

        let angka = [1, 2, 3, 4, 5];
        angka.fill(0, 1, 4); // nilai dari angka sekarang adalah [1, 0, 0, 0, 5]

        console.log(angka); // output: [1, 0, 0, 0, 5]

**Method yang membuat salinan baru dari array**

-   **Data Transformation: map()** = untuk membuat array baru dengan mengaplikasikan sebuah fungsi pada setiap elemen dari array asli.

    Contoh penggunaan:

        let angka = [1, 2, 3, 4, 5];

        let angkaKuadrat = angka.map(function(x) {
            return x * x;
        }); // nilai dari angkaKuadrat adalah [1, 4, 9, 16, 25], dan nilai dari angka tidak berubah

        console.log(angka); // output: [1, 2, 3, 4, 5]
        console.log(angkaKuadrat); // output: [1, 4, 9, 16, 25]

    Fungsi yang digunakan dalam map() dapat menerima tiga argumen opsional, yaitu nilai dari elemen saat ini, indeks elemen, dan array asli. Namun, biasanya hanya nilai dari elemen saat ini yang digunakan dalam fungsi tersebut, seperti berikut:

        let angka = [1, 2, 3, 4, 5];

        let angkaGanjil = angka.map(function(x, index) {
            if (index % 2 == 0) {
                return x;
            } else {
                return 0;
            }
        }); // nilai dari angkaGanjil adalah [1, 0, 3, 0, 5]

        console.log(angka); // output: [1, 2, 3, 4, 5]
        console.log(angkaGanjil); // output: [1, 0, 3, 0, 5]

-   **Data Transformation: filter()** = untuk membuat array baru dengan menyaring elemen yang memenuhi kondisi tertentu dari array asli.

    Contoh penggunaan:

        let angka = [1, 2, 3, 4, 5];

        let angkaGanjil = angka.filter(function(x) {
            return x % 2 == 1;
        }); // nilai dari angkaGanjil adalah [1, 3, 5], dan nilai dari angka tidak berubah

        console.log(angka); // output: [1, 2, 3, 4, 5]
        console.log(angkaGanjil); // output: [1, 3, 5]

-   **Data Transformation: reduce()** = untuk mereduksi semua elemen pada sebuah array menjadi sebuah nilai tunggal dengan memanggil sebuah fungsi untuk setiap elemen. Fungsi tersebut akan menerima dua argumen, yaitu nilai akumulator dan nilai elemen saat ini. Nilai akumulator akan digunakan untuk menyimpan hasil dari pemrosesan sebelumnya dan diberikan ke fungsi untuk diproses bersamaan dengan elemen saat ini.

    Contoh penggunaan:

        let arr = [1, 2, 3, 4, 5];

        let sum = arr.reduce(function(accumulator, current) {
            return accumulator + current;
        });

        console.log(sum); // output: 15

    Kita dapat memberikan argumen opsional sebagai nilai awal untuk akumulator pada method reduce(). Jika argumen tidak diberikan, maka nilai awal akan diambil dari elemen pertama pada array.

    Contoh penggunaan dengan nilai awal yang diberikan:

        let arr = [2, 4, 6, 8, 10];

        let sum = arr.reduce(function(accumulator, current) {
            return accumulator + current;
        }, 10);

        console.log(sum); // output: 40

-   **slice()** = untuk membuat array baru yang merupakan sub-array dari array asli. Method ini dapat menerima 2 argumen opsional: indeks awal dan indeks akhir dari sub-array yang ingin diambil.

    Contoh penggunaan:

        let buah = ['apel', 'mangga', 'pisang', 'jeruk', 'durian'];
        let buah2 = buah.slice(1, 4); // nilai dari buah2 adalah ['mangga', 'pisang', 'jeruk'], dan nilai dari buah tidak berubah

        console.log(buah); // output: ['apel', 'mangga', 'pisang', 'jeruk', 'durian']
        console.log(buah2); // output: ['mangga', 'pisang', 'jeruk']

    Jika ingin mengambil sub-array dari awal array hingga indeks tertentu, dapat memberikan nilai 0 sebagai indeks awal pada method slice(), seperti berikut:

        let buah = ['apel', 'mangga', 'pisang', 'jeruk', 'durian'];
        let buah2 = buah.slice(0, 3); // nilai dari buah2 adalah ['apel', 'mangga', 'pisang'], dan nilai dari buah tidak berubah

        console.log(buah); // output: ['apel', 'mangga', 'pisang', 'jeruk', 'durian']
        console.log(buah2); // output: ['apel', 'mangga', 'pisang']

-   **concat()** = untuk menggabungkan dua atau lebih array dan menghasilkan array baru. Method ini tidak mengubah nilai asli dari array yang digabungkan, melainkan membuat array baru.

    Contoh penggunaan:

        let buah1 = ['apel', 'mangga'];
        let buah2 = ['pisang', 'jeruk', 'durian'];
        let buah3 = ['kiwi'];
        let buah4 = buah1.concat(buah2, buah3); // nilai dari buah4 adalah ['apel', 'mangga', 'pisang', 'jeruk', 'durian', 'kiwi'], dan nilai dari buah1, buah2, dan buah3 tidak berubah

        console.log(buah1); // output: ['apel', 'mangga']
        console.log(buah2); // output: ['pisang', 'jeruk', 'durian']
        console.log(buah3); // output: ['kiwi']
        console.log(buah4); // output: ['apel', 'mangga', 'pisang', 'jeruk', 'durian', 'kiwi']

    Jika ingin menggabungkan array dengan nilai skalar atau string, dapat memasukkan nilai tersebut sebagai argumen pada method concat(), seperti berikut:

        let buah1 = ['apel', 'mangga'];
        let buah2 = ['pisang', 'jeruk', 'durian'];
        let buah3 = 'kiwi';
        let buah4 = buah1.concat(buah2, buah3); // nilai dari buah4 adalah ['apel', 'mangga', 'pisang', 'jeruk', 'durian', 'kiwi'], dan nilai dari buah1 dan buah2 tidak berubah

        console.log(buah1); // output: ['apel', 'mangga']
        console.log(buah2); // output: ['pisang', 'jeruk', 'durian']
        console.log(buah4); // output: ['apel', 'mangga', 'pisang', 'jeruk', 'durian', 'kiwi']

-   **flat()** untuk menggabungkan semua elemen pada array, dengan level kedalaman yang ditentukan, ke dalam array baru.

    Contoh penggunaan:

        let arr = [1, 2, [3, 4]];
        let arrFlat = arr.flat(); // nilai dari arrFlat adalah [1, 2, 3, 4]

        console.log(arr); // output: [1, 2, [3, 4]]
        console.log(arrFlat); // output: [1, 2, 3, 4]

    Jika ingin menentukan level kedalaman penggabungan array, dapat menggunakan argumen depth pada method flat(). Jika argumen depth tidak ditentukan, maka defaultnya adalah 1. Contohnya sebagai berikut:

        let arr = [1, 2, [3, [4, 5]]];
        let arrFlat = arr.flat(2); // nilai dari arrFlat adalah [1, 2, 3, 4, 5]

        console.log(arr); // output: [1, 2, [3, [4, 5]]]
        console.log(arrFlat); // output: [1, 2, 3, 4, 5]

    Atau nested array yang lebih dalam bisa menggunakan:

        const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
        arr4.flat(Infinity);
        // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

-   **flatMap()** adalah method pada Array di JavaScript yang menggabungkan dua metode yaitu **map()** dan **flat()**. Metode ini melakukan operasi pada setiap elemen array dan mengembalikan array baru yang dihasilkan dari hasil pemetaan elemen-elemen tersebut, kemudian menggabungkan array yang dihasilkan tersebut menjadi satu array dengan level yang sama.

    Contoh penggunaan:

        let arr = [1, 2, 3];
        let arrFlatMap = arr.flatMap((num) => num * 2); // nilai dari arrFlatMap adalah [2, 4, 6]

        console.log(arr); // output: [1, 2, 3]
        console.log(arrFlatMap); // output: [2, 4, 6]

    Method flatMap() akan menghilangkan nilai-nilai yang kosong (null, undefined, NaN, atau '') dari array yang dihasilkan. Contohnya sebagai berikut:

        let arr = [1, 2, 3];
        let arrFlatMap = arr.flatMap((num) => [num * 2, null, undefined, NaN, '']); // nilai dari arrFlatMap adalah [2, null, undefined, NaN, '', 4, null, undefined, NaN, '', 6, null, undefined, NaN, '']

        console.log(arr); // output: [1, 2, 3]
        console.log(arrFlatMap); // output: [2, null, undefined, NaN, '', 4, null, undefined, NaN, '', 6, null, undefined, NaN, '']

    Berikut adalah contoh penggunaan metode flatMap() dan map() dengan flat() secara terpisah pada nested array:

        // menggunakan flatMap()
        const nestedArr = [[1, 2], [3, 4], [5, 6]];
        const flattenedArr1 = nestedArr.flatMap((arr) => arr.map((val) => val * 2));

        console.log(flattenedArr1); // [2, 4, 6, 8, 10, 12]

        // menggunakan map() dan flat() terpisah
        const flattenedArr2 = nestedArr.map((arr) => arr.map((val) => val * 2)).flat();

        console.log(flattenedArr2); // [2, 4, 6, 8, 10, 12]

-   **join()** = untuk menggabungkan semua elemen pada array menjadi sebuah string dengan memasukkan separator di antara setiap elemen. Kita dapat menentukan separator yang ingin digunakan sebagai argumen pada method ini, dan jika argumen tidak diberikan, maka separator yang digunakan adalah koma ','.

    Contoh penggunaan:

        let arr = ["apple", "banana", "cherry"];

        let str = arr.join();

        console.log(str); // output: "apple,banana,cherry"

        let str2 = arr.join(" - ");

        console.log(str2); // output: "apple - banana - cherry"

Method join() mengembalikan sebuah string yang berisi semua elemen pada array yang sudah digabungkan dengan separator. String yang dihasilkan tidak merubah nilai asli dari array.

-   **Looping Arrays: forEach()** = untuk melakukan iterasi atau perulangan pada setiap elemen pada array dan menjalankan fungsi yang telah ditentukan pada setiap elemen tersebut. Fungsi yang diberikan sebagai parameter pada forEach() akan menerima tiga argumen, yaitu elemen saat ini, indeks elemen, dan array itu sendiri. Namun, pada umumnya kita hanya memerlukan elemen saat ini dalam penggunaan forEach().

    Contoh penggunaan:

        let arr = [1, 2, 3, 4, 5];

        arr.forEach(function(element) {
            console.log(element);
        });

        // output:
        // 1
        // 2
        // 3
        // 4
        // 5

    method forEach() tidak mengembalikan nilai apa pun dan hanya digunakan untuk menjalankan fungsi pada setiap elemen pada array. Oleh karena itu, method **forEach()** tidak dapat digunakan untuk mengubah elemen pada array seperti halnya method **map()**. Namun, kita masih dapat memanfaatkan forEach() untuk melakukan operasi yang diperlukan pada setiap elemen pada array, seperti menghitung nilai atau memanggil fungsi lain pada setiap elemen.

**Method untuk mencari index atau elemen**

-   **indexOf()** = untuk mencari indeks pertama dari suatu elemen dalam sebuah array. Method ini akan mengembalikan nilai -1 jika elemen yang dicari tidak ditemukan dalam array.

    Contoh penggunaan:

        let arr = [1, 2, 3, 4, 5, 3];
        let index = arr.indexOf(3); // nilai dari index adalah 2

        console.log(index); // output: 2

    Method indexOf() juga dapat menerima argumen kedua, yaitu fromIndex. Argumen ini digunakan untuk menentukan indeks awal pencarian. Jika fromIndex tidak ditentukan, maka pencarian dimulai dari indeks 0. Jika fromIndex negatif, maka pencarian dimulai dari indeks akhir dengan mengurangi nilai fromIndex dari panjang array.

    Contoh penggunaan dengan fromIndex:

        let arr = [1, 2, 3, 4, 5, 3];
        let index = arr.indexOf(3, 3); // nilai dari index adalah 5

        console.log(index); // output: 5

-   **findIndex()** = untuk mencari indeks dari elemen pertama pada sebuah array yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi tersebut, maka method ini akan mengembalikan nilai -1.

    Contoh penggunaan, mencari indeks dari elemen pertama pada array arr yang nilainya lebih besar dari 3. Karena elemen dengan nilai 4 ditemukan pada indeks ke-3, maka nilai 3 menjadi nilai kembalian dari method findIndex() :

        let arr = [1, 2, 3, 4, 5];
        let index = arr.findIndex((num) => num > 3); // nilai dari index adalah 3

        console.log(index); // output: 3

    Method findIndex() menerima sebuah fungsi sebagai argumen. Fungsi ini akan dieksekusi pada setiap elemen pada array sampai ditemukan elemen yang memenuhi kondisi yang ditentukan. Fungsi ini menerima tiga argumen, yaitu nilai elemen, indeks elemen, dan array itu sendiri.

    Contoh penggunaan dengan fungsi:

        let arr = [1, 2, 3, 4, 5];
        let index = arr.findIndex((num, index, array) => {
            return num > 3 && index > 1 && array.length > 4;
        }); // nilai dari index adalah 3

        console.log(index); // output: 3

-   **find()** = untuk mencari elemen pertama pada sebuah array yang memenuhi kondisi tertentu. Jika tidak ada elemen yang memenuhi kondisi tersebut, maka method ini akan mengembalikan nilai undefined.

    Contoh panggunaan:

        let arr = [1, 2, 3, 4, 5];
        let result = arr.find((num) => num > 3); // nilai dari result adalah 4

        console.log(result); // output: 4

    Method find() menerima sebuah fungsi sebagai argumen. Fungsi ini akan dieksekusi pada setiap elemen pada array sampai ditemukan elemen yang memenuhi kondisi yang ditentukan. Fungsi ini menerima tiga argumen, yaitu nilai elemen, indeks elemen, dan array itu sendiri.

    Contoh penggunaan dengan fungsi:

        let arr = [1, 2, 3, 4, 5];

        let result = arr.find((num, index, array) => {
            return num > 3 && index > 1 && array.length > 4;
        }); // nilai dari result adalah 4

        console.log(result); // output: 4

**Method untuk mengecek ada atau tidaknya elemen pada array**

-   **includes()** = untuk memeriksa apakah sebuah nilai tertentu terdapat pada sebuah array. Jika nilai tersebut ditemukan, maka method ini akan mengembalikan nilai true. Jika tidak ditemukan, maka method ini akan mengembalikan nilai false.

    Contoh penggunaan:

        let arr = [1, 2, 3, 4, 5];
        let check = arr.includes(3); // nilai dari check adalah true
        console.log(check); // output: true

        let check2 = arr.includes(6); // nilai dari check2 adalah false
        console.log(check2); // output: false

    Method includes() juga memiliki parameter opsional kedua, yaitu indeks awal pencarian. Dengan parameter ini, kita dapat membatasi pencarian hanya pada bagian tertentu dari array.

    Contoh penggunaan dengan parameter indeks:

        let arr = [1, 2, 3, 4, 5];
        let check = arr.includes(3, 2); // nilai dari check adalah true
        console.log(check); // output: true

        let check2 = arr.includes(2, 3); // nilai dari check2 adalah false
        console.log(check2); // output: false

-   **some()** = untuk memeriksa apakah setidaknya satu elemen pada array memenuhi kondisi tertentu yang diuji oleh sebuah fungsi. Method ini akan mengembalikan nilai true jika setidaknya satu elemen pada array memenuhi kondisi tersebut, dan mengembalikan nilai false jika tidak ada elemen yang memenuhi kondisi.

    Contoh penggunaan:

        let arr = [1, 2, 3, 4, 5];

        let check = arr.some(function(elem) {
            return elem % 2 === 0;
        });
        console.log(check); // output: true

        let check2 = arr.some(function(elem) {
            return elem > 5;
        });
        console.log(check2); // output: false

    Fungsi yang digunakan sebagai parameter pada method some() akan menerima tiga argumen, yaitu nilai elemen, indeks elemen, dan array itu sendiri. Kita dapat menggunakan argumen kedua atau ketiga untuk melakukan operasi atau pemrosesan tambahan dalam fungsi tersebut.

    Contoh penggunaan dengan fungsi yang menggunakan argumen tambahan:

        let arr = [1, 2, 3, 4, 5];

        let check = arr.some(function(elem, index, array) {
            console.log(`Index of ${elem} is ${index} in [${array}]`);
            return elem > 3;
        });

        console.log(check); // output: true

-   **every()** = untuk memeriksa apakah semua elemen pada array memenuhi kondisi tertentu yang diuji oleh sebuah fungsi. Method ini akan mengembalikan nilai true jika semua elemen pada array memenuhi kondisi tersebut, dan mengembalikan nilai false jika ada setidaknya satu elemen yang tidak memenuhi kondisi.

    Contoh penggunaan:

        let arr = [2, 4, 6, 8, 10];

        let check = arr.every(function(elem) {
            return elem % 2 === 0;
        });

        console.log(check); // output: true

        let check2 = arr.every(function(elem) {
            return elem > 5;
        });

        console.log(check2); // output: false

    Fungsi yang digunakan sebagai parameter pada method every() akan menerima tiga argumen, yaitu nilai elemen, indeks elemen, dan array itu sendiri. Kita dapat menggunakan argumen kedua atau ketiga untuk melakukan operasi atau pemrosesan tambahan dalam fungsi tersebut.

    Contoh penggunaan dengan fungsi yang menggunakan argumen tambahan:

        let arr = [2, 4, 6, 8, 10];

        let check = arr.every(function(elem, index, array) {
            console.log(`Index of ${elem} is ${index} in [${array}]`);
            return elem % 2 === 0;
        });

        console.log(check); // output: true

### ~ The Magic of Chaining Methods :

**Chaining method** pada JavaScript adalah teknik menggabungkan beberapa method pada objek atau array menjadi satu baris kode dengan tujuan untuk memperpendek dan memperjelas kode. Dalam chaining method, nilai yang dihasilkan dari method pertama akan langsung digunakan sebagai input untuk method kedua, dan seterusnya.

**chaining method** juga dapat membuat kode menjadi sulit dibaca dan sulit untuk diperbaiki jika terjadi kesalahan. Oleh karena itu, penggunaan chaining method sebaiknya dibatasi hanya pada kasus yang sederhana dan mudah dibaca.

</details>

<details> <summary>

## [Advanced-DOM-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/13-Advanced-DOM-Bankist/script.js)

</summary>

### ~ Event Propagation: Bubbling and Cupturing :

**Note:**
Setiap fungsi atau code yang ditetapkan untuk menangani suatu **event** yang terjadi pada elemen HTML tertentu, atau disebut juga "handler", dapat mengakses **_property object event_**.

-   **event.target** merujuk ke elemen terdalam yang menjadi sumber terjadinya event.
-   **event.currentTarget (this)** merujuk ke elemen tempat EventLister dilampirkan.

1. **Capturing** adalah konsep di mana event listener dijalankan pada elemen induk (parent) terlebih dahulu sebelum mencapai elemen target (child), yaitu dimulai dari elemen terluar (outer) menuju elemen terdalam (inner).

    **_Poin penting_**: Capturing sering digunakan untuk validasi input data atau untuk menentukan elemen target dengan akurat.

2. **Bubbling** adalah konsep di mana event listener dijalankan pada elemen target (child) terlebih dahulu sebelum mencapai elemen induk (parent), yaitu dimulai dari elemen terdalam (inner) menuju elemen terluar (outer).

    **_Poin penting_**: Bubbling sering digunakan untuk menangani event pada elemen HTML secara dinamis dan efisien melalui konsep delegasi event.

### ~ DOM Traversing :

**DOM Traversing** adalah konsep dalam JavaScript yang digunakan untuk menjelajahi dan memanipulasi elemen HTML dan node di dalam dokumen HTML.

Dalam DOM Traversing, Anda dapat menggunakan metode dan properti pada objek "**_parentNode_**", "**_childNodes_**", "**_nextSibling_**", "**_previousSibling_**", "**_firstChild_**", dan "**_lastChild_**" untuk menjelajahi struktur dokumen HTML. Metode dan properti ini memungkinkan Anda untuk menelusuri dari satu elemen ke elemen lainnya, dan melakukan manipulasi terhadap elemen tersebut.

Sebagai contoh, Anda dapat menggunakan metode "**_parentNode_**" untuk mengakses elemen induk dari suatu elemen HTML. Anda juga dapat menggunakan metode "**_childNodes_**" untuk mengakses semua node (termasuk elemen, teks, komentar, dll.) yang menjadi anak dari suatu elemen HTML.

Selain itu, Anda juga dapat menggunakan metode "**_querySelector_**" dan "**_querySelectorAll_**" untuk mencari elemen HTML berdasarkan selector CSS. Metode "**_querySelector_**" mengembalikan elemen HTML pertama yang cocok dengan selector yang diberikan, sementara metode "**_querySelectorAll_**" mengembalikan semua elemen HTML yang cocok dengan selector tersebut dalam bentuk NodeList.

Dalam DOM Traversing, Anda dapat melakukan manipulasi pada elemen HTML dan node, seperti mengubah nilai atribut, menambah atau menghapus elemen, dan memanipulasi teks. Manipulasi tersebut dapat dilakukan dengan menggunakan metode dan properti pada objek "**_setAttribute_**", "**_getAttribute_**", "**_createElement_**", "**_appendChild_**", "**_removeChild_**", "**_insertBefore_**", "**_replaceChild_**", "**_textContent_**", dan banyak lagi.

### ~ Efficient script loading: Defer and Async

**Efficient Script Loading** merujuk pada teknik-teknik yang digunakan untuk memuat script pada halaman web dengan cara yang lebih efisien dan dapat meningkatkan kecepatan dan kinerja halaman tersebut. Ada tiga teknik utama yang digunakan untuk memuat script: defer, regular, dan async.

**Regular:**

-   Ketika script dimuat tanpa atribut defer atau async, maka script tersebut akan dimuat secara sinkronus, dan akan menghentikan proses rendering halaman web sampai script selesai dimuat dan dieksekusi.
-   Gunakan jika perlu support dengan browser lama. karena defer dan async hanya support browser modern.
-   Best practice penempatan scriptnya diletakkan di akhir elemen Body.

**Async:**

-   Script dimuat pada saat yang sama saat HTML diurai (dengan cara Asynchronous), jadi script sebenarnya diunduh secara Asynchronous tetapi kemudian dieksekusi segera dengan cara Synchronous dan kode HTML harus menunggu untuk diurai sampai script selesai dieksekusi.
-   Script tidak dijamin akan dieksekusi sesuai urutan perintah kode, karena konten yang lebih cepat diambil itulah yang akan pertama dieksekusi.
-   Gunakan untuk skrip pihak ke-3 di mana urutan perintah kode tidak masalah (misalnya Google Analytics, atau penggunaan iklan).
-   Dengan ini masih mempersingkat waktu daripada menggunakan teknik regular.
-   Best practice penempatan scriptnya diletakkan di bagian elemen Head.

**Defer:**

-   Script masih dimuat secara Asynchronous tetapi eksekusi script ditangguhkan hingga akhir penguraian HTML. Jadi dalam praktiknya waktu loading mirip dengan attribute Async, tetapi perbedaannya eksekusi script dijalankan di akhir, dilakukan setelah penguraian HTML selesai dimuat.
-   Script akan dieksekusi sesuai urutan perintah kode.
-   Secara keseluruhan inilah yang terbaik, untuk script yang kita gunakan dan ketika misalnya menyertakan Library.
-   Best practice penempatan scriptnya diletakkan di bagian elemen Head.

</details>

<details> <summary>

## [OOP (Object-Oriented Programming)](https://github.com/wahyukmr/JavaScript-Programming/blob/master/14-OOP/script.js)

</summary>

### ~ APA ITU OOP?

OOP merupakan paradigma (gaya menulis dan mengatur kode) pemrograman yang didasarkan pada konsep object. Program dikembangkan dengan memodelkan dunia nyata sebagai Object yang memiliki property dan method. Object-object ini saling berinteraksi untuk mencapai tujuan yang diinginkan.

Keuntungan OOP adalah membuat kode program lebih terstruktur dan mudah dimengerti. Selain itu, OOP juga memungkinkan menggunakan kembali kode yang sudah ada.

### ~ CLASS dan INSTANCE (Classical OOP)

Paradigma Classical OOP dikenal karena menggunakan class sebagai dasar dari pembuatan objek. Konsep ini digunakan oleh banyak bahasa pemrograman seperti Java, C++, atau C#.

**Class:**

Dalam konsep OOP, **class** adalah sebuah blueprint atau template untuk menciptakan object dan menentukan property dan method yang akan dimiliki oleh object tersebut.

Sistem class dalam paradigma Classical OOP menggunakan konsep pewarisan atau inheritance untuk memperluas atau memodifikasi method dan attribute dari class dasar (superClass) ke class anak (subClass).

**Object:**

Dalam konteks OOP, **instance (object)** merupakan object nyata yang dibuat berdasarkan sebuah class dan mewarisi method atau property dari class tersebut melalui inheritance.

Sebagai analogi, kita dapat membayangkan class sebagai blueprint atau sketsa sebuah rumah, yang berisi gambaran tentang struktur, tata letak, dan ukuran ruangan. Sedangkan instance (Objek) adalah rumah yang sebenarnya, yang dibangun berdasarkan blueprint tersebut. Kita dapat membuat banyak rumah yang serupa dengan blueprint yang sama, namun setiap rumah dianggap sebagai instance yang unik, dengan karakteristik dan data yang berbeda.

Dalam OOP, ketika kita membuat sebuah **Objek** dari sebuah class, maka kita sedang membuat sebuah **instance** dari class tersebut. Instance ini akan memiliki properti dan method yang sudah didefinisikan di dalam class, namun nilai dari properti tersebut dapat berbeda-beda antara satu instance dengan instance lainnya.

### ~ PRINSIP FUNDAMENTAL OOP

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

### ~ PROTOTYPE (OOP di JavaScript)

Paradigma OOP lain seperti **prototype-based** yang digunakan oleh JavaScript, menggunakan **Prototype** sebagai dasar dari pembuatan objek. Memiliki konsep serupa dengan classical OOP.

**Prototype** berfungsi sebagai "pola dasar" atau "blueprint" yang digunakan untuk membuat object-object baru.

**Prototype** merupakan sebuah mekanisme yang digunakan untuk mengimplementasikan pewarisan dalam JavaScript.

Setiap object yang dibuat berdasarkan Prototype, ini biasa disebut **Instance**.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE: Constructor Functions dan properti `prototype`

Ketika kita membuat sebuah fungsi khusus yang disebut constructor function, fungsi tersebut dapat digunakan untuk membuat objek-objek baru. Ketika objek dibuat menggunakan constructor function, setiap objek tersebut akan memiliki akses ke properti dan method yang didefinisikan dalam constructor function tersebut.

Misalnya, jika kita membuat constructor function bernama `Person`, kita dapat menambahkan method dan properti ke properti `prototype` di dalamnya. Properti `prototype` ini adalah seperti kantong ajaib yang akan diwarisi oleh semua objek yang dibuat menggunakan constructor function `Person`.

Setiap objek yang dibuat menggunakan constructor function `Person` akan secara otomatis terhubung dengan objek prototype yang ditentukan oleh properti `prototype` dalam constructor function tersebut. Objek prototype ini berisi method dan properti yang akan diwarisi oleh objek-objek tersebut.

Setiap objek juga memiliki properti khusus yang disebut `[[Prototype]]` (juga dikenal sebagai **proto**, meskipun penggunaannya tidak disarankan). Properti ini secara internal mengacu pada objek prototype yang terkait dengan objek tersebut. Objek prototype ini ditentukan oleh properti `  ` dalam constructor function yang digunakan untuk membuat objek tersebut.

Melalui mekanisme pewarisan prototipe, jika suatu method atau properti tidak ditemukan di objek itu sendiri, JavaScript akan mencarinya di objek prototype melalui properti `[[Prototype]]`. Jika masih tidak ditemukan, JavaScript akan terus mencari di objek prototype berikutnya dalam rantai pewarisan, dan begitu seterusnya, hingga mencapai objek prototype terakhir yang merupakan objek prototype bawaan JavaScript yang disebut `Object.prototype`.

Keuntungan menambahkan method atau properti pada properti prototype daripada langsung pada constructor function adalah:

-   Efisiensi memori: method atau properti yang ditambahkan pada properti prototype dibagikan oleh semua objek yang dihasilkan dari constructor function, menghemat memori.

-   Kemudahan perubahan: Perubahan pada method atau properti pada properti prototype langsung mempengaruhi objek-objek yang menggunakannya, memberikan fleksibilitas dalam mengubah atau menambahkan fungsionalitas.

-   Kode yang terstruktur: Menambahkan method atau properti pada properti prototype memisahkan definisi objek prototipe dari constructor function, membuat kode lebih terstruktur dan mudah dibaca.

    Namun, ada kasus-kasus tertentu di mana menambahkan method atau properti langsung pada constructor function lebih cocok, terutama jika method atau properti tersebut bersifat unik dan tidak perlu diwarisi oleh objek-objek lain.

**Note:**

-   Arrow function tidak bekerja dalam Constructor function.
-   Mendeklarasikan Constructor function selalu memulai dengan huruf besar.
-   Alih-alih membuat method didalam Constructor function, lebih baik membuatnya di properti `prototype` pada Constructor function.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE: Es6 Classes

Dalam JavaScript ES6, kita punya fitur yang disebut "classes" yang memudahkan kita membuat objek dan menerapkan pewarisan. Ketika kita mendefinisikan sebuah class, kita bisa menentukan properti dan method yang akan dimiliki oleh objek yang dibuat dari class tersebut.

Misalnya kita punya class yang disebut `Person`. Di dalam class ini, kita bisa menentukan method atau properti yang akan dimiliki oleh objek-objek yang dibuat dari class `Person`. Misalnya kita punya method `sapa()` yang digunakan untuk menyapa, atau properti `nama` yang berisi nama orang.

Ketika kita ingin membuat objek baru dari class `Person`, kita menggunakan kata kunci `new` seperti ini: `let person = new Person()`. Objek person ini akan memiliki akses ke method dan properti yang telah kita tentukan di dalam class `Person`.

Selain itu, kita juga bisa melakukan pewarisan dengan menggunakan kata kunci `extends`. Misalnya kita punya class `Employee` yang ingin mewarisi properti dan method dari class `Person`. Kita bisa menuliskan class `Employee extends Person` untuk menunjukkan bahwa class `Employee` mewarisi class `Person`. Dengan ini, objek-objek yang dibuat dari class Employee akan memiliki akses ke method dan properti dari class `Person` dan class `Employee` sendiri.

Pewarisan ini membentuk sebuah rantai pewarisan yang serupa dengan mekanisme prototype. Jadi, jika method atau properti tidak ditemukan di objek itu sendiri, JavaScript akan mencarinya di class yang diwarisi dan terus naik ke atas dalam rantai pewarisan sampai menemukan method atau properti yang diinginkan.

Jadi, dengan menggunakan ES6 Classes, kita bisa membuat objek-objek dengan properti dan method yang telah ditentukan di dalam class. Dan kita juga bisa melakukan pewarisan antara class-class untuk membagikan method dan properti kepada class yang lain dalam sebuah rantai pewarisan.

**Note:**

-   Classes di JavaScript bekerja persis seperti constructor function, tetapi penggunaan yang lebih baik dan lebih modern syntax. Jadi masih mengimplementasikan prototype inheritance di balik layar, namun dengan menggunakan sebuah syntax yang masuk akal bagi orang-orang yang berasal dari bahasa pemrogramman lain.
-   ES6 Classes TIDAK berperilaku seperti classes di "Classical OOP" pada pembahasan sebelumnya.
-   Semua method dalam Classes akan ada di object prototype, TIDAK berada di object itu sendiri, sama seperti properti `prototype` pada constructor function.
-   Classes tidak bisa digunakan sebelum ia dideklarasikan.
-   Classes merupakan **first-class sitizens**, yang berarti kita dapat meneruskannya ke fungsi sebagai argument dan me-return dari fungsi lain.

### ~ SETTERS dan GETTERS

Setter dan getter adalah fitur khusus dalam JavaScript yang digunakan untuk mengatur (set) dan mendapatkan (get) nilai properti objek. Mereka biasanya digunakan dalam classes, tetapi juga dapat digunakan di objek biasa.

Setter digunakan untuk mengatur nilai properti. Untuk membuat setter, kita menggunakan kata kunci set, diikuti dengan nama properti yang ingin diatur nilainya. Setter memiliki satu parameter, yaitu nilai yang ingin diatur. Jika memiliki setter untuk properti yang sudah ditentukan di constructor, maka perlu membuat properti baru dengan "underscores" didepannya.

Getter digunakan untuk mendapatkan nilai properti. Untuk membuat getter, kita menggunakan kata kunci get, diikuti dengan nama properti yang ingin diperoleh nilainya. Getter tidak memiliki parameter, dan harus mengembalikan nilai.

Setter dan Getter sangat berguna untuk memvalidasi data. Mereka memberikan kontrol tambahan atas akses dan manipulasi data dalam objek.

### ~ STATIC METHOD

Static methods (method statis) adalah method yang terkait dengan class itu sendiri, bukan dengan instance (objek) yang dibuat dari class tersebut. Mereka tidak bisa diakses melalui instance objek, tetapi langsung melalui class itu sendiri.

Penjelasan lengkap tentang static methods:

1. Definisi: Static methods adalah method yang terkait dengan class itu sendiri, bukan dengan instance (objek) yang dibuat dari class tersebut.

2. Deklarasi: Static methods dideklarasikan di dalam class dengan menggunakan kata kunci static sebelum nama method.

3. Aksesibilitas: Static methods dapat diakses langsung melalui class tanpa harus membuat instance objek dari class tersebut.

4. Penggunaan: Static methods sering digunakan untuk mengimplementasikan fungsi utilitas yang terkait dengan class tersebut atau sebagai method pembantu untuk class. Mereka seringkali tidak bergantung pada data yang spesifik untuk setiap instance objek, tetapi lebih berkaitan dengan karakteristik umum dari class itu sendiri.

### ~ TECHNIQUE USING PROTOTYPE INHERITANCE: Object.create :

Mekanisme pewarisan prototipe menggunakan `Object.create()` melibatkan pembuatan objek baru yang mewarisi properti dan method dari objek prototipe yang ada. Dalam bahasa yang lebih santai, ini seperti membuat salinan objek prototipe yang dapat digunakan sebagai "pewarisan" untuk objek baru yang dibuat.

Berikut adalah penjelasan langkah demi langkah:

-   Pertama, kita memiliki objek prototipe yang akan menjadi "induk" dari objek baru yang akan dibuat. Objek prototipe ini berisi method dan properti yang ingin kita wariskan kepada objek baru.

-   Selanjutnya, kita menggunakan `Object.create()` dan mengirimkan objek prototipe sebagai argumen. Ini akan membuat objek baru yang terkait dengan objek prototipe tersebut. Objek baru ini akan memiliki hubungan pewarisan dengan objek prototipe.

-   Ketika kita mencoba mengakses properti atau method pada objek baru, JavaScript akan mencari properti atau method tersebut di objek itu sendiri terlebih dahulu. Jika tidak ditemukan, pencarian akan didelegasikan ke objek prototipe melalui mekanisme pewarisan.

-   Proses pencarian akan berlanjut ke objek prototipe yang lebih dalam jika properti atau method tidak ditemukan di objek prototipe yang terkait. Pencarian akan terus berlanjut hingga mencapai objek prototipe terakhir dalam rantai pewarisan, yaitu objek bawaan JavaScript yang disebut Object.prototype.

Dengan menggunakan `Object.create()`, kita dapat membuat objek baru yang memiliki pewarisan prototipe yang fleksibel. Objek baru akan mewarisi method dan properti dari objek prototipe, dan kita juga dapat menambahkan method atau properti khusus pada objek baru jika diperlukan.

### ~ CARA KERJA PEWARISAN DI JAVASCRIPT

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

    Dengan menggunakan `Object.create()`, kita dapat membangun inheritance menggunakan prototype chain dengan lebih fleksibel, di mana objek turunan dapat mewarisi metode-metode dari objek dasar dan menambahkan method atau properti tambahan sesuai kebutuhan. Berikut adalah contoh implementasi inheritance menggunakan `Object.create()` :

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
            Animal.init.call(this, nama); // Memanggil metode init dari superclass
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

### CARA KERJA ENCAPSULATION DI JAVASCRIPT :

Encapsulation dapat didefinisikan sebagai "pengemasan data dan fungsi ke dalam satu komponen". Ini juga dikenal sebagai grouping atau bundling, dan hanya berarti menyatukan data dan method yang beroperasi pada data. Ini bisa berupa fungsi, class, atau objek.

Encapsulation memungkinkan "mengontrol akses ke komponen itu". Ketika kita memiliki data dan method terkait dalam satu unit, kita dapat mengontrol bagaimana data diakses di luar unit. Proses ini disebut **Encapsulation**.

1. **Protected Properties**

    Protected properties dalam Encapsulation di JavaScript adalah properti yang ada di antara properti publik dan pribadi. Biasanya, kita menggunakan awalan **underscore (\_)** pada nama properti atau method untuk menandakan bahwa properti tersebut bersifat protected. **Meskipun bisa diakses dari luar class, penggunaan underscore memberikan petunjuk bahwa seharusnya method atau properti tersebut tidak diakses atau dimanipulasi secara langsung dari luar class**. Namun, JavaScript tidak memiliki perlindungan akses langsung seperti bahasa lain. Untuk mengontrol aksesibilitas, kita bisa menggunakan **getter** dan **setter**. Ini memungkinkan kita menerapkan validasi atau logika tambahan saat mengakses atau mengubah nilai properti protected.

2. **Private Class fields dan Methods**

    Proposal untuk private class fields and methods dalam JavaScript saat ini berada di tahap tiga dan belum menjadi bagian dari bahasa JavaScript. Proposal ini memungkinkan kita untuk memiliki field (properti yang akan ada disemua instance) dan metode yang tidak dapat diakses dari luar kelas, mirip dengan properti dan metode private dalam bahasa OOP tradisional seperti Java dan C++.

    Dalam proposal untuk meningkatkan dan mengubah kelas JavaScript yang disebut "class field", ada empat field(properti) dan metode yang akan kita bahas: publick fields, private fields, publick method, dan private method.

    **Publick fields** adalah properti yang akan ada pada semua instance class (jadi, tidak berada di Prototypes) dan dapat diakses melalui kata kunci "this".

    **Private fields** dideklarasikan menggunakan simbol **"#"** untuk membuat properti benar-benar tidak dapat diakses dari luar class. Private field akan ada disetiap instance.

    **Public method** adalah fungsi yang akan ada di semua instance dari class. Semua method ini akan berada di dalam prototype instance.

    **Private method** sangat berguna untuk menyembunyikan detail implementasi dari luar, karena dengan private method yang hanya dapat diakses dari dalam class. Private method diasosiasikan dengan prototipe, tetapi tidak secara langsung milik prototipe. memiliki private method di class meningkatkan penggunaan memori heap dibandingkan dengan memiliki metode di prototipe.

    Ada tambahan,

    **Static public field** adalah properti yang dimiliki oleh kelas itu sendiri dan dapat diakses tanpa membuat instance.

    **Static method** adalah metode yang didefinisikan pada kelas dan dapat dipanggil langsung pada kelas tanpa membuat instance.

    Kedua static diatas berguna untuk menyimpan data bersama dan mendefinisikan fungsi utilitas pada level kelas.

</details>

<details> <summary>

## [Asynchronous](https://github.com/wahyukmr/JavaScript-Programming/blob/master/15-Asynchronous/script.js)

</summary>
  
  ### old version of ajax calling with XML Http Request function :
  - Step by step call ajax with XML Http Request function (old way)
    - Step 1: call new XMLHttpRequest and store its value into variable
    - step 2: enter the request type and prepare the URL which will be used to make the Ajax call
    - step 3: send request to URL
    
  ### callback Hell (create an Ajax call sequence) :
  - Callback Hell is when we have lots of calls to execute asynchronous tasks sequentially, this happens in all asyncronous tasks handled with callbacks and not just calls
  - problems with callback hell will make our code messy, difficult to understand, difficult to maintain and give rise to a lot of bugs
  - to solve this problem use Promises
  
  ### Promises and Fetch API :
  - Fetch API = call modern version of ajax
  - Recap:
    - Fetch function return the promises
    - and then handle those Promises using the then method
    - to read from the response, it is necessary to call the JSON method on the response object
    - The JSON method will return Promises, because in the form of Promises it needs to be called again using the then method
    
  ### Event loops in practice :
  - Code that is outside of any callback, will be executed first (test start and test end)
  - Promise and setTimeout will finish together
</details>

<details> <summary>

## [Modern-JS-Modules-Tooling](https://github.com/wahyukmr/JavaScript-Programming/blob/master/16-Modern-JS-Modules-Tooling/script.js)

</summary>
  
  ### Introduction to NPM :
  - how to manage dependencies in a better and more modern way "with NPM"
  - when starting with NPM , it must first initialize it with "npm init"
  - after that, will generate a JSON file which is basically what will store the entire project configuration
  - if we want to move our project to someone else's computer or share it with other developers or even check it to version control like git, we must not include the module_node folder, it must be deleted first before sharing it with others. If we want to use it again on our computer, just type npm i
  
  ### Bundling with Parcel and NPM Script :
  - Install Parcel = npx i parcel --save-dev
  - Parcel is just a build tool which is also in NPM
  - So because Parcel is just a tool, it will be stored in the devDependency which is like a tool we need to build applications, but it's not a dependency included in the code
  - In order to be able to use parcel in the console like "live-server", we can have two options (using NPX or NPM script)
  - Using NPX = npx parcel berkas_html (write on the command line)
  - Using NPM script = in the script object add a property with the name start(optional) and the value is parcel_html file in the package.json file, to call it go to command line then write npm run start

-   besides being able to be used like a "live-server", parcel is also used to combine several modules together (bundling)
-   to combine modules go to package.json file then in script object add property with the name build(optional) and value is parcel build index.html, to call it go to command line then write npm run build
-   then parcel will create a "dist" folder containing the bundling results, and this folder will be sent for production

### Configuring Babel and Polyfilling :

-   configuring Babel for a super modern code transpiler reverts back to ES5 code
-   in parcel automatically uses babel to modify the code to make our code support old browsers
-   for features like Promises, all array methods, and async functions we can polyfill them, by installing packages "core-js" and "regenerator-runtime"
</details>
