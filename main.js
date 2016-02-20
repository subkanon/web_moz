var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'C:\Users\Dave\Documents\2016\FEB 2016\webSite_project_moz_dev\images\IMG_0018.JPG') {
		myImage.setAttribute ('src','C:\Users\Dave\Documents\2016\FEB 2016\webSite_project_moz_dev\images\IMG_0015.JPG');
	} else {
		myImage.setAttribute ('src','C:\Users\Dave\Documents\2016\FEB 2016\webSite_project_moz_dev\images\IMG_0018.JPG');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Trails are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Trails are cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
