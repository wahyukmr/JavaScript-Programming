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
-   Lima nilai falsy di javascript: 0, "", undefined, null, NaN

### ~ Statements and expressions

-   **Expressions** adalah bagian kode yang menghasilkan nilai.
-   **Statements** seperti kalimat yang menerjemahkan tindakan kita, tindakan yang kita ingin program lakukan. Jadi pada dasarnya setiap kali sesuatu yang diakhiri dengan titik koma itu adalah statement.
</details>

<details> <summary>

## [Fundamentals-Part-2](https://github.com/wahyukmr/JavaScript-Programming/blob/master/02-Fundamentals-Part-2/script.js)

</summary>
  
  ### ~ Activating Strict Mode :
  - Selalu gunakan ***'use strict'*** untuk membantu men-debug code.
  
  ### ~ Reviewing Functions :
  Tiga perbedaan cara menulis fungsi, tetapi semua bekerja dengan cara yang sama. menerima input data, mengubah data, dan kemudian mengeluarkan data. 
  1. **Fuction declaration**, fungsi yang dapat digunakan sebelum di nyatakan sebelumnya.
  2. **Function expression**, pada dasarnya fungsu yang nilainya disimpan pada sebuah variabel.
  3. **Arrow function**, bagus untuk fungsi dengan hanya satu baris statement dan tidak memiliki kata kunci *this*.
  
### ~ Breaking and Continuing
-   **continue** berarti keluar dari iterasi loop saat ini dan melanjutkan ke loop selanjutnya.
-   **break** digunakan untuk sepenuhnya mengakhiri seluruh loop.

### ~ Looping

Secara umum looping / perulangan dibagi menjadi dua, yaitu counted loop dan uncounted loop.

1. **counted loop**
    - Merupakan perulangan yang jelas dan sudah diketahui banyaknya perulangannya.
    - Contoh: for loop, forEach loop, repeat loop.
2. **uncounted loop**
    - Merupakan perulangan yang tidak jelas berapa kali perulangannya.
    - Contoh: while loop dan do/while loop.

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

-   **DOM** adalah Struktur yang merepresentasikan html documents. Memungkinkan javascript untuk mengakses elemen html dan memanipulasi style (mengubah teks, atribut html dan bahkan gaya CSS) nya.

-   **DOM bukanlah javascript**, methods DOM dan properti untuk memanipulasi DOM bukan bagian dari JavaScript, tetapi dapat berinteraksi dengan javascript.

### ~ Web Storage

-   Web storage adalah salah satu Web API (perantara agar kode JavaScript bisa "berkomunikasi" dengan browser) yang dapat menyimpan data secara lokal pada sisi client (disimpan secara lokal pada perangkat kita).
-   Web Storage dapat menampung data maksimal 10MB per domain.
-   Fungsi dari Web Storage:

    1. Menyimpan data dalam bentuk string yang dihasilkan oleh halaman web agar bisa diakses secara offline.
    2. Cocok juga untuk menyimpan data konfigurasi preference untuk pengguna web.

-   Macam-macam Web Storage:
    1. **Local Storage**:
       ~ Digunakan untuk menyimpan data tanpa ada batasan waktu. Data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup kecuali jika kita menghapusnya.
       ~ Untuk menggunakan local storage, kita harus mengaksesnya melalui objek yang bernama "localStorage".
    2. **Session Storage**:
       ~ Digunakan untuk menyimpan data sementara pada browser. Data akan hilang ketika browser atau tab browser ditutup.
       ~ Untuk menerapkan Session Storage, kita dapat menggunakan global objek sessionStorage.
-   Data yang tersimpan dalam sessionStorage atau localStorage adalah nilai dengan tipe data primitif seperti number, boolean, atau string. Bisa juga berbentuk JavaScript objek dengan mengubahnya ke dalam string (JSON)
-   **_Key-value_** = Metode yang dapat digunakan untuk menyimpan dan mengakses data pada storage.
-   Fungsi-fungsi yang ada pada Web Storage:
    1. **_setItem_** = Digunakan untuk menyimpan data pada Web Storage. Fungsi ini membutuhkan dua parameter yakni key (sebagai kunci untuk mendapatkan nilai) dan value (sebagai nilai yang akan disimpan).
    2. **_getItem_** = Digunakan untuk mengakses data pada Web Storage. Fungsi ini membutuhkan satu parameter yakni key (sebagai kunci untuk mendapatkan nilai), dan data yang disimpan pada Web Storage akan dikembalikan dalam bentuk string.
    3. **_removeItem(key)_** = menghapus key beserta value-nya.
    4. **_clear()_** = menghapus semuanya.
    5. **_key(index)_** = mendapatkan key pada posisi tertentu.
    6. **_length_** = jumlah item yang disimpan.
