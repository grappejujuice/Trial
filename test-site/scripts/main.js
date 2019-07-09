var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zouk.png') {
      myImage.setAttribute ('src','images/leopard.png');
    } else {
      myImage.setAttribute ('src','images/zouk.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Do you want to zouk, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Do you want to zouk, ' + storedName ;
}

myButton.onclick = function() {
  setUserName();
}