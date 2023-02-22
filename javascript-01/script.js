console.log("hello world");

// **split**
// bir diziyi farklı konumlarda bölebilir ve bir diziye dönüştürebiliriz.

let js ='JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript);


let txt = 'i love watch film and eat food.'
const words= txt.split(' ')

console.log(words);

let fruitString ='apple, orange, banana'
const fruit = fruitString.split(',')

console.log(fruit);

// ***indexOf: Bir dizide bir öğe olup olmadığını kontrol etmek için. 
//Varsa, dizini döndürür, aksi takdirde -1 döndürür.

// ***join: Dizinin elemanlarını birleştirmek için kullanılır, join metodunda 
// ilettiğimiz argüman dizide birleştirilip string olarak geri döner. 
// Varsayılan olarak virgülle birleşir, ancak öğeler arasında 
//birleştirilebilen farklı dize parametrelerini geçirebiliriz

// ***Slice:Aralıktaki birden çok öğeyi kesmek için. 
// İki parametre alır: başlangıç ​​ve bitiş konumu. Bitiş konumunu içermez

// ***Splice: Üç parametre alır: Başlangıç ​​konumu, kaldırılacak sefer sayısı ve eklenecek öğe sayısı.

// ***Push:sonuna öğe ekleme. Mevcut bir dizinin sonuna öğe eklemek için push yöntemini kullanırız.

// ***pop:Sonunda öğe kaldırılıyor.

// ***shift:Dizinin başındaki bir dizi öğesinin çıkarılması.

// ***unshift:Dizinin başına dizi öğesi ekleme.

// ***reverse:bir dizinin sırasını ters çevirin.

// ***sort: dizi öğelerini artan düzende düzenleyin. Sıralama bir geri arama işlevi alır, 
// sıralamayı geri arama işlevi ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.


