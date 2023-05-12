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

-   Nilai falsy adalah nalai yang tidak sepenuhnya salah, tetapi akan menjadi false ketika kita mencoba mengubahnya menjadi boolean.

-   Nilai falsy di javascript: false, 0, string kosong ("", ``), undefined, null, NaN

### ~ Statements and expressions

-   **Expressions** adalah bagian kode yang menghasilkan nilai.
-   **Statements** seperti kalimat yang menerjemahkan tindakan kita, tindakan yang kita ingin program lakukan. Jadi pada dasarnya setiap kali sesuatu yang diakhiri dengan titik koma itu adalah statement.

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

1. for Loop: digunakan untuk mengulangi sebuah blok kode berdasarkan jumlah iterasi yang sudah diketahui sebelumnya. Dalam loop ini, kita harus secara manual mengatur variabel penghitung untuk mengakses setiap elemen dalam objek.

2. while Loop: Looping ini digunakan untuk mengulangi sebuah blok kode selama kondisi yang diberikan masih bernilai benar (true).

3. do-while Loop: Looping ini mirip dengan while loop, namun kode akan dieksekusi setidaknya satu kali bahkan jika kondisi awal tidak terpenuhi.

4. for-in Loop: merupakan perulangan for yang digunakan untuk mengulangi setiap properti yang terdefinisi dalam sebuah objek atau index di array, baik itu properti sendiri objek maupun properti yang diwarisi dari prototype-nya.

5. for-of Loop: Looping ini digunakan untuk melakukan perulangan terhadap isi value dari iterable object (object yang dapat diulang), seperti Array, String, Set, Map, dll.

6. forEach Loop: Looping ini khusus digunakan untuk array dan berfungsi untuk menjalankan sebuah fungsi untuk setiap elemen dalam array.

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

**_Key-value_** = Metode yang dapat digunakan untuk menyimpan dan mengakses data pada storage.

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

1. **lexical scoping**

    Lexical scope adalah cara JavaScript menentukan scope sebuah variabel berdasarkan penempatannya dalam kode. Ketika sebuah variabel didefinisikan dalam sebuah function, variabel tersebut hanya bisa diakses di dalam function tersebut atau di dalam nested function lain yang terdapat di dalam function tersebut. Lexical scoping akan mencari variabel tersebut di dalam nested scope dari function tersebut.

2. **Scope Chain:**

    Scope chain adalah cara JavaScript **mencari variabel** saat variabel yang dipanggil tidak ditemukan di lingkup saat ini. Scope chain mencari variabel secara berurutan, dimulai dari lingkup scope saat ini dan bergerak naik ke lingkup scope parent yang lebih tinggi, sampai variabel tersebut ditemukan.

    Scope chain adalah one-way street: artinya Scope induk tidak akan pernah memiliki akses ke variabel dari inner Scope (merujuk pada lingkup variabel yang dibuat di dalam sebuah fungsi atau blok kode tertentu).

    Scope chain di dalam suatu Scope atau ruang lingkup tertentu sama dengan menambahkan semua variable environment dari semua Scope induk.

    Scope chain tidak memiliki hubungan dengan urutan di mana fungsi dipanggil. Hal ini sama sekali tidak memengaruhi Scope chain!

3. **Variabel Lookup**

    Variabel lookup adalah proses mencari nilai dari sebuah variabel, baik itu di dalam lingkup scope saat ini atau di dalam parent scope dalam scope chain. Variabel lookup akan mencari nilai variabel yang digunakan, terlepas dari di mana variabel itu didefinisikan.

Jadi, lexical scoping dan scope chain saling berkaitan dalam menentukan scope sebuah variabel dan bagaimana scope tersebut diatur secara hierarkis. Sedangkan variabel lookup adalah proses pencarian nilai dari variabel yang digunakan, baik itu di dalam lingkup scope saat ini atau di dalam parent scope dalam scope chain.

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

**Spread operator** memungkinkan kita menyebarkan atau mengeluarkan elemen yang ada di dalam array atau properti objek ke tempat dimana nilai tersebut diharapkan. Selain array dan objek, operator ini juga bisa digunakan untuk "mengeluarkan" karaketer tunggal di dalam string, tapi ini jarang dilakukan.

