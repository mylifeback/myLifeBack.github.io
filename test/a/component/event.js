AFRAME.registerComponent('event', {
  init: function () {
    console.log ('event component init');
    this.el.sceneEl.addEventListener('click', this.onClick.bind(this));
  },

  onClick: function (e) {
    console.log ("clicked clicked ... ");
    
  },



  tick: function (time, timeDelta) {

    
    // console.log (time);
    // console.log (timeDelta);
  }
})