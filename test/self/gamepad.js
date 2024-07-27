AFRAME.registerComponent('gamepad', {
  init: function () {
    console.log ('gamepad component init');
    this.gamepads = navigator.getGamepads();
    if (!gamepads) {
      return;
    }
    this.gamepad = gamepads[1];
    console.log (gamepad);
  },

  tick: function (time, timeDelta) {
    this.gamepads = navigator.getGamepads();
    if (!gamepads) {
      return;
    }
    this.gamepad = gamepads[1];
    console.log (gamepad);
    console.log (time);
    console.log (timeDelta);
  }
})