Seperti halnya Object.assign, Spread operator juga membuat **Shallow copy** artinya hanya menyalin nilai yang berada pada **top value**, nilai yang lebih dalam berupa **Reference types** dimana jika nilai yang disalin dimodifikasi akan berpengaruh juga pada nilai aslinya.

Spread operators bekerja pada semua yang disebut **iterable** (Array, String, Set, Map, dan yang bukan Objek).

Dapat membuat Array atau properti objek baru dan atau untuk meneruskan nilai dalam suatu fungsi secara bersamaan. Merupakan dua kasus penggunaan Spread operator.

### ~ Rest Parameters ( ... ) :

**Rest parameters** adalah fitur dimana kita bisa mengirim data sebanyak-banyakya pada satu parameter function, dan secara otomatis akan dikonversi menjadi array.

**Rest parameters** hanya boleh ada satu di function.

**Rest parameters** hanya boleh berada di posisi paling akhir, tidak boleh di depan atau ditengah, kecuali memang cuma ada 1 parameter.

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

-   Merupakan operator yang mirip dengan ternary operator, berbeda pada kondisinya, jika berilai null atau undefined maka value default nya dieksekusi.
-   Nilai Nullish adalah: Null dan Undefined (**_tidak termasuk:_** 0 or ""). Jadi, jika nilainya berupa Null atau undefined, maka operan kedua yang akan dieksekusi dan direturn.

### ~ Logical Assignment Operators :

Prinsip dari cara kerjanya sama seperti OR, AND dan NULLISH operators. Tetapi dengan menggunakan Logical Assignment Operators menjadi lebih sederhana.

### ~ Looping Arrays: The for-of Loop

-   Digunakan untuk melakukan perulangan terhadap isi value dari iterable objek( seperti: arrays, strings, maps, sets ).
-   For-of tidak bisa digunakan untuk melakukan perulangan data di object secara langsung, karena object bukanlah iterable.
-   Dengan menggunakan for-of loop kita masih bisa menggnakan continue and break keywords.

### ~ Optional Chaining ( ? ) :

-   Optional Chaining = memeriksa ada atau tidaknya nilai(ada yang berarti tidak Null dan undefined), jika ada akan mengembalikan nilainya, jika tidak akan mengembalikan undefined.

### ~ Looping Object: Object Keys, Values, and Entries :

-   **Object.keys** akan mengembalikan key properti pada objek dan mengubahnya menjadi array.
-   **Object.values** akan mengembalikan value properti pada objek dan mengubahnya menjadi array.
-   **Object.entries** akan mengembalikan nomor index dan key serta value pada object dalam bentuk array.
-   Dengan ketiga method Object diatas, kita dapat melakukan looping pada object menggnakan for-of loop.

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

Menghentikan eksekusi dengan return

-   Saat menggunakan kata kunci return, maka kode setelahnya tidak akan dieksekusi.
-   kita bisa menggunakan return untuk menghentikan eksekusi sebuah function.

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

-   Fungsi ini berguna dibeberapa situasi. Apalagi jika menggunakan paradigma pemrograman yang sangat penting yaitu **pemrograman fungsional**.

### ~ The call and apply methods :

-   Seperti yang dibahas sebelumnya dalam pemanggilan regular function kata kunci this merujuk ke undefined (dalam strict mode);
-   Pada **call method** argumen pertama akan mengatur kata kunci this merujuk ke fungsi apapun yang ingin kita panggil, dan argumen setelah yang pertama hanyalah argumen dari fungsi aslinya.
-   **apply method** merupakan method yang melakukan hal yang mirip seperti call method, satu-satunya perbedaan adalah apply method tidak menerima daftar argumen setelah kata kunci this, tetapi akan mengambil array argumen yang kemudian meneruskannya ke fungsi aslinya.
-   **apply method** tidak digunakan lagi dalam modern javascript. Karena sekarang memiliki cara yang lebih baik untuk melakukan hal yang sama persis dengan call method. Yakni denganmenggunakan spread operator untuk menyebarkan array.

### ~ The Bind method :

