$(document).ready(function(){
	changeImg(5);
});
function changeImg(imgNumber)	{
	var myImages = ["img/page5a.png", "img/page5b.png", "img/page5c.png"]; 
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.getElementById("download").style.backgroundImage  = 'url('+myImages[newImgNumber]+')';
}