const diceWrapperList = document.querySelectorAll('.diceWrapper')
const diceList = document.querySelectorAll('.diceField');
const closeMark = document.querySelector('.closeMark');
const title = document.getElementsByTagName('h1')[0];

diceList.forEach(i => {
    const btn =  i.nextElementSibling;
    i.addEventListener("click", function(){
        i.classList.add("active");
        btn.classList.remove("inactive");
        diceWrapperList.forEach(i => {
            if(!i.firstElementChild.classList.contains("active")){
                i.classList.add("inactive")
            }
        });
        title.textContent = "Press the button to roll";
        closeMark.classList.remove("inactive");
    });
})

diceList.forEach(i => {
    const multiplier = i.dataset.multiplier;
    const btn =  i.nextElementSibling;
    btn.addEventListener('click', function(){
        const roll = Math.floor(Math.random() * multiplier + 1)
        i.firstChild.textContent = roll;
    })  
});

closeMark.addEventListener("click", function(){
    closeMark.classList.add("inactive");
    diceList.forEach(i => {
        const btn =  i.nextElementSibling;
        btn.classList.add("inactive");
        i.firstChild.textContent = i.dataset.type;
        i.classList.remove('active');
        i.parentElement.classList.remove('inactive');
        title.textContent = "Choose your dice"
    });        
});