-   Sama seperti call method, bind method juga mengatur secara manual kata kunci this untuk memanggil fungsi apapun.
-   Perbedaannya bind method tidak secara langsung memanggil fungsi, tetapi me-return fungsi baru dimana kata kunci ini terikat.
-   bind method is very useful when using event listener

### ~ Immediately Invoked Function Expressions (IIFE) :

**IIFE** merupakan sebuah teknik dalam JavaScript untuk menjalankan sebuah fungsi secara otomatis pada saat ia didefinisikan.

**IIFE** dibuat dengan menempatkan fungsi dalam tanda kurung () dan menambahkan tanda kurung () lagi di bagian belakang untuk langsung memanggilnya.

**IIFE** sering digunakan untuk menjaga agar variabel yang didefinisikan di dalam fungsi tidak bocor ke lingkup global.

Sebagai contoh, jika kita ingin menjalankan sebuah fungsi secara otomatis pada saat halaman web kita dimuat, kita dapat menulisnya dalam IIsp sehingga fungsi tersebut hanya berjalan sekali saja dan tidak perlu dipanggil lagi di masa mendatang

**IIFE** juga dapat digunakan untuk membuat lingkup scope terisolasi, sehingga variabel yang didefinisikan di dalamnya tidak akan berkonflik dengan variabel di luar lingkup.

**IIFE** dapat dipanggil beberapa kali, tetapi setiap kali dipanggil, fungsi akan dibuat dan dijalankan dari awal.

### ~ Closures :

Closures adalah fitur JavaScript yang terjadi secara otomatis dalam situasi tertentu, kita hanya perlu mengenali situasi tersebut.

Contohnya, sebuah fungsi dalam sebuah fungsi akan memiliki akses ke variabel dalam fungsi induk, dan dapat mempertahankan akses tersebut bahkan setelah fungsi induk selesai dieksekusi.

Analogi sederhananya seperti orang yang tidak kehilangan akan memori atau kenangan dan tetap terkoneksi ke kampung halamannya, dimana orang sebagai fungsi dan kenangan sebagai variabel dalam induk fungsi tersebut, sedangkan kampung halaman adalah scope induk fungsi itu sendiri. Jadi fungsi tidak kehilangan koneksi dengan variabel yang disimpan dalam scope induk fungsi.

Closure juga memiliki prioritas di atas scope chain.

</details>

<details> <summary>

## [Arrays-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/11-Arrays-Bankist/script.js)

</summary>

### ~ Methods Arrays summary :

**Method yang menimpa atau mengubah nilai aslinya:**

1.  Menambahkan array asli
    -   Method **push** = menambahkan elemen array dari akhir.
    -   Method **unshift** = menambahkan elemen array dari awal.
2.  Menghapus dari array asli

    -   Method **pop** = menghapus elemen array dari akhir.
    -   Method **shift** = menghapus elemen array dari awal.
    -   Method **splice** = menambah dan/atau menghapus elemen array.
        Syntax:

                array.splice(index, jumlah item yang dihapus, add 1,...add x).

3.  Lainnya
    -   reverse = membalik urutan array.
    -   sort = mengurutkan array berdasarkan kondisi pada callback function.
    -   fill = mengisi elemen tertentu dalam array dengan nilai yang ditentukan.

**Method yang membuat nilai array baru**

1. Memodifikasi elemen array
    - map = menyalin array asli, dan membuat kondisi dalam callback function.
2. Method untuk menyaring elemen array
    - filter = menyaring elemen array berdasarkan kondisi pada callback function.
3. Method untuk menyalin elemen sesuai dengan index yang di tentukan
    - slice = index awal dan index akhir.
4. Method untuk menambah array asli dengan array yang lainnya
    - concat = menggabungkan elemen array.
5. Method untuk meratakan elemen array bersarang agar memiliki kedalaman sesuai dengan yang di tentukan
    - flat
    - flatMap
6. Method untuk mendapatkan index array
    - indexOf = berdasarkan nilai.
    - findIndex = mencari elemen dalam array berdasarkan kondisi pada callback function.
7. Method untuk mendapatkan elemen array
    - find = berdasarkan kondisi pada callback function.