-   Menyimpan dan Mendapatkan Data Kompleks pada Web Storage:
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

-   JS Engine hanyalah sebuah program komputer yang mengeksekusi kode javascript, jadi bertanggung jawab untuk mengurai kode dan mengonversinya menjadi perintah yang dapat dijalankan.
-   Setiap Engine JavaScript selalu berisi **_call stack_** dan **_heap_**.
-   **Call stack** adalah tempat kode kita sebenarnya dieksekusi menggunakan sesuatu yang disebut **_execution context_**.
-   Execution context adalah environment di mana potongan javascript diekseksi, seperti kotak yang menyimpan semua informasi yang diperlukan untuk beberapa kode yang akan dieksekusi. execution context mengandung variable environment, scope chain dan this keyword.
-   Variabel environment mencakup variable declaration(let, const dan var), function dan argument object.
-   **Heap** adalah tempat kumpulan memori yang terstruktur yang menyimpan semua objek(reference types) yang dibutuhkan.

### ~ JS Runtime

-   **JavaScript runtime** seperti kotak yang menyediakan beberapa objek ke JavaScript yang kita butuhkan sehingga dapat berinteraksi dengan dunia luar.
-   Inti dari setiap JS runtime selalu merupakan JS Engine. Misalnya, Browser Chrome dan node.js menggunakan Engine yang sama - V8, tetapi Runtime mereka berbeda: di Chrome memiliki window, objek DOM, dll., sedangkan node memberi kita require, Buffers dan processes.
-   JavaScript runtime biasanya juga menyertakan **_callback queue_**, ini adalah struktur data yang berisi semua fungsi callback yang siap dieksekusi. Misalnya callback fungsi dari DOM event listener(click, timer, dll).
-   ketika call stack kosong, fungsi callback diteruskan ke stack agar dapat dieksekusi. Dan ini terjadi berkat **Event loop**. Jadi event loop mengambil fungsi callback dari callback queue dan menempatkannya ke call stack sehingga dapat dieksekusi.

### ~ Scope in JavaScript :

Scope:

-   ruang atau environment dimana sebuah variabel tertentu dideklarasikan.
-   Ada Global Scope, Function Scope(local Scope), dan Block Scope.

Scope Concepts:

-   scoping mengajukan pertanyaan "dimana variabel tinggal?" atau "dimana kita bisa mengakses variabel tertentu dan dimana yang tidak".
-   Hanya let dan const variabel yang merupakan block scope. Variabel yang dideklarasikan dengan var berakhir di local function terdekat.
-   Di JavaScript, kita mempunyai **_lexical scoping_**, Jadi aturan dimana kita bisa mengakses variabel berdasarkan pada dimana tepatnya kode functions dan kode blocks ditulis.

Scope Chain:

-   Semua Scope selalu memiliki akses ke semua variabel dari Scope terluarnya. Inilah yang disebut **scope chain!**.
-   Ketika sebuah variabel tidak berada di Scope saat ini, Mesin akan mencari dalam Scope chain sampai menemukan variabel yang dicarinya. Inilah yang disebut **variable lookup**.
-   Scope chain adalah one-way street: artinya Scope induk tidak akan pernah memiliki akses ke variabel dari inner Scope (merujuk pada lingkup variabel yang dibuat di dalam sebuah fungsi atau blok kode tertentu).
-   Scope chain di dalam suatu Scope atau ruang lingkup tertentu sama dengan menambahkan semua variable environment dari semua Scope induk.
-   Scope chain tidak memiliki hubungan dengan urutan di mana fungsi dipanggil. Hal ini sama sekali tidak memengaruhi Scope chain!

Tiga jenis Scope di Javascript:

1. Global Scope
    - Berada di luar dari function atau block apapun.
    - Variabel yang dideklarasikan di global scope dapat diakses **dimana saja**.
2. Function Scope
    - Scope atau ruang lingkup dari **function**.
    - Variabel hanya dapat diakses **didalam function, Bukan** diluar.
    - Juga biasa dipanggil **_local scope_**.
