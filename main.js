/** MOBILE  */

//Mobile First Area
//******************
var modalFirstRoom = document.getElementById('modal-first-room');
var roomClose = document.getElementById('modal-room');

//Mobile Second Area
//******************
var modalTable = document.getElementById('modal-table');
var tableClose = document.getElementById('modal-table_close');

//Mobile Third Area
//******************
var modalBathroom = document.getElementById('modal-bathroom');
var bathroomClose = document.getElementById('modal-bathroom_close');

//Mobile First Place
//******************
var modalFirstPlace = document.getElementById('modal-first-place');
var firstPlaceClose = document.getElementById('modal-first-place_close');

//Mobile Last Place
//******************
var modalLastPlace = document.getElementById('modal-last-place');
var lastPlaceClose = document.getElementById('modal-last-place_close');



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFirstRoom) {
    modalFirstRoom.style.display = "none";
  }
  if (event.target == modalTable) {
    modalTable.style.display = "none";
  }
  if (event.target == modalBathroom) {
    modalBathroom.style.display = "none";
  }
  if (event.target == modalFirstPlace) {
    modalFirstPlace.style.display = "none";
  }
  if (event.target == modalLastPlace) {
    modalLastPlace.style.display = "none";
  }
    
}

//Close
roomClose.onclick = () =>{
  modalFirstRoom.style.display = "none";
}
tableClose.onclick = ()=>{
  modalTable.style.display = "none";
}
bathroomClose.onclick = ()=>{
  modalBathroom.style.display = "none";
}
firstPlaceClose.onclick = ()=>{
  modalFirstPlace.style.display = "none";
}
lastPlaceClose.onclick = ()=>{
  modalLastPlace.style.display = "none";
}

//Open
function mFirstRoom(){
  modalFirstRoom.style.display = "block";
}
function mTable(){
  modalTable.style.display = "block";
}
function mBathroom(){
  modalBathroom.style.display = "block";
}
function mFirstPlace(){
  modalFirstPlace.style.display = "block";
}
function mLastPlace(){
  modalLastPlace.style.display = "block";
}


