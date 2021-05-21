const sayilar = [1,2,3,4,5];

const sonuc = sayilar.reduce(function(pre,curr,index){
    return pre = pre + curr;
},0)

//console.log(sonuc);


const yeniDizi = sayilar.map(function(sayi){
    return sayi * 2;
})

const yeniDiziReduce = sayilar.reduce(function(onceki, oanki){
    onceki.push(oanki * 2)
    return onceki
},[])

//console.log(yeniDiziReduce);
//console.log(yeniDizi);


function toplamBul(){
    toplam = 0;
    for(let i = 0; i < sayilar.length; i++){
        toplam = toplam + sayilar[i]
    }
    return toplam
    //console.log(toplam);
}

//console.log(toplamBul());


const sonuc2 = sayilar.filter(function(sayi){
    return sayi % 2 == 1
})

const sonuc2Reduce = sayilar.reduce(function(onceki, oanki){
    if(oanki % 2 == 1){
        onceki.push(oanki)
    }
    return onceki
},[])

//console.log(sonuc2Reduce);

const sonuc3 = sayilar.find(function(sayi){
    return sayi == 5
})

console.log(sonuc3);
























