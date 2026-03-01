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
//Search

$('form').on('submit', function(ev){
    ev.preventDefault();
    var initial_value = $('input[name=initial]').val();
    var final_value = $('input[name=final]').val();
    starting = initial_value;
    ending = final_value;

    let getsetRoom = document.getElementById(starting);
    let getsetRoom1 = document.getElementById(ending);
    getsetRoom.setAttribute("fill","#1EF53E");
    starting = Number.parseInt(getsetRoom.id);
    getsetRoom1.setAttribute("fill","#F70808");
    ending = Number.parseInt(getsetRoom1.id);
    console.log(starting);
    console.log(ending);
    locate();
})

//ANUJ

let locateelement = document.getElementById("locate");
locateelement.addEventListener("click", ()=>{
    locate();
    console.log("Hi");
});

let firstrow = [1,2,3,4];
let secondrow = [5,6,7,8];
let thirdrow = [9,10,11,12];
let fourthrow = [13,14,15,16];
let fifthrow = [17,18,19,20];
let sixthrow = [21,22,23,24];
let seventhrow = [25,26,27,28];
let lastrow = [29,30,31,32];

let starting = -1;
let ending = -1;

let path1 = document.getElementById("path1");
let path2 = document.getElementById("path2");
let path3 = document.getElementById("path3");
let path4 = document.getElementById("path4");
let path5 = document.getElementById("path5");
let path6 = document.getElementById("path6");
let path7 = document.getElementById("path7");

function removeAll() {
    for(let i=1;i<=7;i++)
    {
        document.getElementById("path"+i).style.opacity = 0;
        document.getElementById("path"+i).style.transform = "rotate(0deg)"
    }
        
}

const getsetGo = (room_id)=>{
    let getsetRoom = document.getElementById(room_id);
    if(starting == -1)
    {
        getsetRoom.setAttribute("fill","#1EF53E");
        starting = Number.parseInt(getsetRoom.id);
    }
    else if((starting != -1) && (ending==-1))
    {
        getsetRoom.setAttribute("fill","#F70808");
        ending = Number.parseInt(getsetRoom.id);
    }
    else if((starting != -1) && (ending!=-1))
    {
        getsetRoom.setAttribute("fill","#F70808");
        ending = Number.parseInt(getsetRoom.id);

        locate();
    }
}

