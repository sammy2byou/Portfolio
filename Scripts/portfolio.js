//JS for all pages
// Get all images elements
var squareImages = document.querySelectorAll(".square");
// Function to set the height of the images to be the same as their width
function setSquareImagesHeight() {
    squareImages.forEach(function(image) {
        var containerWidth = image.parentElement.clientWidth;
        image.style.height = containerWidth + "px";
    });
}

window.addEventListener("load", setSquareImagesHeight);
window.addEventListener("resize", setSquareImagesHeight);
