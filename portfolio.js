const menu = document.querySelector(".nav_toggle");
    const one = document.querySelector(".nav_menu");
    

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        if(menu.classList.contains("active")){
            one.style.display = "block";
        }else{
            one.style.display = "none";
        }
    });


const navLink = document.querySelectorAll('nav_link');
    
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ----- ----- Add Blur to Header ----- ----- */

    const blurHeader = () => {
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
    }
    window.addEventListener('scroll', blurHeader)


    /* ----- Counter ----- */

    document.addEventListener("DOMContentLoaded", function() {
        let activated = false;
        let hasStarted = false;
    
        
        function activateCounters() {
            if (hasStarted) return; 
    
            activated = true; 
    
            const htmls = setInterval(html, 15);
            let count1 = 1;
    
            function html() {
                if (activated) {
                    count1++;
                    document.querySelector('#number1').innerHTML = count1;
                }
                if (count1 == 100) {
                    clearInterval(htmls);
                }
            }
    
            const csss = setInterval(css, 15);
            let count2 = 1;
    
            function css() {
                if (activated) {
                    count2++;
                    document.querySelector('#number2').innerHTML = count2;
                }
                if (count2 == 95) {
                    clearInterval(csss);
                }
            }
    
            const javas = setInterval(java, 15);
            let count3 = 1;
    
            function java() {
                if (activated) {
                    count3++;
                    document.querySelector('#number3').innerHTML = count3;
                }
                if (count3 == 85) {
                    clearInterval(javas);
                }
            }
    
            const reacts = setInterval(react, 15);
            let count4 = 1;
    
            function react() {
                if (activated) {
                    count4++;
                    document.querySelector('#number4').innerHTML = count4;
                }
                if (count4 == 85) {
                    clearInterval(reacts);
                }
            }
    
            hasStarted = true;  
        }
    
        function checkScroll() {
            const counterSection = document.querySelector('.knowledge'); // Select the counter section
            const rect = counterSection.getBoundingClientRect();
            
            
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                activateCounters();
            }
        }
    
        window.addEventListener('scroll', checkScroll);
    
        checkScroll(); 
    });
    

    /* ----- Email ----- */

    const contactForm = document.getElementById('contact-form'), 
          contactMessage = document.getElementById('contact-message');


    const sendEmail = (e) => {
         e.preventDefault()

         emailjs.sendForm('service_uztw06l', 'template_x94gw3c', '#contact-form', 'xHhqShwxB5vud-H6h')
         .then(() => {
            contactMessage.textContent = 'Message sent successfully'
         }, () => {
            contactMessage.textContent = 'Message not sent'
         })
     }

     contactForm.addEventListener('submit', sendEmail )


    /* ----- show scroll up ----- */

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);


/* ----- ----- EXTRA ----- ----- */

const extra = document.querySelectorAll(".extra");
    const exhide = document.querySelectorAll(".extra_hide");
    
extra.forEach((e, index) => {
    e.addEventListener("click", function() {
        exhide[index].classList.toggle("active");
        if(exhide[index].classList.contains("active")){
            exhide[index].style.visibility = "visible";
        }else{
            exhide[index].style.visibility = "hidden";
        }
    })
})


