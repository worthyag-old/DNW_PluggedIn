/**
 * hideNull function |
 *  hides all null values, so only relevant data is shown to the user
 */ 
let hideNull = () => {
    let nullValues = document.querySelectorAll(".toShow");

    for (let i = 0; i < nullValues.length; i++) {
        console.log(`${nullValues[i].innerHTML}`);
        if (nullValues[i].innerHTML == "") {
            console.log("I am null");
            nullValues[i].parentElement.style.display = "none";
        }
    }
}