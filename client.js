


var header = document.getElementById('header');
console.log(header);
var dbRef = firebase.database().ref().child('header');

// Why can't we see these logs?!?
console.log('hi');
dbRef.on('value', function(snap) {
  console.log(snap);
  console.log('hi');

  header.innerText = snap.val();
});

var signIn = document.getElementById("signIn");
var signOut = document.getElementById("signOut");
console.log(signIn);

var provider = new firebase.auth.GoogleAuthProvider();

signIn.addEventListener('click', function() {
  console.log('clickin');
  firebase.auth().signInWithPopUp(provider).then(function(user) {
    if (user) {
      // dbRef.on('value', function(snap) {
      //   console.log(snap);
      //   header.innerText = snap.val();
      // });
    }
  });
});
