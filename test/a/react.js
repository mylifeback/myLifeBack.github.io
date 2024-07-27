AFRAME.registerComponent('react', {
  init: function () {
    console.log ('react component init');
    this.events = [controllerconnected, controllerdisconnected, buttonchanged, buttondown];
    for (evt in this.events){
      this.el.addEventListener(evt, this.listener);
    }
  },

  listener: function (e) {
    console.log (e.type + "type");
    console.log (e.target + "target");
    console.log (e.currenttarget + "current");
  },

  tick: function (time, timeDelta) {

    
    console.log (time);
    console.log (timeDelta);
  }
})