let btn = document.getElementById("btn")

btn.onclick=()=>{
    let param1=parseInt(document.getElementById("param1").value)
    let param2=parseInt(document.getElementById("param2").value)
    let result=document.getElementById("result")
    let sum=0
    if(isNaN(param1)||isNaN(param2)){
        result.innerHTML="Zəhmət olmasa rəqəm daxil edin.."
    }
    else{
            for (let i = param1; i <= param2; i++) {
            sum += i;
                result.innerHTML=sum
    }


    }
}

let btn2=document.getElementById("size")
let element = document.getElementById("element")
btn2.onclick=()=>{
    let currentWidth = parseInt(getComputedStyle(element).width);
    let currentHeight = parseInt(getComputedStyle(element).height);

    let newWidth = currentWidth + 50;
    let newHeight = currentHeight + 50;

    element.style.width = newWidth + "px";
    element.style.height = newHeight + "px";

}