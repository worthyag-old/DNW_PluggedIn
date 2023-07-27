let typeForm = () => {
    // Pick device
    const deviceType = document.querySelector("#device_type");
    const selectedType = deviceType.value;

    // Get classes
    const chSystem = document.querySelectorAll(".ch-system");
    const curtainsBlinds = document.querySelectorAll(".curtains-blinds");
    const lights = document.querySelectorAll(".lights");
    const avSystem = document.querySelectorAll(".av-system");
    const kitchen = document.querySelectorAll(".kitchen");

    // Cooling and heating system
    if (selectedType == "cooling and heating systems") {
        // Testing
        console.log(`You clicked cooling and heating systems.`);
        // Remove all initial form options
        for (let i = 0; i < curtainsBlinds.length; i++){
            curtainsBlinds[i].style.display = "none";
        }

        for (let i = 0; i < lights.length; i++){
            lights[i].style.display = "none";
        }

        for (let i = 0; i < avSystem.length; i++){
            avSystem[i].style.display = "none";
        }

        for (let i = 0; i < kitchen.length; i++){
            kitchen[i].style.display = "none";
        }
        // Add specific form options
        for (let i = 0; i < chSystem.length; i++){
            chSystem[i].style.display = "block";
            chSystem[i].style.marginLeft = "45px";
        }
    }
    // Curtains and blinds
    else if (selectedType == "curtains and blinds") {
        // Testing
        console.log(`You clicked curtains and blinds.`);
        // Remove all initial form options
        for (let i = 0; i < chSystem.length; i++){
            chSystem[i].style.display = "none";
        }

        for (let i = 0; i < lights.length; i++){
            lights[i].style.display = "none";
        }

        for (let i = 0; i < avSystem.length; i++){
            avSystem[i].style.display = "none";
        }

        for (let i = 0; i < kitchen.length; i++){
            kitchen[i].style.display = "none";
        }
        // Add specific form options
        for (let i = 0; i < curtainsBlinds.length; i++){
            curtainsBlinds[i].style.display = "block";
            curtainsBlinds[i].style.marginLeft = "45px";
        }
    }
    // Lighting
    else if (selectedType == "lighting") {
        // Testing
        console.log(`You clicked lighting.`);
        // Remove all initial form options
        for (let i = 0; i < chSystem.length; i++){
            chSystem[i].style.display = "none";
        }

        for (let i = 0; i < curtainsBlinds.length; i++){
            curtainsBlinds[i].style.display = "none";
        }

        for (let i = 0; i < avSystem.length; i++){
            avSystem[i].style.display = "none";
        }

        for (let i = 0; i < kitchen.length; i++){
            kitchen[i].style.display = "none";
        }
        // Add specific form options
        for (let i = 0; i < lights.length; i++){
            lights[i].style.display = "block";
            lights[i].style.marginLeft = "45px";
        }
    }
    // Audio Visual Systems
    else if (selectedType == "audio-visual systems") {
        // Testing
        console.log(`You clicked audio-visual systems.`);
        // Remove all initial form options
        for (let i = 0; i < chSystem.length; i++){
            chSystem[i].style.display = "none";
        }

        for (let i = 0; i < curtainsBlinds.length; i++){
            curtainsBlinds[i].style.display = "none";
        }

        for (let i = 0; i < lights.length; i++){
            lights[i].style.display = "none";
        }

        for (let i = 0; i < kitchen.length; i++){
            kitchen[i].style.display = "none";
        }
        // Add specific form options
        for (let i = 0; i < avSystem.length; i++){
            avSystem[i].style.display = "block";
            avSystem[i].style.marginLeft = "45px";
        }
    }
    // Kitchen appliances
    else if (selectedType == "kitchen appliances") {
        // Testing
        console.log(`You clicked kitchen appliances.`);
        // Remove all initial form options
        for (let i = 0; i < chSystem.length; i++){
            chSystem[i].style.display = "none";
        }

        for (let i = 0; i < curtainsBlinds.length; i++){
            curtainsBlinds[i].style.display = "none";
        }

        for (let i = 0; i < lights.length; i++){
            lights[i].style.display = "none";
        }

        for (let i = 0; i < avSystem.length; i++){
            avSystem[i].style.display = "none";
        }
        // Add specific form options
        for (let i = 0; i < kitchen.length; i++){
            kitchen[i].style.display = "block";
            kitchen[i].style.marginLeft = "45px";
        }
    }
};

// For creating ranges
// Temperature slider
let tempSlider = document.getElementById("temp");
let tempOutput = document.getElementById("temp-label");
tempOutput.innerHTML = tempSlider.value; // Displays the default slider value

// Updates the current slider value
tempSlider.oninput = function() {
    tempOutput.innerHTML = this.value;
}

// Speed slider
let speedSlider = document.getElementById("speed");
let speedOutput = document.getElementById("speed-label");
speedOutput.innerHTML = speedSlider.value; // Displays the default slider value

// Updates the current slider value
speedSlider.oninput = function() {
    speedOutput.innerHTML = this.value;
}

// Brightness slider
let brightnessSlider = document.getElementById("brightness");
let brightnessOutput = document.getElementById("brightness-label");
brightnessOutput.innerHTML = brightnessSlider.value; // Displays the default slider value

// Updates the current slider value
brightnessSlider.oninput = function() {
    brightnessOutput.innerHTML = this.value;
}

// Volume slider
let volumeSlider = document.getElementById("volume");
let volumeOutput = document.getElementById("volume-label");
volumeOutput.innerHTML = volumeSlider.value; // Displays the default slider value

// Updates the current slider value
volumeSlider.oninput = function() {
    volumeOutput.innerHTML = this.value;
}

