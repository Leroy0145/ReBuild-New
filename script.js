function showPopup(imageSrc, title, description) {
    var popup = document.getElementById("popupContainer");
    var popupImage = document.getElementById("popupImage");
    var popupTitle = document.getElementById("popupTitle");
    var popupDescription = document.getElementById("popupDescription");
  
    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupDescription.textContent = description;
  
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "none";
  }