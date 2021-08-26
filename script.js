var cards = document.querySelectorAll(".item")

var firstflip = false;
var secondflip=false;
var firstcard;
var secondcard;
function open() {
    // console.log(this)
    if (!firstflip) {
        this.classList.add("flip")
        firstflip = true
        firstcard = this
        this.removeEventListener("click",open)



        // if i want to get the attribute of any html element then firstcard.getAttribute("data-vaalue")=firstcard.dataset.value



        
    } else if(!secondflip) {
        secondflip=true
        this.classList.add("flip")
        secondcard = this
        this.removeEventListener("click",open)
        // console.log(secondcard)
        check();
    }
}
function check() {
    if (firstcard.dataset.value == secondcard.dataset.value) {
        sucess()
    } else {
        fail()
    }
}
function sucess() {
    console.log("sucess")
    firstcard.removeEventListener("click", open)
    secondcard.removeEventListener("click", open)
    reset()
}
const promise = () => {
    return new Promise((resolved, noresolve) => {
        setTimeout(() => {
            firstcard.classList.remove("flip")
            secondcard.classList.remove("flip")
            resolved()
        }, 500)
        
    })
}
const fail = async () => {
    console.log('fail');
    await promise()
    firstcard.addEventListener("click",open)
    secondcard.addEventListener("click",open)
    reset()

   
}

function reset() {
    firstflip = false
    secondflip=false
    firstcard = null
    secondcard = null
    console.log("resetting....")
}

cards.forEach((card) => {
    // console.log(card)
    card.addEventListener("click", open)
})



function shuffel(){
    cards.forEach((card)=>{
        var posi=Math.floor(Math.random() * 16)
        // math.randon give value between 0  and 1
        card.style.order=posi
    })
}
window.onload=shuffel()
