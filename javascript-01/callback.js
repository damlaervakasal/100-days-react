
// verilen parametredeki süre tanımlandıktan sonra bir kere çalışacak
// setTimeout(() => {
//     console.log("Merhaba");
// },2000);

//verilen parametredeki süre tanımlandıktan sonra durduruncaya kadar çalışır
// setInterval(() => {
//   console.log("her saniye çalışacağım durdurulmazsa sonsuza kadar çalışırım")
// },1000);

// const sayHello = (cb) => {
//     cb();
// };

// sayHello(() => {
//     console.log("hello");
// });

//js de herhangi bir veri kaynağına gidip veri çekmek için fetch kullanılır
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => console.log(data)
);