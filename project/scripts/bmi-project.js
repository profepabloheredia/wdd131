const weightlabel = document.getElementById("weight-unit");
const heightlabel = document.getElementById("height-unit");
const weightbox = document.getElementById("weight");
const heightbox = document.getElementById("height");
const bmivalue = document.getElementById("bmivalue");
const clasificationtext = document.getElementById("clasification");
const results = document.getElementById("results");
let unit ="metric";
let bmi;


function units(){
    let weight = parseInt(document.getElementById("weight").value)||0;
    let height = parseInt(document.getElementById("height").value)||0;

    if (document.getElementById("metric").checked){
        weightlabel.textContent="kg.";
        heightlabel.textContent="cm.";
        
        if ((weight!=0) && (unit=="imperial")){weightbox.value = (weight/ 2.20462).toFixed();} //convert the typed value to k
        if ((height!=0) && (unit=="imperial")){heightbox.value= (height * 2.54).toFixed();} //convert the typed value to cm
        unit ="metric";   
        
    }
    else {
        weightlabel.textContent="lb.";
        heightlabel.textContent="in.";
        
        if ((weight!=0) && (unit=="metric")){weightbox.value = (weight * 2.20462).toFixed();} //convert the typed value to lbg
        if ((height!=0) && (unit=="metric")){heightbox.value = (height / 2.54).toFixed();} //convert the typed value to inches
        unit ="imperial";
    } 
}
function calculate(){
    
    let weight = parseInt(document.getElementById("weight").value)||0;
    let height = parseInt(document.getElementById("height").value)||0;
    
    let clasification;
    if (weight && height !=0){

        if (unit=="metric"){
            height = height / 100;
            bmi = (weight / (height * height)).toFixed(1);
        }else{
            bmi = weight / (height * height);
            bmi = (bmi * 703).toFixed(1);
        }
        if (bmi >= 40) {
            clasification="Obesity Class III";
            results.style.background="#820e11";
            results.style.color="white";

        }else if(bmi > 35 ){
            clasification="Obesity Class II";
            results.style.background="#e85e3f";
            results.style.color="white";
        }else if(bmi > 30){
            clasification="Obesity Class I";
            results.style.background="#ee8260";
            results.style.color="black";
        }else if(bmi > 25 ){
            clasification="Overweight";
            results.style.background="#f4c983";
            results.style.color="white";
        }else if(bmi >= 18.5 ){
            clasification="Normal Weight";
            results.style.background="#a0b965";
            results.style.color="black";
        }else {
            clasification="Underweight";  
            results.style.background="#e6e1ee";
            results.style.color="black";
        }

        // if (bmi >= 40) {
        //     clasification="Obesity Class III";
        //     results.style.background="darkred";
        //     results.style.color="white";

        // }else if(bmi > 35 ){
        //     clasification="Obesity Class II";
        //     results.style.background="red";
        //     results.style.color="white";
        // }else if(bmi > 30){
        //     clasification="Obesity Class I";
        //     results.style.background="orange";
        //     results.style.color="black";
        // }else if(bmi > 25 ){
        //     clasification="Overweight";
        //     results.style.background="orange";
        //     results.style.color="white";
        // }else if(bmi >= 18.5 ){
        //     clasification="Normal Weight";
        //     results.style.background="lightgreen";
        //     results.style.color="black";
        // }else {
        //     clasification="Underweight";  
        //     results.style.background="lightblue";
        //     results.style.color="black";
        // }

        bmivalue.innerText= bmi;
        clasificationtext.innerText= clasification;
        window.localStorage.setItem("bmi", bmi);
        
    }
    
        // alert (bmi);
}
function get_bmi() {
   bmi= window.localStorage.getItem("bmi")||0;
   const bmivalue2 = document.getElementById("bmivalue2");
    bmivalue2.innerText=bmi
    alert(bmi);

}
//footer content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// The formula is BMI = kg/m2;

//https://www.truthaboutweight.global/global/en/managing-your-weight/whats-your-body-mass-index-bmi/bmi-result-obesity-I.html?bmiVal=33.33&classification=truthaboutweight%3Ataxonomy%2Fbmi%2Ftype%2Fobesity-i#what-does-this-mean-for-you