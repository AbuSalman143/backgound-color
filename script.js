let index=0;
let result=document.getElementsByTagName("body")
function changeBackground(){
    const color=["red" , "green" , "blue" ,"black" ,"pink","aqua","purple" ]
    result[0].style.background=color[index++]
    if(index > color.length-1){
        index=0
    }
}