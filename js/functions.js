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
  })
};

function fade(el) {
  return TweenMax.to(el, 1, {
    opacity: 0
  })
};

function textLeft(el) {
  return TweenMax.to(el, 5, {
    left: 0
  }, -1)
};

function textRight(el) {
  return TweenMax.to(el, 5, {
    right: 0
  }, -1)
};

module.exports = {
  newScene: newScene,
  appear: appear,
  fade: fade,
  textLeft: textLeft,
  textRight: textRight
};