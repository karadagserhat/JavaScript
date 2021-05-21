const sayilar = [1,2,3,4,5,6];

const yeniSayilar = sayilar.map(function(sayi){
    return sayi * 2 
})

console.log(sayilar);
console.log(yeniSayilar);

const kitaplar = [
    {ad:'1', sayfaSayisi:'30'},
    {ad:'2', sayfaSayisi:'40'},
    {ad:'3', sayfaSayisi:'50'},
    
]

const kitapSonuc = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi
})

console.log(kitapSonuc);



const isimler = [
    {isim:'serhat', soyisim:'karadag'},
    {isim:'serkan', soyisim:'karadagggg'}
    
]

const yeniİsim = isimler.map(kisi => kisi.isim + " " + kisi.soyisim)
console.log(yeniİsim);










