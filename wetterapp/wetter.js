

// closeBtn
function backToStartseite(){
    console.log("Wechsel auf die Startseite geklickt");
    window.location.href = "../index.html";
}
document.getElementById("closeBtn").addEventListener("click", () => {
    backToStartseite();
})