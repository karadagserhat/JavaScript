
let myDizi = [2,5,6];

const diziyiKopyalaveİkiyleCarp = function (dizi) {

    let geiciciDizi = [];
    for(let i =0; i< dizi.length;i++){
        geiciciDizi[i] = dizi[i] * 2
    }

    console.log(geiciciDizi);
}

const İkiyleCarp = function(sayi){
    return sayi * 2;
}

const İkiyleBöl = function(sayi){
    return sayi / 2;
}

const diziİslemleri = function (dizi, islem) {

    let geiciciDizi =  []
    for(i = 0; i< dizi.length; i++){
        geiciciDizi[i] = islem(dizi[i])
    }
    console.log(geiciciDizi);
}

console.log(myDizi);
diziyiKopyalaveİkiyleCarp(myDizi);
diziİslemleri(myDizi, İkiyleBöl);

function adimiSoyle(ad, soyad){
    console.log("Merhaba " + ad + " "+ soyad);
}

function adimiBagir(ad, soyad, callback){
    mesaj = "MERHABA " + ad.toUpperCase() + " " + soyad.toUpperCase() 
    callback(mesaj);
}

function mesajGoster(msg){
    console.log(msg);
}

adimiSoyle('serhat','karadağ')
adimiBagir('serhat', 'karadag', function(msj){
    console.log(msj);
})













