AFRAME.registerComponent('react', {
  init: function () {
    console.log ('react component init');
    this.evts = ['controllerconnected', 'controllerdisconnected', 'buttonchanged', 'buttondown', 'clicked', 'gamepad'];
    // console.log (this.evts);
    for (evt in this.evts){
      window.addEventListener(this.evts[evt], this.listenor.bind(this));
      // console.log (this.evts[evt]);
    }

  },

  listenor: function (e) {
    switch (e.type) {
      case 'gamepad':
        // console.log (this.el);
        // console.log (e.detail);
        // console.log (Object.keys(e.detail));
        console.log (e.detail.axes[0]);
        break;
    
      default:
        console.log ('listenor triggered but events not registered');
        break;
    }
    // console.log (e.type + "type");
    // console.log (e.target + "target");
    // console.log (e.currenttarget + "current");
    // console.log (this.el);
  },

  tick: function (time, timeDelta) {

    
    // console.log (time);
    // console.log (timeDelta);
  }
})