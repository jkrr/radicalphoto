//Home Page
var bg_change = document.getElementById("slider");
var txt_change = document.getElementById("naturetext");
var texttimer = setInterval(texttimer, 2500);
//Timed event
function texttimer() {
    bg_change.style.background = "#5A8919";
    txt_change.innerHTML = "Capturing Nature";
    txt_change.style.fontSize = "28px";
}
//Gallery
var hover_img = document.getElementById("hover_img");
var hover_img2 = document.getElementById("hover_img2");
var hover_img3 = document.getElementById("hover_img3");
var hover_img4 = document.getElementById("hover_img4");
var hover_img5 = document.getElementById("hover_img5");
var hover_img6 = document.getElementById("hover_img6");
var img_change = document.getElementById("big_image");
//Hover Events
hover_img.onmouseover = function () {
	img_change.src = "images/blue_dress.jpg";
};
hover_img2.onmouseover = function () {
	img_change.src = "images/boxer.jpg";
};
hover_img3.onmouseover = function () {
	img_change.src = "images/country_boy_relaxing.jpg";
};
hover_img4.onmouseover = function () {
	img_change.src = "images/eye.jpg";
};
hover_img5.onmouseover = function () {
	img_change.src = "images/ice_swim.jpg";
};
hover_img6.onmouseover = function () {
	img_change.src = "images/sitting.jpg";
};