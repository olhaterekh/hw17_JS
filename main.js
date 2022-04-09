let date = x => document.querySelector(x)

    let data = new Date()
    let d = data.getDate()
    let m = data.getMonth()
    let y = data.getFullYear()

    if(d < 10) d = '0' + d
    if(m < 10) m = '0' + m
 
    date('.day').innerHTML = d
    date('.month').innerHTML = m
    date('.year').innerHTML = y

function clock(){
    let data = new Date()
    let h = data.getHours()
    let mi = data.getMinutes()
    let s = data.getSeconds()
    
    if(h < 10) h = '0' + h
    if(mi < 10) mi = '0' + mi
    if(s < 10) s = '0' + s
    
    date('.hour').innerHTML = h
    date('.minutes').innerHTML = mi
    date('.seconds').innerHTML = s
    }
    
    setInterval(clock, 1000)

//--------------------------------------------------------

let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let time = x => document.querySelector(x)
let sec = '00';
let min = '00';
let hr = '00';


function stopwatch(){
    sec = +sec + 1
    if(sec < 10) sec = '0' + sec
    if(sec === 60) {
        min = +min + 1
        if(min < 10) min = '0' + min
        sec = '00'
    
    if(min === 60){
        hr = +hr + 1
        if(hr < 10) hr = '0' + hr
        sec = '00'
        min = '00'
        if(hr === 24){
            hr = '00'
            sec = '00'
            min = '00'
        }
        
    }}
    time('.secondsSec').innerHTML = sec
    time('.minutesSec').innerHTML = min
    time('.hourSec').innerHTML = hr
    
}


start.addEventListener('click', function(){
   let stopInterval = setInterval(stopwatch, 1000)
stop.addEventListener('click',function(){
    clearInterval(stopInterval)
})
})


time('.loop').addEventListener('click',function(){
    time('.table').innerHTML += `<br>${hr} : ${min} : ${sec}`
})

time('.reset').addEventListener('click', function(){
    time('.table').innerHTML = ''
    sec = '00'
    time('.secondsSec').innerHTML = sec
})

//---------------------------------------------------------

let timerMin = document.querySelector('.timerMin')
let twF = '25'
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let stopT = document.querySelector('.stopT')
let resetT = document.querySelector('.resetT')

plus.addEventListener('click', function(){
    twF = +twF +1
    if(twF < 10) twF = '0' + twF
    timerMin.innerHTML = twF
})

minus.addEventListener('click', function(){
    if(twF > 1) {
        twF = +twF -1
        if(twF < 10) twF = '0' + twF
        timerMin.innerHTML = twF
    }
})

//------------------------------------------------------------

let timerM = document.querySelector('.timerM')
let startT = document.querySelector('.startT')
let timerS = document.querySelector('.timerS')
let fn = '60'


function timer(){
    timerM.innerHTML = twF-1
    fn = +fn -1
    if(fn >= 0 && fn < 10  ) fn = '0' + fn
    timerS.innerHTML = fn
    if(fn === '00'){ fn = '60'}
    if(timerM.innerHTML >= 0 && timerM.innerHTML < 10  ) timerM.innerHTML = '0' + timerM.innerHTML
    // if(timerM.innerHTML === '00' && timerS.innerHTML === '00'){
    //     timerM = '00'
    //     timerS = '00'
    // }
    if(fn === '60' ){
        twF = +twF - 1
        timerM.innerHTML = twF
    }
}

startT.addEventListener('click', function(){
    // timerM.innerHTML = twF
let stopTimer = setInterval(timer, 1000)
stopT.addEventListener('click', function(){
    clearInterval(stopTimer)
})
})

resetT.addEventListener('click', function(){
    
timerM.innerHTML = '00'
timerS.innerHTML = '00'
    
})
   






