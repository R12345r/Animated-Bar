const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
let id = 0;

updateNum();

function updateNum (){
    counterEl.innerText = id + "%";
    barEl.style.width    = id + "%";
    id++;
    if(id < 101){
        setTimeout(updateNum, 20)
        
    }


}
