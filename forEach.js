let sayilar = [1,2,3,4,5,6];

sayilar.forEach(function(sayi){
    console.log(sayi);
})

console.log("***********");
for(let i = 0 ; i < sayilar.length; i++){
    console.log(sayilar[i]);
}

console.log("*****************");

for(let item of sayilar){
    console.log(item);
}