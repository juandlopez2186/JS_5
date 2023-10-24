let esqueletostatus=document.getElementById("equieto")
let esqueleto="off";
let botonaudio=new Audio("../AUD/botonbailar___98653823c627d1d___.mp3")
let BAudio=new Audio("../AUD/y2mate.com - Johnny Cage mains when theyre about to die.mp3")
function vandance() {
    if (esqueleto=="off") {
        esqueleto="on"
        esqueletostatus.classList.add("on")
        esqueletostatus.addEventListener('click',()=>{
            botonaudio.play()
        })
        esqueletostatus.addEventListener('click',()=>{
            BAudio.play()
        })
        console.log("On");
    } else {
        esqueleto="off"
        esqueletostatus.classList.remove("on")
        console.log("Off");
        esqueletostatus.addEventListener('click',()=>{
            botonaudio.pause()
            BAudio.pause()
        })
    }
}