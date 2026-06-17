
const  increasebtn = document.getElementById(`increasebtn`);
const  resetbtn = document.getElementById(`resetbtn`);
const  decreasebtn = document.getElementById(`decreasebtn`);
const  labelcounterr = document.getElementById(`labelcounter`);
 
let count = 0;
increasebtn.onclick = function(){
    count++;
    labelcounterr.textContent = count;
}
resetbtn.onclick = function(){
   count=0;
   labelcounterr.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    labelcounterr.textContent = count;
}