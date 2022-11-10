document.querySelectorAll('.navn a').forEach(anchor=>{
    anchor.addEventListener("click",()=>{
        const el=document.getElementById(anchor.getAttribute("data-link"))
        el.scrollIntoView({behavior:"smooth",block:"start"})
     })
})
function changePhoto(src){
    document.querySelector('.right .top img').src=src;
}
const text=document.querySelector(".secon");
const tyoing=()=>{
    setTimeout(()=>{
        text.innerHTML="for graphic design"
    },0)
    setTimeout(()=>{
        text.innerHTML="and"
    },4000)
    setTimeout(()=>{
        text.innerHTML="digital markating"
    },8000)
    setTimeout(()=>{
        text.innerHTML="and"
    },12000)
    setTimeout(()=>{
        text.innerHTML="courses"
    },16000)
}
tyoing()
setInterval(tyoing,20000)