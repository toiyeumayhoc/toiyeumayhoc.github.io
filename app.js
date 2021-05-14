const lightyellow = "#F8FCDA";
const palespringbud = "#E3E9C2";
const darkstategray = "#315555";
const lemonyellowcrayola = "#F9FBB2";
const silvercharlice = "#A5ABAF";
function openSkillDescription(index ) {
    const x = document.getElementById("skill-des-" + index);  
    if(x.style.display === "none" || x.style.display === ""){
        x.style.display = "block";  
        for(let i =1; i< 5; i++ ){
            if(i!==index){
                const other = document.getElementById("skill-des-" + i);  
                other.style.display = "none";  
            }
        }
    } else {
        x.style.display = "none";  
    }
      
}

function closeSkillDescription(index ) {
    const x = document.getElementById("skill-des-" + index);  
    x.style.display = "none";    
}