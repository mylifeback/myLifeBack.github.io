AFRAME.registerComponent('react', {
  init: function () {
    console.log ('react component init');
    this.events = [gamepadconnected, gamepaddisconnected];
    for (evt in this.events){
      this.el.addEventListener(evt, this.listener);
    }
  },

  this.listener = function (e) {
    console.log (e.type + "type");
    console.log (e.target + "target");
    console.log (e.currenttarget + "current");
  },

  tick: function (time, timeDelta) {

    
    console.log (time);
    console.log (timeDelta);
  }
})