8. Method untuk mengetahui elemen yang termasuk kedalam array (mengembalikan boolean, sangat membantu dalam pernyataan if/else)
    - includes = berdasarkan nilai.
    - some = mengembalikan true jika salah satu elemen memenuhi kondisi (penggunaan di tandai dengan adanya kata "any").
    - every = mengembalikan true jika semua elemen memenuhi kondisi.
9. Method untuk mengubah array menjadi string
    - join = berdasarkan string pemisah.
10. Method untuk mengubah nilai
    - reduce = berdasarkan accumulator mempersingkat array menjadi nilai tunggal jenis apa pun: angka, string, boolean, atau bahkan array atau objek baru.
11. Method untuk mengulang array tanpa menghasilkan nilai baru
    - forEach = tidak membuat array baru hanya mengulangnya berdasarkan callback function.

### Looping Arrays: forEach

-   The forEach method is looping over the array and in each iteration it will execute a callback function
-   When to use for of loop and when to use forEach:
    -   when you want to use the Continue and Break statements then use the for of loop
    -   other than that it depends on personal preference

### Data Transformation: Map

-   map: to iterate over an array( similar to forEach ) returns a new array containing the results of applying an operation on all original array element
-   difference between the map method and forEach:
    -   forEach if you want to change the value of the data itself, for example entering data into the database
    -   map to make changes in the form of an array

### Data Transformation: Filter

-   filter: returns a new array containing the array elements that passed a specified test condition or filtering elements in the original array that meet certain conditions(use callback function)

### Data Transformation: Reduce

-   Reduce = Summarizing all the elements in an array into one single value
-   Sintak reduce:

        // arrow function
        reduce((nilaiSebelumnya, nilaiSaatIni, indexSaatIni, array) => { ... }, nilaiAwal)

        // callback function
        reduce(callbackFn, nilaiAwal)

-   Should always return accumulator to do the next iteration

### The Magic of Chaining Methods :

-   don't use the Chaining method for apps at scale
-   don't use methods that change the original array( such as splice method )
-   for small-scale applications, the above rules can be used

### The Find Method :

-   The Find Method: retrieves a single array element based on a condition
-   usually the purpose of the find method is to find exactly one element, therefore create a condition where only one element can satisfy that condition
-   the find method is similar to the filter method, the difference is:
    -   filter returns all elements that match the condition, while the find method returns only the first
    -   most importantly, the filter returns a new array while the find method returns the element itself and is not an array

### Method some and avery :

-   Method Some = Similar to the include method, the difference is that some methods can perform a condition to test whether at least one element of the array passed when tested with a callback function it will return true.
-   This method not change the original array
-   every method: similar to Some Method, the difference is that this method will return true if the condition for all array elements is true

### Method flat and flatMap :

-   method flat: flattens nested array elements to have the appropriate depth to the specified
-   method flatMap: combine Map method and Flat method into one part
-   method flapMap can only enter one depth

### Sorting arrays :

-   Method sort: sort arrays in alphabetical order or from A-Z
-   it can be interpreted that the Sort method does sorting by string
-   This method will change the original array

### More Ways of Creating And Filling Arrays :

-   The fill method specifed element in an array with a value - The method overwrites the origina array - Syntax:
    array.fill(value, start, end)
    </details>

<details> <summary>

## [Advanced-DOM-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/13-Advanced-DOM-Bankist/script.js)

</summary>

### Event Propagation: Bubbling and Cupturing :

-   Bubbling phase the event goes up from the inside(target) to the top through the parent like a bubble in water
-   Cupturing phase the event goes down to the element(target)
-   Cupturing is rarely used, if you want to use it, set the third parameter in the event listener to true
-   Target is the place where the event came from
-   currentTarget is the element to which the event handler is attached
-   cuurrentTarget is exactly the same as "this" in the event handler

### DOM Traversing :

-   DOM Traversing means we can select elements based on other elements
-   The closest() method searches up the DOM tree for elements which matches a specified CSS selector

</details>

<details> <summary>

## [OOP](https://github.com/wahyukmr/JavaScript-Programming/blob/master/14-OOP/script.js)

