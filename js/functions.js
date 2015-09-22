function newScene(trigger) {

  var scrollHeight = $(trigger)[0].scrollHeight;
  return new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: scrollHeight / 2,
    reverse: true
  });
};

function newCloudScene(trigger) {
  var scrollHeight = $(trigger)[0].scrollHeight;
  return new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onLeave",
    duration: '200%',
    reverse: true
  });
}

function appear(el) {
  return TweenMax.to(el, 1, {
    opacity: 1
  })
};

function fade(el) {
  return TweenMax.to(el, 1, {
    opacity: 0
  })
};

function pinTitles(el, sceneArray) {
  for (var i = 0; i < el.length; i++) {
    sceneArray.push(new ScrollMagic.Scene({
        triggerElement: el[i],
        triggerHook: 'onEnter'
      })
      .setPin(el[i]));
  }
};

function parallaxClouds(el, opacity, movement) {
  return TweenMax.to(el, 1, {
    opacity: opacity,
    x: movement
  })
}

function removeTitlePin(el, sceneArray) {
  for (var i = 0; i < el.length; i++) {
    sceneArray.push(new ScrollMagic.Scene({
        triggerElement: el[i],
        triggerHook: 'onEnter'

      })
      .removePin(el[i]));
  }
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
  newCloudScene: newCloudScene,
  appear: appear,
  fade: fade,
  pinTitles: pinTitles,
  parallaxClouds: parallaxClouds,
  removeTitlePin: removeTitlePin,
  showProgress: showProgress
};