const sayilar = [1,2,3,4,5,6,7,8,9];

function sonucuBul(sayilar){
    const tekEleman = sayilar.filter(function(sayi){
        return sayi % 2 == 1
    })
    console.log(tekEleman);
    
    const Karesi = tekEleman.map(function(sayi){
        return sayi * sayi; 
    }) 
    console.log(Karesi);

    const DiziReduce = Karesi.reduce(function(preGenelToplam,curSayi){

        if(curSayi > 10){
             preGenelToplam = preGenelToplam + curSayi
             
        } else {
            return preGenelToplam
        }
        return preGenelToplam
    },0);
    console.log(DiziReduce);

}


sonucuBul(sayilar);


function sayilariTopla(...param){
    let top=0
    for(item of param){
        top += item;
    }
    console.log(top);
}

sayilariTopla(2,3,22);