const locate = ()=>{

    removeAll();
    if(firstrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {
                path1.style.opacity = "1";
                path1.style.transform = "rotate(90deg)";
                path2.style.opacity = "1";
                path3.style.opacity = "1";
                path3.style.transform = "rotate(-90deg)";
        }
        else if(thirdrow.includes(ending))
        {
            path1.style.opacity = "1";
            path1.style.transform = "rotate(90deg)";
        }
        else if(fourthrow.includes(ending))
        {
                path1.style.opacity = "1";
                path1.style.transform = "rotate(90deg) translateX(-50px)";
                path2.style.opacity = "1";
                path3.style.opacity = "1";
                path3.style.transform = "rotate(90deg) translateX(50px)";
        }
        else if(fifthrow.includes(ending))
        {
            path1.style.opacity = "1";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path6.style.transform = "rotate(180deg)";
            path5.style.opacity = "1";
            path5.style.transform = "rotate(-90deg)"
        }
        else if(sixthrow.includes(ending))
        {
            path1.style.opacity = "1";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path7.style.opacity = "1";
            path7.style.transform = "rotate(-90deg)";
        }
        else if(seventhrow.includes(ending))
        {
            path1.style.opacity = "1";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path6.style.transform = "rotate(180deg)";
            path5.style.opacity = "1";
            path5.style.transform = "rotate(90deg)"
        }
        else if(lastrow.includes(ending))
        {
            path1.style.opacity = "1";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path7.style.opacity = "1";
            path7.style.transform = "rotate(90deg)";
        }
        else
        {
                alert("Location is on the same row.");
        }
    }

    if(secondrow.includes(starting))
    {
        if(firstrow.includes(ending))
        {
                path1.style.opacity = "1";
                path1.style.transform = "rotate(-90deg)";
                path2.style.opacity = "1";
                path2.style.transform = "rotate(180deg)"
                path3.style.opacity = "1";
                path3.style.transform = "rotate(90deg)";
        }
        else if(thirdrow.includes(ending))
        {
                path3.style.opacity = "1";
                path3.style.transform = "rotate(90deg) translateX(-50px)";
                path2.style.opacity = "1";
                path2.style.transform = "rotate(180deg)";
                path1.style.opacity = "1";
                path1.style.transform = "rotate(90deg) translateX(50px)";
        }
        else if(fourthrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(90deg)";
        }
        else if(fifthrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)"
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path6.style.transform = "rotate(180deg)";
            path5.style.opacity = "1";
            path5.style.transform = "rotate(-90deg)";
        }
        else if(sixthrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)"
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path7.style.opacity = "1";
            path7.style.transform = "rotate(-90deg)";
        }
        else if(seventhrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)"
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path6.style.transform = "rotate(180deg)";
            path5.style.opacity = "1";
            path5.style.transform = "rotate(90deg)";
        }
        else if(lastrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)"
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)";
            path4.style.opacity = "1";
            path4.style.transform = "rotate(90deg)";
            path6.style.opacity = "1";
            path7.style.opacity = "1";
            path7.style.transform = "rotate(90deg)"
        }
        else
        {
            alert("Location is on the same row.");
        }
    }
    if(thirdrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {
            path1.style.opacity = 1;
            path1.style.transform = "rotate(-90deg) translateX(-50px)";
            path2.style.opacity = 1;
            path3.style.opacity = 1;
            path3.style.transform = "rotate(-90deg) translateX(50px)";
        }
        else if(firstrow.includes(ending))
        {
            path1.style.opacity = 1;
            path1.style.transform = "rotate(-90deg)";
        }
        else if(fourthrow.includes(ending))
        {
            path1.style.opacity = 1;
            path1.style.transform = "rotate(-90deg)";
            path2.style.opacity = 1;
            path3.style.opacity = 1;
            path3.style.transform = "rotate(90deg)";
        }
        else if(fifthrow.includes(ending))
        {
            path1.style.opacity = 1;
            path2.style.opacity = 1;
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path6.style.transform = "rotate(180deg)"
            path5.style.opacity = "1";
            path5.style.transform = "rotate(-90deg)";
        }
        else if(sixthrow.includes(ending))
        {
            path1.style.opacity = 1;
            path2.style.opacity = 1;
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path7.style.opacity = "1";
            path7.style.transform = "rotate(-90deg)";
        }
        else if(seventhrow.includes(ending))
        {
            path1.style.opacity = 1;
            path2.style.opacity = 1;
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path6.style.transform = "rotate(180deg)"
            path5.style.opacity = "1";
            path5.style.transform = "rotate(90deg)";
        }
        else if(lastrow.includes(ending))
        {
            path1.style.opacity = 1;
            path2.style.opacity = 1;
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path7.style.opacity = "1";
            path7.style.transform = "rotate(90deg)";
        }
        else
        {
            alert("Location is on the same row.");
        }
    }
    if(fourthrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(-90deg)";
        }
        else if(thirdrow.includes(ending))
        {
            path1.style.opacity = 1;
            path1.style.transform = "rotate(90deg)";
            path2.style.opacity = 1;
            path2.style.transform = "rotate(180deg)"
            path3.style.opacity = 1;
            path3.style.transform = "rotate(-90deg)";
        }
        else if(firstrow.includes(ending))
        {
            path1.style.opacity = "1";
                path1.style.transform = "rotate(-90deg) translateX(50px)";
                path2.style.opacity = "1";
                path2.style.transform = "rotate(180deg)"
                path3.style.opacity = "1";
                path3.style.transform = "rotate(-90deg) translateX(-50px)";
        }
        else if(fifthrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path6.style.transform = "rotate(180deg)"
            path5.style.opacity = "1";
            path5.style.transform = "rotate(-90deg)";
        }
        else if(sixthrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path7.style.opacity = "1";
            path7.style.transform = "rotate(-90deg)";
        }
        else if(seventhrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path6.style.transform = "rotate(180deg)"
            path5.style.opacity = "1";
            path5.style.transform = "rotate(90deg)";
        }
        else if(lastrow.includes(ending))
        {
            path3.style.opacity = "1";
            path3.style.transform = "rotate(180deg)";
            path2.style.opacity = "1";
            path2.style.transform = "rotate(90deg)"
            path4.style.opacity = 1;
            path4.style.transform = "rotate(90deg)"
            path6.style.opacity = 1;
            path7.style.opacity = "1";
            path7.style.transform = "rotate(90deg)";
        }
        else
        {
            alert("Location is on the same row.");
        }
    }
    if(fifthrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {

        }
        else if(thirdrow.includes(ending))
        {

        }
        else if(fourthrow.includes(ending))
        {

        }
        else if(firstrow.includes(ending))
        {
            
        }
        else if(sixthrow.includes(ending))
        {

        }
        else if(seventhrow.includes(ending))
        {

        }
        else if(lastrow.includes(ending))
        {

        }
        else
        {
            alert("Location is on the same row.");
        }
    }
    if(sixthrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {

        }
        else if(thirdrow.includes(ending))
        {

        }
        else if(fourthrow.includes(ending))
        {

        }
        else if(fifthrow.includes(ending))
        {

        }
        else if(firstrow.includes(ending))
        {

        }
        else if(seventhrow.includes(ending))
        {

        }
        else if(lastrow.includes(ending))
        {

        }
        else
        {
            alert("Location is on the same row.");
        }
    }
    if(seventhrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {

        }
        else if(thirdrow.includes(ending))
        {

        }
        else if(fourthrow.includes(ending))
        {

        }
        else if(fifthrow.includes(ending))
        {

        }
        else if(sixthrow.includes(ending))
        {

        }
        else if(firstrow.includes(ending))
        {

        }
        else if(lastrow.includes(ending))
        {

        }
        else
        {
            alert("Location is on the same row.");
        }
    }

    if(lastrow.includes(starting))
    {
        if(secondrow.includes(ending))
        {

        }
        else if(thirdrow.includes(ending))
        {

        }
        else if(fourthrow.includes(ending))
        {

        }
        else if(fifthrow.includes(ending))
        {

        }
        else if(sixthrow.includes(ending))
        {

        }
        else if(seventhrow.includes(ending))
        {

        }
        else if(firstrow.includes(ending))
        {

        }
        else
        {
            alert("Location is on the same row.");
        }
    }
}