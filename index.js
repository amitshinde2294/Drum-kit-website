


$("button").click(function (event) {

    const clickedEvent = event.target.innerHTML;
    switch (clickedEvent) {
        case "w":
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(`Sorry, we are out of ${keyPressed}.`);
    }

});



$("Button").keypress((value) => {

    const keyPressed = value.key;
    switch (keyPressed) {
        case "w":
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(`Sorry, we are out of ${keyPressed}.`);
    }

});



// Using normal java script to DOM manipulation.

// document.querySelectorAll("button").forEach((value) => {
//     value.addEventListener("click", function (clicked) {
//         // console.log(clicked.target.innerHTML);
//         const clickedEvent = clicked.target.innerHTML;
//         switch (clickedEvent) {
//             case "w":
//                 var audio = new Audio("/sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio("/sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio("/sounds/snare.mp3");
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio("/sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio("/sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio("/sounds/tom-3.mp3");
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio("/sounds/tom-4.mp3");
//                 audio.play();
//                 break;
//             default:
//                 console.log(`Sorry, we are out of ${keyPressed}.`);
//         }

//     });
// });

// document.querySelectorAll("button").forEach((value) => {
//     value.addEventListener("keypress", function (pressed) {
//         // console.log(pressed.key);
//         const keyPressed = pressed.key;
//         switch (keyPressed) {
//             case "w":
//                 var audio = new Audio("/sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio("/sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio("/sounds/snare.mp3");
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio("/sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio("/sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio("/sounds/tom-3.mp3");
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio("/sounds/tom-4.mp3");
//                 audio.play();
//                 break;
//             default:
//                 console.log(`Sorry, we are out of ${keyPressed}.`);
//         }

//     });
// });



