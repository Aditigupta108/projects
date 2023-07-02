let button=document.querySelectorAll(".btn");
let screen=document.querySelector("#first");
let clear=document.querySelector("#ac");
let equal=document.querySelector("#aa");
let del=document.querySelector("#q");
button.forEach(function(button){//this method is to apply function to the element in the array
    button.addEventListener("click",function(e){
        let value=e.target.value;
        screen.value+=value;

    });
});
clear.addEventListener("click",function(e){
    screen.value=" ";
});
equal.addEventListener("click",function(e){
    if(screen.value===' '){
        screen.value="please enter";
    }
    else{
        let answer=eval(screen.value);
        screen.value=answer;
    }
});
