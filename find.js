const kisiler = [
    {id:1, ad:'serhat'},
    {id:2, ad:'serkan'},
    
]

const sonuc = kisiler.find(function(kisi){
    return kisi.id == 2;
})

console.log(sonuc);