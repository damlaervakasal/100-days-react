# Props Nedir?

Oluşturacağımız componentlerde bir parametre eklemek isteyebiliriz. O parametrlerle o componenetlerin ination (başlatma) görüntüsünü oluşturmak isteriz böyle durumlar için kullanılır.

Tüm child elemanlarının key i olmalı her döngü listesinde mutlaka en dıştaki elemana key vermemiz gerekir.

Componentleri gönderdiğimiz propertlerin tiplerini belirlediğimiz terim prop-types
gönderdiğimiz properti import ettikten sonra 
<b> 
 componentinismi.propTypes = {name: PropTypes.string,} 
 </b>
 hangi veri tipini kabul ettiğimiz göstermemiz lazım

isRequired eklediğimizde parametreyi mutlaka yazmamız gerek yazmadığımız sürece hata verecektir.

bir properti de birden fazla veri tipinin gönderilmesine imkan tanımak için oneOfType kullanılır.
Kullanım şekli  adres: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
olarak gösterilebilinir. Böylelikle hem number almasını hem de string değer almasını sağladık.

 - Obje olarak gönderdiğimiz proptelerde kulanabileceğimiz shape adında bir tanım daha vardır. 
```
 famname: PropTypes.shape({
    name: PropTypes.string,
    who:  PropTypes.string,
    age:  PropTypes.number,
 })
```
gibi

- Herhangi bir tanım yapılmamış bir propa varsayılan bir değer verebiliriz.
```
User.defaultProps = {
    isLoggedIn: false
}
```
böylelikle daha sonrasında return yapabiliriz .

Eğer başlangıçta tanım yapmışsak daha sonrasında yapmış olduğumuz tanım kullanılmıyor başlangıçta atadığımız varsayılan kabul ediliyor.
