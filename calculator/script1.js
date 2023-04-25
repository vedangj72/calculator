// function accept the clicked value and returns to the textbox
function display(val){
    document.getElementById('result').value+=val;
    return val;
}

// function when user clicks = it solves the mathematical expession in the textbox and display the result into the textbox
function solve(){
    let x=document.getElementById('result').value
    let y=eval(x);
    document.getElementById('result').value=y;
    return y;
}
// function when C button is clicked it clears the textbox
function clearScreen(){
    document.getElementById('result').value=''
}