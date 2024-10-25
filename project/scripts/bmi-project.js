const weightlabel = document.getElementById("weight-unit");
const heightlabel = document.getElementById("height-unit");
const bmivalue = document.getElementById("bmivalue");
const clasificationtext = document.getElementById("clasification");
let unit ="metric";

function units(){
    if (document.getElementById("metric").checked){
        weightlabel.textContent="kg.";
        heightlabel.textContent="cm.";
        unit ="metric";
    }
    else {
        weightlabel.textContent="lb.";
        heightlabel.textContent="in.";
        unit ="imperial";
       
    } 
}
function calculate(){

    let weight = parseInt(document.getElementById("weight").value)||0;
    let height = parseInt(document.getElementById("height").value)||0;
    let bmi;
    let clasification;

    if (unit=="metric"){
        height = height / 100;
        bmi = (weight / (height * height)).toFixed(1);
    }else{
        bmi = weight / (height * height);
        bmi = (bmi * 703).toFixed(1);
    }
    
    if (bmi >= 40) {
        clasification="Obesity Class III";
    }else if(bmi > 35 ){
        clasification="Obesity Class II";
    }else if(bmi > 30){
        clasification="Obesity Class I";
    }else if(bmi > 25 ){
        clasification="Overweight";
    }else if(bmi >= 18.5 ){
        clasification="Normal Weight";
    }else {
        clasification="Underweight";  
    }


    bmivalue.innerText= bmi;
    clasificationtext.innerText= clasification;
    // alert (bmi);
}




//footer content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// The formula is BMI = kg/m2;