/* ----- ----- WEATHER ----- ----- */

        const form = document.querySelector("form");
        const weather = document.querySelector("#weather");
        const search= document.getElementById("search").value;
        const btn = document.querySelector('.btn');
        console.log(search);

            const getWeather = async (city) => {
                weather.innerHTML = `<h2> Loading... </h2>`;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74be72563f0f68c38b3129807f95a639&units=metric`;
                const res = await fetch(url);
                const data = await res.json();
                return showWeather(data);
                console.log(data);
            }

            const showWeather = (data) => {
                if(data.cod == "404"){
                    weather.innerHTML = `<h2> city not found </h2>`;
                    return;
                }
                weather.innerHTML = `<div>  <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                        alt = ""> </div>
                    <div>
                        <h2> ${data.main.temp} &#8451; </h2>
                        <h4> ${data.weather[0].main} </h4>
                        <p> ${data.wind.speed}</p>
                    </div>`

                    console.log(data);
                
            } 

                form.addEventListener("submit", function (event){
                    const search = document.getElementById("search").value;
                    getWeather(search);
                    event.preventDefault();
                });


    /* ----- ----- GEO_LOCATION ----- ----- */


    const showDetails = document.querySelector(".showDetails");
        document.querySelector(".geo-btn").addEventListener("click", () =>{
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position) =>{
                    const{latitude, longitude} = position.coords;
                    showDetails.textContent = `the latitude ${latitude} & longitude ${longitude}`;
                    console.log(showDetails);
                }, (error) => {
                    showDetails.textContent = error.message;
                    console.log(error.message);
                })
            }
        })

    /* ----- ----- CALENDER ----- ----- */

    const currentDate = document.querySelector('.current-date');
        daysTag = document.querySelector('.days');
        prevNextIcon = document.querySelectorAll('.icons span');

        let date = new Date();
        currYear = date.getFullYear();
        currMonth = date.getMonth();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                        "September", "October", "November", "December"];

        const renderCalender = () => {
            let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
            lastDateofLastmonth = new Date(currYear, currMonth, 0).getDate();
            let liTag = '';

            for(let i = firstDayofMonth; i > 0; i--){
                liTag += `<li class="inactive">${lastDateofLastmonth - i + 1}</li>`;
            }

            for(let i = 1; i <= lastDateofMonth; i++){
                let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}">${i}</li>`;
            }

            currentDate.innerText = `${months[currMonth]} ${currYear}`;
            daysTag.innerHTML = liTag;
        }
        renderCalender();
        prevNextIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

                if(currMonth < 0 || currMonth > 11){
                    date = new Date(currYear, currMonth);
                    currYear = date.getFullYear();
                    currMonth = date.getMonth();
                }else{
                    date = new Date();
                }

                renderCalender();
            });
        });


        /* ----- ----- CALCULATOR ----- ----- */

        const display = document.getElementById("display");

        function toShow(input){
            display.value += input;
        }

        function clearDisplay(){
            display.value = "";
        }

        function calculate(){
            try{
                display.value = eval(display.value);
                display.style.color = "white";
            }
            catch(error){
                display.value = "Error";
                display.style.color = "red";
            }
        }

        function del(){
            display.value =  display.value.toString().slice(0, -1);
        }

    /* ----- ----- STOP WATCH ----- ----- */

    let[seconds, minutes, hours] = [0,0,0];
        let displayTime = document.getElementById('displayTime');
        let timer = null;

            function stopwatch(){
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            displayTime.innerHTML = h + ":" + m + ":" + s;
        }

        function watchStart(){
            if(timer != null)
            {
              clearInterval(timer); 
            }
            timer = setInterval(stopwatch, 1000);
        }

        function watchStop(){
            clearInterval(timer);
        }
        function watchReset(){
            clearInterval(timer);
            [seconds, minutes, hours] = [0,0,0];
            displayTime.innerHTML = "00:00:00";
        }


    /* ----- ----- SHOW EXTRA ----- ----- */

    let exclick = document.querySelectorAll('.extra_click');
        let show = document.querySelectorAll('.extra_show');

        exclick.forEach((e, index) => {
            e.addEventListener('click', function(){
                show[index].classList.toggle('block');
                
            })
        })

/* ----- ----- PREVENT RIGHT CLICK ----- ----- */




/* ----- ----- SCROLL ANIMATION ----- ----- */

const elements = document.querySelectorAll('.scroll-animation');
  
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
  
      elements.forEach((element) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        const scrollPosition = window.pageYOffset;
  
        if (scrollPosition + viewportHeight > elementTop && scrollPosition < elementBottom) {
          element.classList.add('animate'); 
        } else {
          element.classList.remove('animate'); 
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    /* ----- ----- CLICK SOUND ----- ----- */

    const sounds = [
        new Audio("./sound/1.wav"),
        new Audio("./sound/2.wav"),
        new Audio("./sound/3.wav"),
        new Audio("./sound/4.wav"),
        new Audio("./sound/5.wav")
    ];
    
    let clickCount = 0;
    
    document.body.addEventListener("mousedown", (event) => {
        if (event.button === 2 || event.button === 0) {
            const ignored = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
    
            if (!ignored.includes(event.target.tagName) && getComputedStyle(event.target).cursor !== "pointer") {
                const soundToPlay = sounds[clickCount % sounds.length];
                soundToPlay.currentTime = 0;
                soundToPlay.play();
                clickCount++;
                event.preventDefault();
            }
        }
    });