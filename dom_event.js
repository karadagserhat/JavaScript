document.querySelector('.container').addEventListener('mousemove',arkaPlan);

function tıklanma(e){
    console.log(e.type);
}

function arkaPlan(e){
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientX + e.clientY})`
}


