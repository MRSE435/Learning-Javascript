inputstring="";

function  getvalues(id) {
    inputs=document.getElementById(id).innerText;
    inputstring=inputstring+inputs;
    document.getElementsByClassName('screen')[0].innerText=inputstring;

}
function calculate() {
    if(document.getElementById('isqualto').innerText=="=")
    {
            let result=eval(inputstring);

    document.getElementsByClassName('screen')[0].innerText=result;

    }

    
}
function clearbutton(id)
{
    document.getElementsByClassName('screen')[0].innerText="";
    inputstring="";
}
function clearlast(id) {
    let lengths=inputstring.length;
    inputstring=inputstring.slice(0,-1);
    document.getElementsByClassName('screen')[0].innerText=inputstring;
}
