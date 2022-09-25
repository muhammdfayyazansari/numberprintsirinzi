function generate(){
    var num = document.querySelector('#num');
    var count = document.querySelector('#count');
    var show = document.querySelector('#show');
    var display="";
    for(var i=0; i<count.value; i++){
        var multiply = parseInt(num.value) * (i+1);
        console.log(multiply)
        display += `${num.value}&nbsp;&nbsp; x &nbsp;&nbsp;${i+1}&nbsp;&nbsp; = &nbsp;&nbsp;${multiply}&nbsp;&nbsp; <br>`
    }
    if(display){

        show.innerHTML = display
    }
    console.log('fayyaz')
}