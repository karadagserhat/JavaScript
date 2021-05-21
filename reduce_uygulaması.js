function parantezlerDengeliMi(metin){
    const dizi = metin.split('')

    const sonuc = dizi.reduce(function(pre, karakter){

        if( pre < 0){
            return pre;
        }

        if(karakter === '('){
            return ++pre;
        }
        if(karakter === ')'){
            return --pre;
        }

        return pre;
        
    }, 0);

    if(!sonuc){
        console.log(metin + " dengeli");
    }
    else{
    console.log(metin + " dengesiz");

    }

}

parantezlerDengeliMi('(())')
