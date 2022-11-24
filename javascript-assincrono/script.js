setTimeout(function() {
  console.log('Time 1');
});


setTimeout(function() {
  console.log('Time 2');
},100);

console.log('Log 1');

setTimeout(function() {
  console.log('Time 3');
},50);

console.log('Log 2');


