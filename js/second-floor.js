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
    // var initial_value = $('input[name=initial]').val();
    // var final_value = $('input[name=final]').val();
    // starting = initial_value;
    // ending = final_value;

    // let getsetRoom = document.getElementById(starting);
    // let getsetRoom1 = document.getElementById(ending);
    // getsetRoom.setAttribute("fill","#1EF53E");
    // starting = Number.parseInt(getsetRoom.id);
    // getsetRoom1.setAttribute("fill","#F70808");
    // ending = Number.parseInt(getsetRoom1.id);
    // console.log(starting);
    // console.log(ending);
    locates();
})

//ANUJ

let outofpark = [1];
let firstrow = [2, 3, 4, 5, 6, 7, 8];
let firstrowup = [17, 18, 19, 20];
let firstrowdown = [13, 14, 15, 16];
let secondrow = [9, 10, 11, 12];
let firstrowdownpara = [];

let starting = -1;
let ending = -1;

let path1 = document.getElementById("path1");
let path2 = document.getElementById("path2");
let path3 = document.getElementById("path3");
let path4 = document.getElementById("path4");
let path5 = document.getElementById("path5");
let path6 = document.getElementById("path6");
let path7 = document.getElementById("path7");
let path9 = document.getElementById("path9");
let path10 = document.getElementById("path10");
let path11 = document.getElementById("path11");
let path12 = document.getElementById("path12");
let path13 = document.getElementById("path13");
let path14 = document.getElementById("path14");
let path15 = document.getElementById("path15");
let path16 = document.getElementById("path16");
let path17 = document.getElementById("path17");
let path18 = document.getElementById("path18");
let path19 = document.getElementById("path19");
let path20 = document.getElementById("path20");
let path21 = document.getElementById("path21");
let path22 = document.getElementById("path22");
let path23 = document.getElementById("path23");

function removeAlll() {
    for(let i=1;i<=23;i++)
    {
        document.getElementById("path"+i).style.opacity = 0;
        document.getElementById("path"+i).style.transform = "rotate(0deg)"
    }
}

function removeDestinationAll() {
  for(let i=1;i<=20;i++)
  {
    if(starting!=i)
      document.getElementById(i.toString()).setAttribute("fill","#B6AEA1");
  }
}

const getsetGo = (room_id) => {
    removeAlll();
  let getsetRoom = document.getElementById(room_id);
  if (starting == -1) {
    getsetRoom.setAttribute("fill", "#1EF53E");
    starting = Number.parseInt(getsetRoom.id);
  } else if (starting != -1 && ending == -1 && starting != Number.parseInt(room_id)) {
    getsetRoom.setAttribute("fill", "#F70808");
    ending = Number.parseInt(getsetRoom.id);
    locates();
  } else if (starting != -1 && ending != -1 && (starting != Number.parseInt(room_id))) {
    removeDestinationAll();
    getsetRoom.setAttribute("fill", "#F70808");
    ending = Number.parseInt(getsetRoom.id);
    locates();
  }
};

