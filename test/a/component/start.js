// function kicked () {
//   console.log ('kicked');
// }

AFRAME.registerComponent('start', {

  init: function () {
    console.log ('start component init');
    this.el.sceneEl.addEventListener('click', this.onClick.bind(this));
    const start = document.createElement ('div');
    const outer = document.createElement ('div');
    outer.append(start);
    console.log(outer);
    
    start.outerHTML = "<div onclick=kicked() style='cursor: grab; color: red; border: solid red 2px; position: fixed; top: 50px; left 50px; backgroundColor: yellow; '>START</div>"
    document.body.append(outer);
  },

  onClick: function (e) {
    console.log ("start start ... ");
    // kicked ();
    
  },



})