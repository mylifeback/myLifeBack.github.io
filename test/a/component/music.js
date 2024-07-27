AFRAME.registerComponent('music', {
  init: function () {
    console.log ('music component init');
    import ('./src/howler.min.js');


    this.part = 'fourth';
    // window.addEventListener ('gamepad', this.play.bind(this));
    // console.log ('listener added');

    this.el.addEventListener('click', this.onClick.bind(this));
  },

  onClick: function (e) {
    console.log ("clicked clicked");
    this.sound = new Howl({
      src: ['./src/world.mp3'],
      sprite: {
          first: [2000, 2000],
          second: [4000, 1000],
          third: [5000, 3000],
          fourth: [8000, 5000]
      }
    });
    this.sound.play(this.part);
  },

  // play: function () {

  //     this.sound.play(this.part);
  //     console.log('is it playing??  ' + this.part);
  
  // },

  tick: function (time, timeDelta) {

    
    // console.log (time);
    // console.log (timeDelta);
  }
})