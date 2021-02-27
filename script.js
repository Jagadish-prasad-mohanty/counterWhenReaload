const counts=document.querySelectorAll(".counts");
const count=document.querySelectorAll(".count");

count.forEach((c)=>{
    c.innerHTML=0;
    const dataTarget=+c.getAttribute('data-target');
    const incr=Math.round(dataTarget/100);
    const autoIncrCount=()=>{
        let startingCount=Number(c.innerHTML);

        if(startingCount<dataTarget){
            c.innerHTML=`${Math.round(startingCount+incr)}`;
            setTimeout(autoIncrCount,10);
        }else{
            c.innerHTML=dataTarget
        }

    }
    autoIncrCount();
});
