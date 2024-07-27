AFRAME.registerComponent('music', {
  init: function () {
    console.log ('music component init');
    import ('./src/howler.min.js');

    this.sound = new Howl({
      src: ['./src/world.mp3'],
      sprite: {
          first: [2000, 2000],
          second: [4000, 1000],
          third: [5000, 3000],
          fourth: [8000, 5000]
      }
    });

    window.addEventListener ('gamepad', this.play('fourth').bind(this));
    console.log ('listener added');
  },

  play: function (part) {

      this.sound.play(part);
      console.log('is it playing??  ' + part);
  
  },

  tick: function (time, timeDelta) {

    
    // console.log (time);
    // console.log (timeDelta);
  }
})