'use strict';

const sentences = [
  { subject: 'Javascript', verb: 'is', object: 'great'},
  { subject: 'Elephants', verb: 'are', object: 'large'},
];

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences){
  say(s);
}
