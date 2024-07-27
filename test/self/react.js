AFRAME.registerComponent('react', {
  init: function () {
    console.log ('react component init');
    console.log (this.gamepads);
    console.log (this.gamepad);
    console.log (this.gamepad.axes);
    console.log (this.gamepad.axes[0]);
  },

  tick: function (time, timeDelta) {

    
    console.log (time);
    console.log (timeDelta);
  }
})