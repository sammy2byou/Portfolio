function notWorking() {
    alert("No public view; not connected to database for back end to work ");
}

// Get all images elements
var squareImages = document.querySelectorAll("img");

// Function to set the height of the images to be the same as their width
function setSquareImagesHeight() {
    squareImages.forEach(function(image) {
        var containerWidth = image.parentElement.clientWidth;
        image.style.height = containerWidth + "px";
    });
}

window.addEventListener("load", setSquareImagesHeight);
window.addEventListener("resize", setSquareImagesHeight);
