
const o = {};

function hello (evt) {
  console.log(evt.type);
  console.log(this);
  world();
}


function world (){
  debugger;
}

const a_high = true;

window.addEventListener ('keydown', hello.bind(o));
debugger;
