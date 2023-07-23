const mainHeading = document.querySelectorAll(".animate-from-bottom")

// Animates in from the bottom on page load
mainHeading.forEach(object => {
    gsap.from(object, {
        y:250,
        opacity:-10,
        duration:1,
    })
})

function toggleDiv() {
    var div = document.getElementById("myDiv");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}