3. Block Scope (ES6)
    - Scope atau ruang lingkup dari **if block, for loop block, etc**

### ~ Hoisting in javascript :

-   **Hoisting** adalah membuat beberapa jenis variabel dapat diakses/digunakan kembali pada kode sebelum mereka dideklarasikan

-   Kesimpulan dari bagian ini:
    -   Jangan menggunakan **var** untuk mendeklarasikan variabel.
    -   Gunakan "const" pada bagian dari waktu mendeklarasikan variabel.
    -   Mengakses variabel sebelum mendeklarasikannya adalah praktik yang buruk dan harus dihindari.
    -   Selalu mendeklarasikan fungsi terlebih dahulu sebelum menggunakannya.

### ~ How the "this" Keyword works :

-   **this keyword/variable** adalah variabel spesial yang dibuat untuk setiap execution context(dalam kasus ini untuk setiap fungsi). Mengambil nilai yang merujuk ke "pemilik" dari fungsi dimana kata kunci **_this_** ini digunakan.

-   Pengertian diatas bukan static. Tergantung pada bagaimana fungsi dipanggil, dan nilainya hanya diberikan ketika fungsi sebenarnya dipanggil.

-   Penerapan kata kunci **_this_**:
    -   **Method** 👉 kata kunci **_this_** merujuk ke **objek** yang memanggil method.
    -   **Simple Function call** 👉 kata kunci **_this_** mengembalikan **undefined** (jika menggunakan strict mode).
    -   **Arrow Function** 👉 kata kunci **_this_** merujuk ke this dari fungsi induk terdekatnya.
    -   **Event Listener** 👉 kata kunci **_this_** merujuk ke elemen DOM tempat tempat penanganan dilampirkan.

### ~ Primitives vs. Objects (Primitive vs. Reference Types) :

Kesimpulan dari bagian ini:

-   **Primitive data type**: String, Number, Boolean, Null, bigint, simbool, undefined.
-   **Object**: selain dari primitive seperti Object Literal, Arrays, Functions, banyak lagi...
-   Berbicara tentang memori dan manajemen memori, biasanya disebut **_primitives types_** dan **_reference types_**
-
-   **_Primitives types_** yang dibuat akan disimpan pada Stack engine JS, tepatnya didalam execution context dimana mereka dideklarasikan. Setiap variabel ditempatkan pada Stack yang berbeda. Memperbarui salah satunya tidak akan memengaruhi yang lain.
-   Semua Objek atau dengan kata lain **_Reference types_** akan disimpan pada Heap engine JS. setiap kali membuat perubahan pada salinannya maka data aslinya juga ikut berubah. Karena ketika kita mencoba untuk meng-copy objek, hal ini tidak akan membuat objek baru pada Heap, itu hanya variabel lain pada Stack yang valuenya merefrensikan ke objek aslinya, jadi kedua variabel ini merujuk ke alamat memori yang sama di Heap, oleh karenanya jika ada perubahan keduannya akan terpengaruh.
-   Mendeklarasikan variabel const tidak dapat diubah nilainya hanya berlaku untuk nilai Primitive, tetapi tidak untuk nilai Reference. karena ini hanya mengubah nilai objek yang disimpan di Heap.

### ~ Regular Functions vs. Arrow Functions :

-   Jangan menggunakan Arrow Function pada object method.
-   Ketika memiliki fungsi didalam method, solusi terbaik menggunakan arrow function.
-   Penggunaan kata kunci **_this_** bergantung pada object yang memanggilnya.
-   Kata kunci **arguments** tidak lagi penting di javascsript karena ada cara yang lebih modern untuk melakukannya.
</details>

<details> <summary>

## [Data-Structures](https://github.com/wahyukmr/JavaScript-Programming/blob/master/09-Data-Structures-Operators/script.js)

</summary>

### ~ Destructuring :

-   Destructuring adalah untuk membongkar nilai Array atau Objek menjadi variabel terpisah. Dengan kata lain destructuring memecah struktur data kompleks menjadi struktur data kecil seperti variabel.

### ~ Spread Operators ( ... ) :

