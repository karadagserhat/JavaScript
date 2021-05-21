const sehirler = [
    {ad:'Bursa', plaka:16, komsu:['Istanbul','Balkes']},
    {ad:'Izmir', plaka:35, komsu:['Manisa','Aydın']},
    {ad:'Ankara', plaka:6, komsu:['Konya','Eskisehir']},
       
]


sehirler.sort(function(a,b){
    if(a.ad < b.ad){
        return -1;
    } else if (a.ad > b.ad){
        return 1;
    } else {
        return 0
    }
})

//console.log(sehirler);

function fibonacci(sayi){
    let sonucDizi = [0,1]

    for(let i = 2; i < sayi ; i++){
        const oanki = sonucDizi[i-1] + sonucDizi[i-2]
        if(oanki < sayi){
            sonucDizi[i] = oanki;
        }
        
    }
    return sonucDizi;
}

const ogrenciDizisi = [
    {ad:'serhat', soyad:'karadag', id:1},
    {ad:'zsekan', soyad:'kara', id:2},
    {ad:'nezahet', soyad:'kdsadasd', id:3},
    {ad:'yavuz', soyad:'rahat', id:4}
    
]

const sonuc1 = ogrenciDizisi.filter(ogrenci => ogrenci.id %2 ==0)
    .map(ogrenci => ogrenci.ad + " " + ogrenci.soyad)
    .sort()
    .reverse();

    console.log(sonuc1);








const idNoCift = ogrenciDizisi.filter(function(ogrenci){
    return ogrenci.id % 2 == 0
})

const Birleşikİsim = idNoCift.map(function(ogrenci){
    return ogrenci.ad + " " + ogrenci.soyad
})

Birleşikİsim.sort();


//console.log(idNoCift);
//console.log(Birleşikİsim);