</summary>
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Constructor functions :
  - in OOP we will create a "class" as a template, so we can create as many objects as possible with the same characters(properties and methods)
  - to make the "class" can use the function (old way). This function is called the constructor function
  - the difference between a regular function and a constructor function is that when calling a constructor function it starts with the "new" operator
  - what happens when calling a function with a "new" operator:
    - new empety object {} is created
    - then the function is called the keyword "this" = refers to the new object
    - the new object linked to the prototype property of the constructor function(in this case Person.prototype) through .__proto__
    - function constructor automatically return the new object
  - arrow function is not work in the constructor function 
  - Writing constructor functions always starts with a capital letter, same like array and Map
  - can't create method inside constructor function, to deal with this problem we can use prototype and prototype inheritance
  
  ### Prototype :
  - any function is also an object
  - every object in javascript automatically has a property called prototype. And that includes the constructor function
  - Every object created by a particular constructor function, will get access to all the mothods and properties defined in the  prototype.constructor property.
  - Prototype inheritence/delegation = if the property or method cannot be found in a particular object, javascript will look at its prototype
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Es6 Classes :
  - classes in javascript do the same thing as constructor functions, but use a nicer and more modern syntax. So still implementing prototype inheritance behind the scenes, but with a syntax that makes sense to people coming from other programming languages
  - add constructor methods (Just like the constructor function, we can pass arguments to the properties we want to use and have on the object)
  - when creating a new instance, the constructor will be called and will return a new object and store it in the specified variable.
  - All methods in the class will be on the prototype object, not on the object itself( same like prototype inheritance)
  - vital Records:
    - class cannot be used before it is declared
    - classes are first-class citizens, which means we can pass it into a function and return it from the function
    - classes are executed in strict mode
    - can leave constructor function and switch to classeshod inside constructor function, to deal with this problem we can use prototype and prototype inheritance
    
  ### Static Methods :
  - Static Methods is method that can be used without having to declare a class (meaning without using a variable first)
  - methods that can be accessed directly from the class without creating an object first
  
  ### TECHNIQUE USING PROTOTYPE INHERITANCE: Object.create :
  - Object.ceate is the least used way of implementing prototype inheritance
  - in Object.create, there is still prototype inheritance but no prototype property involved and also no constructor function and new operator
  - we can set prototype to any object
  - this object will be the prototype of all objects
  - in this case we manually set prototype from object steven to object PersonProto
  
  ### fake encapsulation using just convention :
  - Encapsulation is keeping some properties and methods private inside the class so that they cannot be accessed from outside the class. then the method or other property will be exposed as a public interface (API)
  
  ### encapsulation: Private class fields and methods :
  - We can think of a field as a property that will exist in all instances that we make through class. so Public Field = Public instance
  - public field/ public instance will be present in all instances created through the class, so not in prototype. Because, all methods in the class will always be added to the prototype
  - private field make the property inaccessible from the outside
  - private method hiding implementation details from outside
  - private methods are not fully supported by browsers, therefore we still use the underscore convention
  
  ### ES6 Classes Summary :
  - Student = Child Class
  - extends = inheritance between classes, automatically sets prototype
  - Person = parent class
  - public field = similar to property, available on created object
  - private field = not accessible outside of class. very suitable for implementing data privacy and encapsulation
  - static public field = field or property available only on class. like static method using static keyword to make any field static too
  - Constructor Methods = called by new operator every time we want to create a new instance/object of class. Mandatory in regular class, might be omitted in a child class
  - super = call to parent class(necessary with extends). required every time you want to write a child class, when using the extend keyword. Needs to happen before accessing this
  - instance property = available on created object. The difference between this field and the public field is that the instance property sets data based on the input of the constructor, usually this property is more personalized and unique to each object, whereas the public property is usually something that is common to all objects.
  - private methods = might not yet work in your browser. "fake" alternative: _ instead of #
  - getter methods = so that we can get the value of an object just by writing a property instead of writing a method
  - setter methods = use _ to set a property with same name as method, and also add getter
  - static methods = available only on class. Can not access instance properties nor methods, only static ones
  - some important things about class:
    - Classes just "syntactic sugar" over constructor functions
    - Classes are not hoisted
    - Classes are first-class citizens
    - Class body is always executed in strict mode

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
