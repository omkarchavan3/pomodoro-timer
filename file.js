

const worktitle = document.querySelector("#work")
const breaktitle = document.querySelector("#break")

let worktime = 25;
let breaktime = 5 ;

let seconds = "00" ;
 

window.onload = ()=>{
    document.getElementById("minutes").innerHTML = worktime
    document.getElementById("seconds").innerHTML = seconds

    worktitle.classList.add('active');
}


function start(){
    document.getElementById('start').style.display= "none" ; 
    document.getElementById('reset').style.display= "block" ; 
    seconds = 59;

    let workmin = worktime-1
    let breakmin = breaktime-1

    breakcount = 0 ;


    let timerfunction = ()=>{
    document.getElementById("minutes").innerHTML = workmin
    document.getElementById("seconds").innerHTML = seconds

    seconds = seconds-1

    if(seconds===0){
        workmin = workmin-1
        if(workmin=== -1){
            if(breakcount%2===0){
                workmin = breakmin
                breakcount++
                worktitle.classList.remove('active')
                breaktitle.classList.add('active')
            }else{
                workmin = worktime
                breakcount++
                worktitle.classList.add('active')
                breaktitle.classList.remove('active')
            }
        }
        seconds = 59;
    }
    }

    setInterval(timerfunction,1000)
}