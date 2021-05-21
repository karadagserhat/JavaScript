const bitkiler = [
    {ad: 'üzüm', tür: 'meyve'},
    {ad: 'domates', tür: 'sebze'}
    
]

const meyveler = bitkiler.filter(function(bitki){
    return bitki.tür =='meyve';    
})

console.log(meyveler);


function meyveleriBul(){
    let gecici = []
    for(let i = 0 ; i < bitkiler.length; i++){
        if(bitkiler[i].tür == 'meyve'){
            gecici.push(bitkiler[i])
        }
    }

    return gecici;
}

