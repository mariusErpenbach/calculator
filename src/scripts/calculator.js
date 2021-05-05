function addInput(e){
    e.preventDefault();
    input = document.getElementById("input");
    newInput = e.submitter.innerHTML;
    input.innerHTML += `${newInput}`

}
function solve(e){
    e.preventDefault();
    
    task=parseInt(document.getElementById("input").innerHTML);
    
    console.log( task);
    document.getElementById("input").innerHTML=`${task}`;
    
}
document.querySelector("form").addEventListener("submit", addInput);
document.querySelector("#equalButton").addEventListener("click", solve);