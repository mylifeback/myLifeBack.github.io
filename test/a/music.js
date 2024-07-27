AFRAME.registerComponent('music', {
  init: function () {
    console.log ('music component init');
    import './src/howler.min.js';

  },



  tick: function (time, timeDelta) {

    
    // console.log (time);
    // console.log (timeDelta);
  }
})