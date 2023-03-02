# React Fetch - Axios

### Fetch
Herhangi bir veri kaynağına gidip o veri kaynağından ilgili veriyi aldıktan sonra  nasıl gösterilir ona bakılır.  Mount edildiği anda  biz o veriye erişmek istiyoruz ve
veri kaynağına erişebilmemiz için native bir kaynak veriliyor. Fetch kullanarak ek herhangi bir kütüphane kullanmadan gerekli veri kaynağına erişebiliyoruz. Yani fetch kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür diyebiliriz.

```javascript
  fetch(APIURL) 
      .then((res) => res.json()) 
      .then((users) => setData(users)) 
      .catch((err) => console.log(err));
```

### Axios
Axios'ı kullanrak fetch ile yaptığımız her şeyi yapabiliriz. Fetch ile Axiosu arasındaki birkaç önemli farklar vardır.
-Fetch'i kullandığımız zaman bize bodyi json olarak değil de string ifade olarak veriyor. Axiosta ise bize direk obje olarak döndürüyor.
-Axios kullandığımız zaman herhangi bir isteği iptal edebiliyoruz ya da time out belirleyebilirz  fakat fetch de ise böyle bir şey yoktur.
-Axios'ın fetche göre daha geniş bir browsera sahiptir.

Axios'ı kullanabilmek için bunu modül olarak kurmamız gerek.
Terminalde ilk olarak 
1. **yarn add axios** ya da **npm install axios --save**  diyerek paketi indirmiş oluyoruz.

Kurulumu tamamladıktan sonra kullanacağımız projeye import etmemiz gerek
React'ta 
2. **import axios from "axios"** diyerek dahil etmiş oluyoruz.

```javascript
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
  // .then((res) => res.json()) axios kullandığımız için bu işleme ihtiyacımız kalmadı.
  //  fetch kullansaydık bunu da kullanmamız gerekecekti. fetch i kullandığımız zaman bize body   // json olarak değil de string ifade olarak veriyor. 
  // Axiosta ise direk bize obje olarak dönüyor.
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
```



