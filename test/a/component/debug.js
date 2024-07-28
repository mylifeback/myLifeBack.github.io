
const o = {};

function hello (e) {
  console.log(e.type);
  console.log(this);
  debugger;
}



const a_high = true;

window.addEventListener ('keydown', hello.bind(o));

