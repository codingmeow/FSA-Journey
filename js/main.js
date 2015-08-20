var $ = require('jquery');
var tweenmax = require('gsap');
// var scrollmagic = require('scrollmagic');

function addScene(trigger) {

  var duration = $(trigger)[0].scrollHeight;
  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: duration / 4
  })
  return scene;
}

$(document).ready(function() {

  var controller = new ScrollMagic.Controller();

  // SCENE ONE

  var t1 = new TimelineMax();

  var tween1 = TweenMax.to('#img1', 0.5, {
    opacity: 1
  });
  var tween2 = TweenMax.to('#text1', 2, {
    left: 0
  })

  t1.add(tween2).add(tween1);

  var scene1 = addScene('#scene1').setTween(t1);

  // SCENE TWO

  var t2 = new TimelineMax();

  tween1 = TweenMax.to('#img1', 0.25, {
    opacity: 0
  });

  var scene2 = addScene('#scene2').setTween(tween1);

  // SCENE THREE

  var tween3 = TweenMax.to('#img2', 0.5, {
    opacity: 1
  });

  var scene3 = addScene('#scene3').setTween(tween3);

  var fade1 = TweenMax.to('#img2', 0.5, {
    opacity: 0
  });

  var scene4 = addScene('#scene6').setTween(fade1);

  // ADDING SCENES

  controller.addScene([scene1, scene2, scene3, scene4]);

})