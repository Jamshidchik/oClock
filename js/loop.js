const sek = document.querySelector('.s');
min = document.querySelector('.m'),
hour = document.querySelector('.h'),
hourNum = document.querySelector('.hours'),
minNum = document.querySelector('.minutes')



function clock ( ) {
  let time  = new Date(),
  second = time.getSeconds() * 6,
  minut = time.getMinutes() * 6,
  hours = time.getHours() * 30

  sek.style.transform = `rotate(${second}deg)`  
    min.style.transform = `rotate(${minut}deg)`
    hour.style.transform = `rotate(${hours}deg)`

     setTimeout (() => {
    clock()
   },1000);


   hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
   minNum.innerHTML = time.getMinutes() < 10 ? "0" +time.getMinutes() : time.getMinutes()
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            content[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        content[i].classList.add("active")
    })
}


const btn = document.querySelector('.stopwatch__btn');
  span = document.querySelector('.tabsLink__span');
  watchSek = document.querySelector('.stopwatch__seconds');
  watchMin = document.querySelector('.stopwatch__minutes');
  watchHour = document.querySelector('.stopwatch__hours');
btn.addEventListener("click",()=>{
    if(btn.innerHTML == "start") {
        btn.innerHTML = "stop"
        span.classList.add("active")
    }else if(btn.innerHTML == "stop") {
        span.classList.add("active_clear")
        btn.innerHTML = "clear"
        span.classList.add("active_clear")
    }else if(btn.innerHTML == "clear"){
        btn.innerHTML = "start"
        watchSek.innerHTML = 0
        watchMin.innerHTML = 0
        watchHour.innerHTML = 0
        span.classList.remove("active_clear")
        span.classList.remove("active")
    }
})

function watch() {
    if( btn.innerHTML == "stop"){
     watchSek.innerHTML++
     if(watchSek.innerHTML > 59){
        watchSek.innerHTML = 0
        watchMin.innerHTML++
        if (watchMin.innerHTML > 59) {
         watchHour.innerHTML++
         watchMin = 0   
        }
     }
    }
    setTimeout(() => {
        watch()
    }, 100);
}
watch()