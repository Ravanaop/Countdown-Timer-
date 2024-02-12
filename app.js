const endDate="12 February 2024 7:00: PM"

document.getElementById("end-date").innerText=endDate;
const inputs =document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate);
    const now =new Date()
    console.log(end);
    console.log(now);
    const diff=(end-now)/1000;
    
    if(diff<0) return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

    //convert into days;
}

clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)