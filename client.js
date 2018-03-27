
var header = document.getElementById('header');

var dbRef = firebase.database().ref().child('header');

dbRef.on('value', function(snap) {
  console.log(snap);
  header.innerText = snap.val();
});
