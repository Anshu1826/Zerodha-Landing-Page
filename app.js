const p = document.querySelector(".p")
const r = document.querySelector(".r")
const t = document.querySelector(".t")
const ans = document.querySelector(".ans")

const btn = document.querySelector(".calc")
btn.addEventListener('click',(e)=>{
    ans.textContent = ((p.value)*(r.value)*(t.value))/100;
    console.log("On");
})