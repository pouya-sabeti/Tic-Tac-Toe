var coll = document.querySelectorAll(".coll");
var nobat = 1;
var coll_1,coll_2,coll_3,coll_4,coll_5,coll_6,coll_7,coll_8,coll_9;
coll[0].addEventListener("click",()=>{
    if(coll[0].innerHTML != ""){

    }
else if(nobat == 0){
coll[0].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_1 = "circle";
}
else if(nobat == 1){
    coll[0].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_1 = "times";
}
});
coll[1].addEventListener("click",()=>{

    if(coll[1].innerHTML != ""){

    }
else if(nobat == 0){
coll[1].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_2="circle";
}
else if(nobat == 1){
    coll[1].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_2="times";
}
});
coll[2].addEventListener("click",()=>{

    if(coll[2].innerHTML != ""){

    }
else if(nobat == 0){
coll[2].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_3 = "circle";
}
else if(nobat == 1){
    coll[2].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_3 = "times";
}
});
coll[3].addEventListener("click",()=>{
    
    if(coll[3].innerHTML != ""){

    }
else if(nobat == 0){
coll[3].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_4="circle";
}
else if(nobat == 1){
    coll[3].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_4="times";
}
});
coll[4].addEventListener("click",()=>{

    if(coll[4].innerHTML != ""){

    }
else if(nobat == 0){
coll[4].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_5 ="circle";
}
else if(nobat == 1){
    coll[4].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_5 = "times";
}
});
coll[5].addEventListener("click",()=>{
    if(coll[5].innerHTML != ""){

    }
else if(nobat == 0){
coll[5].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_6 = "circle";
}
else if(nobat == 1){
    coll[5].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_6 = "times";
}
});
coll[6].addEventListener("click",()=>{
    if(coll[6].innerHTML != ""){

    }
else if(nobat == 0){
coll[6].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_7 = "circle";
}
else if(nobat == 1){
    coll[6].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_7 = "times";
}
});
coll[7].addEventListener("click",()=>{
    if(coll[7].innerHTML != ""){

    }
else if(nobat == 0){
coll[7].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
 coll_8 = "circle";
}
else if(nobat == 1){
    coll[7].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_8 = "times";
}
});
coll[8].addEventListener("click",()=>{
    if(coll[8].innerHTML != ""){

    }
else if(nobat == 0){
coll[8].innerHTML='<i class="far fa-circle"></i>';
nobat = 1;
coll_9 = "circle";
}
else if(nobat == 1){
    coll[8].innerHTML='<i class="fas fa-times"></i>';
nobat = 0;
coll_9 = "times";
}
});
function check(){
if(coll_1 == "circle" && coll_2 == "circle" && coll_3 == "circle" || 
coll_4 == "circle" && coll_5 == "circle" && coll_6 == "circle" ||
coll_7 == "circle" && coll_8 == "circle" && coll_9 == "circle" ||
coll_1 == "circle" && coll_4 == "circle" && coll_7 == "circle" ||
coll_2 == "circle" && coll_5 == "circle" && coll_8 == "circle" ||
coll_3 == "circle" && coll_6 == "circle" && coll_9 == "circle" ||
coll_1 == "circle" && coll_5 == "circle" && coll_9 == "circle" ||
coll_3 == "circle" && coll_5 == "circle" && coll_7 == "circle"
){
   document.querySelector(".box").classList.add("tamam-circle");
    clearInterval(Time);
}
else if(coll_1 == "times" && coll_2 == "times" && coll_3 == "times" || 
coll_4 == "times" && coll_5 == "times" && coll_6 == "times" ||
coll_7 == "times" && coll_8 == "times" && coll_9 == "times" ||
coll_1 == "times" && coll_4 == "times" && coll_7 == "times" ||
coll_2 == "times" && coll_5 == "times" && coll_8 == "times" ||
coll_3 == "times" && coll_6 == "times" && coll_9 == "times" ||
coll_1 == "times" && coll_5 == "times" && coll_9 == "times" ||
coll_3 == "times" && coll_5 == "times" && coll_7 == "times"
){
    document.querySelector(".box").classList.add("tamam-times");
    clearInterval(Time);
}
}

var Time =  setInterval(check,100);