AFRAME.registerComponent('gamepad', {
  init: function () {
    console.log ('gamepad component init');
    window.addEventListener('gamepadconnected', this.padconnected.bind(this));
    window.addEventListener('gamepaddisconnected', this.paddisconnected.bind(this));
    if (!this.gamepad){return;}
    this.oldTime = this.gamepad.timestamp;
  },

  padconnected: function (e) {
    this.gamepads = navigator.getGamepads();
    this.gamepad = this.gamepads[1];
    this.connected = true;
    if (!this.gamepad){return;}
    this.oldTime = this.gamepad.timestamp;
    console.log (this.connected);
  },

  paddisconnected: function (e) {
    this.connected = false;
    console.log ('pad disconnected');
  },

  tick: function (time, timeDelta) {
    if (!this.connected){return;}
    this.gamepads = navigator.getGamepads();
    this.gamepad = this.gamepads[1];
    if (!this.gamepad){return;}
    this.newTime = this.gamepad.timestamp;
    if (this.newTime == this.oldTime){return;}
    this.oldTime = this.newTime;

    this.testevent = new CustomEvent ('gamepad', {detail: this.gamepad});
    window.dispatchEvent(this.testevent);
  }
})