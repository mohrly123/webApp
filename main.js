// btnWetter


// Function to change to page WETTERAPP
function changeToWeather(){
    console.log("Seitenwechsel zur WetterApp");
    window.location.href = "./wetterapp/wetter.html"
}


// Eventlistener der die Funktion changeToWeather aufruft und auf die nächste Seite linkt
document.getElementById("btnWetter").addEventListener("click", () => {
    changeToWeather();
})