-   **Spread operator** memungkinkan kita menyebarkan atau mengeluarkan elemen yang ada di dalam array atau properti objek ke tempat dimana nilai tersebut diharapkan. Selain array dan objek, operator ini juga bisa digunakan untuk "mengeluarkan" karaketer tunggal di dalam string, tapi ini jarang dilakukan.
-   Seperti halnya Object.assign, Spread operator juga membuat **_Shallow copy_** artinya hanya menyalin nilai yang berada pada **top value**, nilai yang lebih dalam berupa **Reference types** dimana jika nilai yang disalin dimodifikasi akan berpengaruh juga pada nilai aslinya.
-   Spread operators bekerja pada semua yang disebut **_iterable_** (Array, String, Set, Map, dan yang bukan Objek).
-   Dapat membuat Array atau properti objek baru dan atau untuk meneruskan nilai dalam suatu fungsi secara bersamaan. Merupakan dua kasus penggunaan Spread operator.

### ~ Rest Pattern and Parameters :

-   **Spread operator** untuk memecah atau mengeluarkan array sementara **Rest** untuk mengambil beberapa nilai dan kemudian mengemas semuanya ke dalam array.

### ~ Short Circuiting ( && and || ) :

-   Short Circuiting dalam kasus **or operator** || akan mengembalikan nilai pertama yang bernilai truty dari semua operan, atau hanya nilai terakhir jika semuanya falsy, jika nilai kedua adalah nilai yang truty maka akan mengembalikan nilai kedua itu dan operan lain tidak akan dievaluasi.
-   Dalam praktiknya kita dapat menggunakan **or operator** untk menetapkan nilai default.
-   Short Circuiting dalam kasus **and operator** && berarti sebaliknya dari **or**, yakni akan mengembalikan nilai pertama yang bernilai falsy atau mengevaluasi dan mengembalikan nilai truty yang terakhir jika semuanya truty. jika nilai kedua adalah nilai yang falsy maka akan mengembalikan nilai kedua itu dan operan selanjutnya tidak akan dievaluasi.
-   Sering kali kita dapat menggunakan **operator and** untuk benar-benar menghindari if statement, yakni memeriksa apakah properti atau nilai tertentu benar-benar ada. Karena dengan **and operator** akan mengeksekusi kode pada operan ke dua jika operan pertama truty.

### ~ The Nullish Coalescing Operator ( ?? ) :

-   Ini bekerja mirip dengan **or operator**, dan menangani eror pada pendekatan tersebut.
-   Nilai Nullish adalah: Null dan Undefined (**_tidak termasuk:_** 0 or ""). Jadi jika nilai yang ditentukan berupa Null atau undefined, maka operan kedua yang akan dieksekusi dan direturn.
-   Dengan ini dapat diasumsikan bahwa 0 dan string kosong tidak dianggap sebagai nilai falsy.

### ~ Logical Assignment Operators :

-   Prinsip dari cara kerjanya sama seperti OR, AND dan NULLISH operators. Tetapi dengan menggunakan Logical Assignment Operators menjadi lebih sederhana.

### ~ Looping Arrays: The for-of Loop

-   Digunakan untuk melakukan perulangan terhadap isi value dari iterable objek( seperti: arrays, strings, maps, sets ).
-   For-of tidak bisa digunakan untuk melakukan perulangan data di object secara langsung, karena object bukanlah iterable.
-   Dengan menggunakan for-of loop kita masih bisa menggnakan continue and break keywords.

### ~ Optional Chaining ( ?. ) :

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
  
- Jika kita meneruskan nilai Primitive types sebagai argumen dari sebuah fungsi, maka argumen itu merupakan salinan dari nilai aslinya, akan menjadi nilai atau variabel yang berbeda. Karnanya apabila nilai salinan diubah tidak akan mengubah nilai originalnya.
- lain halnya jika kita meneruskan Reference types ke fungsi, apa yang disalin sebenarnya hanyalah referensi ke objek di memori Heap atau bisa dikatakan keduanya menunjuk pada objek yang sama di memori Heap. Jadi saat mencoba memanipulasi salinan, sama saja memaniplasi nilai originalnya.
- Dalam Programming ada dua istilah yang digunakan saat berhadapan dengan fungsi, yakni **passing by value** dan **passing by reference**. Javascript tidak memiliki passing by reference, hanya passing by value. Meskipun terlihat seperti passing by reference, namun reference itu sendiri masih merupakan nilai yang berisi memori address. Jadi pada dasarnya kita meneruskan reference ke fungsi tetapi tidak melakukan **passing by reference** seperti pada pemrograman C++.
  
