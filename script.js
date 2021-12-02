document.addEventListener("keydown", function (event) {
    if(event.code == "KeyA") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/A.mp3";
        audio.play();
    } else if(event.code == "KeyS") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/S.mp3";
        audio.play();
    } else if(event.code == "KeyD") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/D.mp3";
        audio.play();
    } else if(event.code == "KeyF") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/F.mp3";
        audio.play();
    } else if(event.code == "KeyG") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/G.mp3";
        audio.play();
    } else if(event.code == "KeyH") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/H.mp3";
        audio.play();
    } else if(event.code == "KeyJ") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/J.mp3";
        audio.play();
    } else if(event.code == "KeyW") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/W.mp3";
        audio.play();
    } else if(event.code == "KeyE") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/E.mp3";
        audio.play();
    } else if(event.code == "KeyT") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/T.mp3";
        audio.play();
    } else if(event.code == "KeyY") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/Y.mp3";
        audio.play();
    } else if(event.code == "KeyU") {
        let audio = document.createElement("AUDIO");
        audio.src = "sounds/U.mp3";
        audio.play();
    } else {
        console.log("Wrong key is pressed");
    }
})