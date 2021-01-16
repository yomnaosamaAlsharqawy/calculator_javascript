// var num = [];
var equation = [];

function perc() {
    var value = document.getElementById("eq").innerHTML;
    value = value / 100;
    document.getElementById("eq").innerHTML = value;
}
function removeZero() {
    var value = document.getElementById("res").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("res").innerHTML = value;
    }
}

function fordisplay(output){
    if(equation[equation.length-1]=="=" && output != "/" && output != "*" && output != "+" && output != "-" && output != "%"){
        equation.push(Number(num));
        forclear();
        removeZero();
        var num = document.getElementById("res").innerHTML;
        document.getElementById("res").innerHTML += output;
        equation.push(Number(num));
    }
    else{
    removeZero();
    var num = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML += output;
    if(output == "/" || output == "*" || output == "+" || output == "-" || output == "%"){
        equation.push(Number(num));
        document.getElementById("res").innerHTML=""
        document.getElementById("eq").innerHTML += (num+output);
        equation.push(output);
    }
    if(output == "="){
        document.getElementById("eq").innerHTML += num;
        equation.push(Number(num));
        equation.push(output);
        solve();
    }
}

}

function solve() {
    removeZero()
    var eq = document.getElementById("eq").innerHTML;
    var solved = eval(eq);
    document.getElementById('res').innerHTML = solved;
    document.getElementById("eq").innerHTML="";
}

function forclear() {
    document.getElementById("res").innerHTML = "0";
    document.getElementById("eq").innerHTML = "";
}