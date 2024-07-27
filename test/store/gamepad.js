AFRAME.registerComponent('gamepad', {
  init: function () {
    console.log ('gamepad component init');
    this.gamepads = navigator.getGamepads();
    this.gamepad = this.gamepads[1];
    if (!this.gamepad){
      return;
    }
    this.oldTime = this.gamepad.timestamp;
    this.gamepad = this.gamepads[1];
    console.log (this.gamepads);
    console.log (this.gamepad);
    console.log (this.gamepad.axes);
    console.log (this.gamepad.axes[0]);
  },

  tick: function (time, timeDelta) {
    this.gamepads = navigator.getGamepads();
    this.gamepad = this.gamepads[1];
    if (!this.gamepad){
      return;
    }
    this.newTime = this.gamepad.timestamp;
    if (this.newTime == this.oldTime){
      console.log('equal   '+this.newTime);
      return;
    }
    this.oldTime = this.newTime;
    console.log (this.gamepad);
    console.log (this.gamepad.axes[0]);
    console.log (time);
    console.log (timeDelta);
  }
})