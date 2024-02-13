function showPopup(imageSrc) {
    var popup = document.getElementById("popupContainer");
    var popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "none";
}
