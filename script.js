function darkmode() {
    document.getElementById("top").style.backgroundColor="#36454F";
    document.getElementById("top").style.color="white";
    document.getElementById("header").style.backgroundColor="#36454F";
    document.getElementById("header").style.color="white";
    document.getElementById("content").style.backgroundColor="#353839";
    document.getElementById("content").style.color="white";
    document.getElementById("dark-btn").style.display="none";
    document.getElementById("light-btn").style.display="block";
    console.log("dark");

}
function lightmode() {
    document.getElementById("top").style.backgroundColor="#c68642";
    document.getElementById("header").style.backgroundColor="#c68642";
    document.getElementById("content").style.backgroundColor="#ffdbac";
    document.getElementById("dark-btn").style.display="block";
    document.getElementById("light-btn").style.display="none";
    console.log("light");
}

let darkelement = document.getElementById("dark-btn");
darkelement.addEventListener("click", ()=>{
    darkmode();
});
let lightelement = document.getElementById("light-btn");
lightelement.addEventListener("click", ()=>{
    lightmode();
});

function alerty() {
    alert("This Floor is not added yet !")
}