const locates = () => {
  function path1Con(degree)
  {
    path1.style.opacity = 1;
    path1.style.transform = `rotate(${degree+"deg"})`;
  }
  function path2Con(degree)
  {
    path2.style.opacity = 1;
    path2.style.transform = `rotate(${degree+"deg"})`;
  }
  function path3Con(degree)
  {
    path3.style.opacity = 1;
    path3.style.transform = `rotate(${degree+"deg"})`;
  }
  function path4Con(degree)
  {
    path4.style.opacity = 1;
    path4.style.transform = `rotate(${degree+"deg"})`;
  }
  function path5Con(degree)
  {
    path5.style.opacity = 1;
    path5.style.transform = `rotate(${degree+"deg"})`;
  }
  function path6Con(degree)
  {
    path6.style.opacity = 1;
    path6.style.transform = `rotate(${degree+"deg"})`;
  }
  function path7Con(degree)
  {
    path7.style.opacity = 1;
    path7.style.transform = `rotate(${degree+"deg"})`;
  }
  function path8Con(degree)
  {
    path8.style.opacity = 1;
    path8.style.transform = `rotate(${degree+"deg"})`;
  }
  function path9Con(degree)
  {
    path9.style.opacity = 1;
    path9.style.transform = `rotate(${degree+"deg"})`;
  }
  function path10Con(degree)
  {
    path10.style.opacity = 1;
    path10.style.transform = `rotate(${degree+"deg"})`;
  }
  function path11Con(degree)
  {
    path11.style.opacity = 1;
    path11.style.transform = `rotate(${degree+"deg"})`;
  }
  function path12Con(degree)
  {
    path12.style.opacity = 1;
    path12.style.transform = `rotate(${degree+"deg"})`;
  }
  function path13Con(degree)
  {
    path13.style.opacity = 1;
    path13.style.transform = `rotate(${degree+"deg"})`;
  }
  function path14Con(degree)
  {
    path14.style.opacity = 1;
    path14.style.transform = `rotate(${degree+"deg"})`;
  }
  function path15Con(degree)
  {
    path15.style.opacity = 1;
    path15.style.transform = `rotate(${degree+"deg"})`;
  }
  function path16Con(degree)
  {
    path16.style.opacity = 1;
    path16.style.transform = `rotate(${degree+"deg"})`;
  }
  function path17Con(degree)
  {
    path17.style.opacity = 1;
    path17.style.transform = `rotate(${degree+"deg"})`;
  }
  function path18Con(degree)
  {
    path18.style.opacity = 1;
    path18.style.transform = `rotate(${degree+"deg"})`;
  }
  function path19Con(degree)
  {
    path19.style.opacity = 1;
    path19.style.transform = `rotate(${degree+"deg"})`;
  }
  function path20Con(degree)
  {
    path20.style.opacity = 1;
    path20.style.transform = `rotate(${degree+"deg"})`;
  }
  function path21Con(degree)
  {
    path21.style.opacity = 1;
    path21.style.transform = `rotate(${degree+"deg"})`;
  }
  function path22Con(degree)
  {
    path22.style.opacity = 1;
    path22.style.transform = `rotate(${degree+"deg"})`;
  }
  function path23Con(degree)
  {
    path23.style.opacity = 1;
    path23.style.transform = `rotate(${degree+"deg"})`;
  }

  if (outofpark.includes(starting)) {
    path23Con(180);path20Con(180);
    if(firstrow.includes(ending))
    {
        switch (ending) {
            case 2:
                path1Con(-90);
                break;
            case 3:
                path1Con(0);path2Con(-90);
                break;
            case 4:
                path1Con(0);path2Con(0);path3Con(-90);
                break;
            case 5:
                path1Con(0);path2Con(0);path3Con(0);path4Con(-90);
                break;
            case 6:
                path1Con(0);path2Con(0);path3Con(0);path4Con(0);path5Con(-90);
                break;
            case 7: 
                path1Con(0); path2Con(0); path3Con(0);path4Con(0);path5Con(0);path6Con(-90);
                break;
            case 8: 
            path1Con(0); path2Con(0); path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(-90);
                break;
        }
    }

    else if(firstrowup.includes(ending))
    {
        path1Con(0);path2Con(0);path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        switch(ending)
        {
            case 17:
              path10Con(-90);path9Con(180);path17Con(180);
              break;
            case 18:
              path10Con(-90);path9Con(180);path17Con(-90);
              break;
            case 19:
              path10Con(-90);path9Con(180);path17Con(-45);
              break;
            case 20:
              path10Con(-90);path9Con(180);path17Con(0);
              break;
        }
    }
    else if(firstrowdown.includes(ending))
    {
        path1Con(0);path2Con(0);path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        switch (ending) {
            case 13:
              path10Con(45);
              break;
            case 14:
              path10Con(90);path11Con(-90);
              break;
            case 15:
              path10Con(90);path11Con(0);path18Con(-90);
              break;
            case 16:
                path10Con(90);path11Con(0);path18Con(0);path19Con(-90);
                break;
        }
    }
    else if(secondrow.includes(ending))
    {
      path1Con(0);path2Con(0);path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        switch(ending)
        {
          case 9:
            path10Con(-45);
            break;
          case 10:
            path10Con(0);path12Con(0);path13Con(-90);
            break;
          case 11:
            path10Con(0);path12Con(0);path13Con(-15);
            break;
          case 12:
            path10Con(0);path12Con(0);path13Con(0);
            break;
        }
    }
    else if(firstrowdownpara.includes(ending))
    {

    }
    else
    {
      
      alert("Same destination, please choose a different destination.")
      removeAlll();
    }
    
  } else if (firstrow.includes(starting)) 
  {

    switch(starting)
    {
      case 2:
        path1Con(90);path2Con(0);path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        break;
      case 3:
        path2Con(90);path3Con(0);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        break;
      case 4:
        path3Con(90);path4Con(0);path5Con(0);path6Con(0);path7Con(0);
        break;
      case 5:
        path4Con(90);path5Con(0);path6Con(0);path7Con(0);
        break;
      case 6:
        path5Con(90);path6Con(0);path7Con(0);
        break;
      case 7:
        path6Con(90);path7Con(0);
        break;
      case 8:
        path7Con(0);
        break;
    }


    if(outofpark.includes(ending))
    {
      removeAlll();
      path20Con(0);path23Con(0);
      switch(starting)
      {
        case 2:
          path1Con(180);
          break;
        case 3:
          path1Con(180);path2Con(90);
          break;
        case 4:
          path1Con(180);path2Con(180);path3Con(90);
          break;
        case 5:
          path1Con(180);path2Con(180);path3Con(180);path4Con(90);
          break;
        case 6:
          path1Con(180);path2Con(180);path3Con(180);path4Con(180);path5Con(90);
          break;
        case 7:
          path1Con(180);path2Con(180);path3Con(180);path4Con(180);path5Con(180);path6Con(90);
          break;
        case 8:
          path1Con(180);path2Con(180);path3Con(180);path4Con(180);path5Con(180);path6Con(180);path7Con(90);
          break;
      }
    }
    else if(firstrowup.includes(ending))
    {
      switch(ending)
      {
        case 17:
          path10Con(-90);path9Con(180);path17Con(180);
          break;
        case 18:
          path10Con(-90);path9Con(180);path17Con(-90);
          break;
        case 19:
          path10Con(-90);path9Con(180);path17Con(-45);
          break;
        case 20:
          path10Con(-90);path9Con(180);path17Con(0);
          break;
      }
      
    }
    else if(firstrowdown.includes(ending))
    {
      switch (ending) {
        case 13:
          path10Con(45);
          break;
        case 14:
          path10Con(90);path11Con(-90);
          break;
        case 15:
          path10Con(90);path11Con(0);path18Con(-90);
          break;
        case 16:
            path10Con(90);path11Con(0);path18Con(0);path19Con(-90);
            break;
    }
    }
    else if(secondrow.includes(ending))
    {
      switch(ending)
        {
          case 9:
            path10Con(-45);
            break;
          case 10:
            path10Con(0);path12Con(0);path13Con(-90);
            break;
          case 11:
            path10Con(0);path12Con(0);path13Con(-15);
            break;
          case 12:
            path10Con(0);path12Con(0);path13Con(0);
            break;
        }
    }
    else if(firstrow.includes(ending))
    {
       alert("Destination is on the same row.");
       removeAlll();
    }
    else
    {

    }

  } else if (firstrowup.includes(starting)) {

    switch(starting){
      case 17:
        path9Con(0);
        break;
      case 18:
        path17Con(90);path9Con(0);
        break;
      case 19:
        path17Con(135);path9Con(0);    
        break;
      case 20:
        path17Con(180);path9Con(0);
        break;
    }

    if(firstrow.includes(ending) || outofpark.includes(ending))
    {
      switch(ending){
        case 8:
          path7Con(-90);path10Con(180);
          break;
        case 7:
          path7Con(180);path6Con(-90);
          break;
        case 6:
          path7Con(180);path6Con(180);path5Con(-90);
          break;
        case 5:
          path7Con(180);path6Con(180);path5Con(180);path4Con(-90);
          break;
        case 4:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(-90);
          break;
        case 3:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(-90);
          break;
        case 2:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(-90);
          break;
        case 1:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(180);path20Con(0);path23Con(0);
          break;
      }
    }
    else if(firstrowdown.includes(ending))
    {
      switch(ending)
      {
        case 13:
          path10Con(45);
          break;
        case 14:
          path10Con(90);path11Con(-90);
          break;
        case 15:
          path10Con(90);path11Con(0);path18Con(-90);
          break;
        case 16:
          path10Con(90);path11Con(0);path18Con(0);path19Con(-90);
          break;
      }
    }
    else if(secondrow.includes(ending))
    {
      switch(ending)
        {
          case 9:
            path10Con(0);path12Con(-90);
            break;
          case 10:
            path10Con(0);path12Con(0);path13Con(-90);
            break;
          case 11:
            path10Con(0);path12Con(0);path13Con(-15);
            break;
          case 12:
            path10Con(0);path12Con(0);path13Con(0);
            break;
        }
    }
    else
    {
      removeAlll();
      if(ending == 17)
        alert("Your destination is on the front.");
      else
        alert("Destination is on the same row.");
    }


  } else if (firstrowdown.includes(starting)) {
    switch(starting)
    {
      case 13:
        path11Con(180);
        break;
      case 14:
        path11Con(180);
        break;
      case 15:
        path18Con(90);path11Con(180);
        break;
      case 16:
        path19Con(90);path18Con(180);path11Con(180);
        break;
    }
    
    if(firstrow.includes(ending) || outofpark.includes(ending))
    {
      switch(ending){
        case 8:
          path7Con(-90);path10Con(180);
          break;
        case 7:
          path7Con(180);path6Con(-90);path10Con(180);
          break;
        case 6:
          path7Con(180);path6Con(180);path5Con(-90);path10Con(180);
          break;
        case 5:
          path7Con(180);path6Con(180);path5Con(180);path4Con(-90);path10Con(180);
          break;
        case 4:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(-90);path10Con(180);
          break;
        case 3:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(-90);path10Con(180);
          break;
        case 2:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(-90);path10Con(180);
          break;
        case 1:
          path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(180);path20Con(0);path23Con(0);path10Con(180);
          break;
      }
    }

    else if(secondrow.includes(ending))
    {
      switch(ending)
        {
          case 9:
            path10Con(0);path12Con(-90);
            break;
          case 10:
            path10Con(0);path12Con(0);path13Con(-90);
            break;
          case 11:
            path10Con(0);path12Con(0);path13Con(-15);
            break;
          case 12:
            path10Con(0);path12Con(0);path13Con(0);
            break;
        }
    }

    else if(firstrowup.includes(ending))
    {
      switch(ending)
        {
            case 17:
              path10Con(-90);path9Con(180);path17Con(180);
              break;
            case 18:
              path10Con(-90);path9Con(180);path17Con(-90);
              break;
            case 19:
              path10Con(-90);path9Con(180);path17Con(-45);
              break;
            case 20:
              path10Con(-90);path9Con(180);path17Con(0);
              break;
        }
    }
    else
    {
      removeAlll();
      alert("Destination is on the same row.");
    }


  } else if (secondrow.includes(starting)) {

    switch(starting)
        {
          case 12:
            path12Con(180);path13Con(180);
            break;
          case 11:
            path12Con(180);path13Con(165);
            break;
          case 10:
            path12Con(180);path13Con(135);
            break;
          case 9:
            path12Con(135);
            break;
        }
    

        if(firstrow.includes(ending) || outofpark.includes(ending))
        {
          switch(ending){
            case 8:
              path7Con(-90);path10Con(180);
              break;
            case 7:
              path7Con(180);path6Con(-90);path10Con(180);
              break;
            case 6:
              path7Con(180);path6Con(180);path5Con(-90);path10Con(180);
              break;
            case 5:
              path7Con(180);path6Con(180);path5Con(180);path4Con(-90);path10Con(180);
              break;
            case 4:
              path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(-90);path10Con(180);
              break;
            case 3:
              path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(-90);path10Con(180);
              break;
            case 2:
              path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(-90);path10Con(180);
              break;
            case 1:
              path7Con(180);path6Con(180);path5Con(180);path4Con(180);path3Con(180);path2Con(180);path1Con(180);path20Con(0);path23Con(0);path10Con(180);
              break;
          }
        }
        else if(firstrowdown.includes(ending))
        {
          switch(ending)
          {
            case 13:
              path10Con(90);break;
            case 14:
              path11Con(-90);path10Con(90);
              break;
            case 15:
              path11Con(0);path18Con(-90);path10Con(90);
              break;
            case 16:
              path11Con(0);path18Con(0);path19Con(-90);path10Con(90);
              break;
          }
         }
         else if(firstrowup.includes(ending))
         {
          switch(ending)
          {
            case 17:
              path10Con(-90);path9Con(165);
              break;
            case 18:
              path10Con(-90);path9Con(180);path17Con(-90);
              break;
            case 19:
              path10Con(-90);path9Con(180);path17Con(-45);
              break;
            case 20:
              path10Con(-90);path9Con(180);path17Con(0);
              break;
          }

         }
         else
         {
          removeAlll();
          alert("The destination is on the same row.");
         }

  } else if (firstrowdownpara.includes(starting)) {
      
  } else alert("Location is on the same row.");

};