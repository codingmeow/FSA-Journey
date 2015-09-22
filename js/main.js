var utilities = require('./functions');

$(document).ready(function() {

  var controller = new ScrollMagic.Controller();

  var allScenes = [];
  var progressScenes = [];

  var titleScenes = $("div.title").get(); // title
  var nonTitleScenes = $('.scene').not('.title').get(); //non-title

  utilities.pinTitles(titleScenes, allScenes);
  utilities.removeTitlePin(nonTitleScenes, allScenes);

  // SCENE DECISION

  var tween1 = utilities.appear('#img1');
  var scene1 = utilities.newScene('#scene1').setTween(tween1);
  progressScenes.push(scene1);

  tween1 = utilities.fade('#img1');
  var scene1a = utilities.newScene('#scene2').setTween(tween1);
  progressScenes.push(scene1a);

  // SCENE PREP

  var tween2 = utilities.appear('#img2a');
  var scene2 = utilities.newScene('#scene3').setTween(tween2);
  progressScenes.push(scene2);

  var t2a = new TimelineMax();
  var tween2a = utilities.appear('#img2b');
  tween2 = utilities.fade('#img2a');
  t2a.add(tween2a).add(tween2);
  var scene2a = utilities.newScene('#scene4').setTween(t2a);

  var t2b = new TimelineMax();
  tween2a = utilities.fade('#img2b');
  var tween2b = utilities.appear('#img2c');
  t2b.add(tween2b).add(tween2a);
  var scene2b = utilities.newScene('#scene5').setTween(t2b);

  tween2b = utilities.fade('#img2c');
  var scene2c = utilities.newScene('#scene6').setTween(tween2b);

  // SCENE ACCEPTANCE

  // cloud scenes
  var cloud1 = utilities.parallaxClouds('#cloud1', 0.3, '5%');
  var scene3C1 = utilities.newCloudScene('#scene6').setTween(cloud1);

  var cloud2 = utilities.parallaxClouds('#cloud2', 0.5, '5%');
  var scene3C2 = utilities.newCloudScene('#scene6').setTween(cloud2);

  var cloud3 = utilities.parallaxClouds('#cloud3', 1, '15%');
  var scene3C3 = utilities.newCloudScene('#scene6').setTween(cloud3);

  var cloud4 = utilities.parallaxClouds('#cloud4', 1, '20%');
  var scene3C4 = utilities.newCloudScene('#scene6').setTween(cloud4);

  var cloudsFade = utilities.fade('.cloud');
  var scene3C5 = utilities.newScene('#scene7').setTween(cloudsFade);


  var tween3a = utilities.appear('#img3');
  var scene3 = utilities.newScene('#scene6a').setTween(tween3a);
  progressScenes.push(scene3);
  tween3a = utilities.fade('#img3');
  var scene3a = utilities.newScene('#scene7').setTween(tween3a);

  // SCENE FOUNDATIONS

  var tween4a = utilities.appear('#img4');
  var scene4 = utilities.newScene('#scene7a').setTween(tween4a);
  progressScenes.push(scene4);

  // SCENE ICE CREAM SOCIAL

  var t4 = new TimelineMax();
  tween4a = utilities.fade('#img4');
  var tween5a = utilities.appear('#img5');
  t4.add(tween4a).add(tween5a);
  var scene5 = utilities.newScene('#scene8').setTween(t4);
  progressScenes.push(scene5);

  tween5a = utilities.fade('#img5');
  var scene5a = utilities.newScene('#scene9').setTween(tween5a);

  // SCENE JUNIOR PHASE

  // lectures
  var tween6a = utilities.appear('#img6');
  var scene6 = utilities.newScene('#scene10').setTween(tween6a);
  progressScenes.push(scene6);

  // workshops
  var t6 = new TimelineMax();
  tween6a = utilities.fade('#img6');
  var tween6b = utilities.appear('#img7');
  t6.add(tween6a).add(tween6b);
  var scene6a = utilities.newScene('#scene11').setTween(t6);
  progressScenes.push(scene6a);

  tween6b = utilities.fade('#img7');
  var scene6b = utilities.newScene('#scene12').setTween(tween6b);

  // SCENE REVIEW WEEK

  // assessments
  var tween7 = utilities.appear('#img2d');
  var scene7 = utilities.newScene('#scene13').setTween(tween7);
  progressScenes.push(scene7);

  // not so hard
  var t7a = new TimelineMax();
  tween7 = utilities.fade('#img2d');
  var tween7b = utilities.appear('#img8');
  t7a.add(tween7).add(tween7b);
  var scene7a = utilities.newScene('#scene14').setTween(t7a);
  progressScenes.push(scene7a);

  // relax
  var t7b = new TimelineMax();
  tween7b = utilities.fade('#img8');
  var tween7d = utilities.appear('#img9')
  t7b.add(tween7b).add(tween7d);
  var scene7b = utilities.newScene('#scene15').setTween(t7b);

  // hackathons
  var t7c = new TimelineMax();
  tween7d = utilities.fade('#img9');
  var tween7f = utilities.appear('#img10');
  t7c.add(tween7d).add(tween7f);
  var scene7c = utilities.newScene('#scene16').setTween(t7c);
  progressScenes.push(scene7c);

  tween7f = utilities.fade('#img10');
  var scene7d = utilities.newScene('#scene17').setTween(tween7f);


  // SCENE SENIOR PHASE

  // projects
  var tween8 = utilities.appear('#img11');
  var scene8 = utilities.newScene('#scene18').setTween(tween8);
  progressScenes.push(scene8);

  // REACTO
  var t8a = new TimelineMax();
  tween8 = utilities.fade('#img11');
  var tween8b = utilities.appear('#img12');
  t8a.add(tween8).add(tween8b);
  var scene8a = utilities.newScene('#scene19').setTween(t8a);
  progressScenes.push(scene8a);

  tween8b = utilities.fade('#img12');
  var scene8b = utilities.newScene('#scene20').setTween(tween8b);

  // SCENE HIRING DAY

  // demos
  var tween9 = utilities.appear('#img13');
  var scene9 = utilities.newScene('#scene21').setTween(tween9);
  progressScenes.push(scene9);

  // round robin interviews
  var t9a = new TimelineMax();
  tween9 = utilities.fade('#img13');
  var tween9b = utilities.appear('#img14');
  t9a.add(tween9).add(tween9b);
  var scene9a = utilities.newScene('#scene22').setTween(t9a);
  progressScenes.push(scene9a);

  tween9b = utilities.fade('#img14');
  var scene9b = utilities.newScene('#scene23').setTween(tween9b);

  // SCENE GRADUATION

  var tween10 = utilities.appear('#img15');
  var scene10 = utilities.newScene('#scene24').setTween(tween10);
  progressScenes.push(scene10);

  tween10 = utilities.fade('#img15');
  var scene10a = utilities.newScene('#scene25').setTween(tween10);

  // SCENE FLIGHT
  var tween11 = utilities.appear('#img16');
  var scene11 = utilities.newScene('#scene26').setTween(tween11);
  progressScenes.push(scene11);

  tween11 = utilities.fade('#img16');
  var scene11a = utilities.newScene('#scene27').setTween(tween11);

  // SCENE LANDING A JOB
  var tween12 = utilities.appear('#img17');
  var scene12 = utilities.newScene('#scene28').setTween(tween12);
  progressScenes.push(scene12);

  tween12 = utilities.fade('#img17');
  var scene12a = utilities.newScene('#scene29').setTween(tween12);

  // ADDING SCENES TO CONTROLLER

  allScenes = [scene1, scene1a, scene2, scene2a, scene2b, scene2c, scene3, scene3C1, scene3C2, scene3C3, scene3C4, scene3C5, scene3a, scene4, scene5, scene5a, scene6, scene6a, scene6b, scene7, scene7a, scene7b, scene7c, scene7d, scene8, scene8a, scene8b, scene9, scene9a, scene9b, scene10, scene10a, scene11, scene11a, scene12, scene12a]
  utilities.showProgress(progressScenes);
  controller.addScene(allScenes);

})