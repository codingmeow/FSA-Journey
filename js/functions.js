function newScene(trigger) {

  var duration = $(trigger)[0].scrollHeight;
  return new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 'onEnter',
    duration: duration,
    reverse: true
  });
};

function newTitle(trigger) {
  var duration = $(trigger)[0].scrollHeight;
  return new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 'onEnter',
    duration: duration,
    reverse: true
  });
};

function wipeScene(el) {
  return new TimelineMax()
    .fromTo(el, 1, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Linear.easeNone
    }); // in from left

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

function textLeft(el) {
  return TweenMax.to(el, 1, {
    left: 0
  })
};

function textRight(el) {
  return TweenMax.to(el, 1, {
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
  newTitle: newTitle,
  wipeScene: wipeScene,
  appear: appear,
  fade: fade,
  textLeft: textLeft,
  textRight: textRight,
  showProgress: showProgress
};