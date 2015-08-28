function newScene(trigger) {

  var duration = $(trigger)[0].scrollHeight;
  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: duration / 4,
    reverse: true
  })
  return scene;
};

function appear(el) {
  return TweenMax.to(el, 1, {
    opacity: 1
  }, -1)
};

function fade(el) {
  return TweenMax.to(el, 1, {
    opacity: 0
  }, -1)
};

function textLeft(el) {
  return TweenMax.to(el, 5, {
    left: 0
  })
};

function textRight(el) {
  return TweenMax.to(el, 5, {
    right: 0
  })
};

function showProgress(scenes) {
  scenes.map(function(scene) {
    scene.on('start', function(el) {
      var direction = el.target.controller().info('scrollDirection');
      if (direction === 'FORWARD') {
        $('.books').css('bottom', "+=22px");
      } else {
        $('.books').css('bottom', "-=22px");
      }
    });
  })
}

module.exports = {
  newScene: newScene,
  appear: appear,
  fade: fade,
  textLeft: textLeft,
  textRight: textRight,
  showProgress: showProgress
};