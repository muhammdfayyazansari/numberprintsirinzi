function generate(){
    let num = document.querySelector('#num');
    let count = document.querySelector('#count');
    let show = document.querySelector('#show');
    let display="";
    for(let i=0; i<count.value; i++){
        let multiply = parseInt(num.value) * (i+1);
        console.log(multiply)
        display += `${num.value}&nbsp;&nbsp; x &nbsp;&nbsp;${i+1}&nbsp;&nbsp; = &nbsp;&nbsp;${multiply}&nbsp;&nbsp; <br>`
    }
    if(display){

        show.innerHTML = display
    }
    console.log('fayyaz')
}