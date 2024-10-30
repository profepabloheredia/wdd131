window.onload = function loadbmi(){
    const bmi= window.localStorage.getItem("bmi")||0;
    const bmivalue = document.getElementById("bmi-value");
    bmivalue.innerText=bmi;
    
    const bmiBlock = document.querySelector('.bmi-block');
    
    bmivalue.style.color=window.localStorage.getItem("text-color")||"";
    bmivalue.style.background=window.localStorage.getItem("background-color")||"";
    
    if (bmi==0){
        bmiBlock.style.display="none";
    }
    const diseases = [
        "Type II diabetes",
        "High blood sugar levels",
        "High cholesterol levels",
        "High blood pressure",
        "Infertility",
        "Depression and anxiety",
        "Coronary heart disease like heart attack",
        "Dyslipidemia",
        "Metabolic Dysfunction-associated Steatohepatitis (MASH) / Metabolic Dysfunction-associated Steatotic Liver Disease (MASLD)",
        "Gastroesophageal reflux disease (GERD)",
        "Metabolic syndrome (MetS)",
        "Urinary incontinence",
        "Obstructive sleep apnea and breathing problems",
        "Chronic kidney disease",
        "Various types of cancer: including but not limited to - breast, colon, endometrial, oesophageal, kidney, ovarian, and pancreatic cancer",
        "Knee osteoarthritis",
        "Gallstone disease",
        "Thrombosis",
        "Gout",
        "Stroke" 
    ];
    createListDiseases(diseases);
}

// *************** main function for creating linst **************
function createListDiseases (diseases){
    document.getElementById("diseases").innerHTML="";// Clear the container
    let orderedList = document.createElement('ol'); 
    diseases.forEach(disease =>{
    let name = document.createElement('li');
    name.textContent = disease;
    orderedList.appendChild(name);
    document.getElementById("diseases").appendChild(orderedList);
  });
}
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

    