### ~ First-class function and Higher-order functions :
  
- Javascript adalah bahasa yang memiiliki ***First-class function*** yang berarti fungsi hanya diperlakukan sebagai nilai. Karena itu kita dapat melakukan beberapa hal:
    1. Menyimpan fungsi dalam variabel atau peoperti.
    2. Meneruskan fungsi sebagai argumen ke fungsi lain, seperti saat menambahkan event listener atau event handler ke DOM Object.
    3. Dapat me-Return fungsi dari fungsi lain.
    4. Karna fungsi merupakan objek, dia juga memiliki method (**method function**). Contohnya **bind** method.
- Fakta bahwa JavaScript memiliki First-class function, memungkinkan kita untuk menggunakan dan menulis ***Higher-order functions***. Higher-order functions adalah fungsi yang menerima fungsi lain (Callback function) sebagai argumen atau fungsi yang mengembalikan fungsi baru.
- First-class function dan Higher-order functions adalah dua hal yang berbeda. First-class function hanyalah fitur yang dimiliki atau tidak dimiliki oleh bahasa pemrograman.

### ~ Functions Accepting Callback Functions :

-   Callbacks sangat sering digunakan dalam JavaScript.
-   Beberapa keuntungan utama Callback function:
    1.  Membuat mudah untuk memecah kode menjadi bagaian yang lebih dapat digunakan kembali dan saling berhubungan.
    2.  Membuat abstractions, berarti bahwa kita menyembunyikan detail dari beberapa implementasi kode, karena kita tidak terlalu peduli dengan semua detail itu.

### ~ Functions Returning Functions :

-   Fungsi ini berguna dibeberapa situasi. Apalagi jika menggunakan paradigma pemrograman yang sangat penting yaitu **_pemrograman fungsional_**.

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

-   Sebuah fungsi yang hanya bisa digunakan sekali.
-   IIFE bisa digunakan ketika kita ingin membuat private function (limiting functions and variables to global)
-   Sebagai hasilnya, fungsi dan variabel yang dideklarasikan pada IIFE tidak bisa diakses secara Global.
-   Jadi penggunaan dari IIFE bisa menyelesaikan masalah jika terdapat nama variabel atau fungsi yang sama.

### ~ Closures :

-   Closures bukanlah fitur yang digunakan secara eksplisit atau secara manual. jadi closure hanya terjadi secara otomatis dalam situasi tertentu, kita hanya perlu mengenali situasi tersebut.
-   Closure pada dasarnya adalah lingkungan variabel tertutup yang melekat pada suatu fungsi, persis seperti pada waktu dan tempat fungsi itu dibuat. Jadi closure memastikan bahwa suatu fungsi tidak kehilangan koneksi ke semua variabel yang ada dilingkungan variabel tempat ia dibuat atau didefinisikan, bahkan setelah fungsi kelahirannya hilang (telah di return / dieksekusi).
-   Analogi sederhananya seperti orang yang tidak kehilangan koneksi ke kampung halamannya, dimana orang adalah fungsi dan kampung halaman adalah scope induk fungsi. Jadi fungsi tidak kehilangan koneksi dengan variabel yang disimpan dalam scope induk fungsi.
-   Closure juga memiliki prioritas di atas scope chain.
</details>

<details> <summary>

## [Arrays-Bankist](https://github.com/wahyukmr/JavaScript-Programming/blob/master/11-Arrays-Bankist/script.js)

</summary>
  
  ### Looping Arrays: forEach
  - The forEach method is looping over the array and in each iteration it will execute a callback function
  - When to use for of loop and when to use forEach:
    - when you want to use the Continue and Break statements then use the for of loop
    - other than that it depends on personal preference
  
  ### Data Transformation: Map
  - map: to iterate over an array( similar to forEach ) returns a new array containing the results of applying an operation on all original array element
  - difference between the map method and forEach:
    - forEach if you want to change the value of the data itself, for example entering data into the database
    - map to make changes in the form of an array
  
  ### Data Transformation: Filter
  - filter: returns a new array containing the array elements that passed a specified test condition or filtering elements in the original array that meet certain conditions(use callback function)
  
  ### Data Transformation: Reduce
  - Reduce = Summarizing all the elements in an array into one single value
  - Sintak reduce:
  
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
