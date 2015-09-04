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

  var t1 = new TimelineMax();

  var tween1 = utilities.appear('#img1');
  var tween1a = utilities.appear('#text1');
  t1.add(tween1a).add(tween1);
  var scene1 = utilities.newScene('#scene1').setTween(t1);
  progressScenes.push(scene1);

  var t1a = new TimelineMax();
  tween1a = utilities.fade('#text1')
  tween1 = utilities.fade('#img1');
  t1a.add(tween1a).add(tween1);
  var scene1a = utilities.newScene('#scene2').setTween(t1a);
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

  var t2 = new TimelineMax();
  var tween3 = utilities.textLeft('#text2');
  var tween3a = utilities.appear('#img3');
  t2.add(tween3).add(tween3a);
  var scene3 = utilities.newScene('#scene6a').setTween(t2);
  progressScenes.push(scene3);
  tween3 = utilities.fade('#img3');
  var scene3a = utilities.newScene('#scene7').setTween(tween3);

  // SCENE FOUNDATIONS

  var t3 = new TimelineMax();
  var tween4 = utilities.textLeft('#text3');
  var tween4a = utilities.appear('#img4');
  t3.add(tween4).add(tween4a);
  var scene4 = utilities.newScene('#scene7a').setTween(t3);
  progressScenes.push(scene4);

  // SCENE ICE CREAM SOCIAL

  var t4 = new TimelineMax();
  tween4a = utilities.fade('#img4');
  var tween5 = utilities.textLeft('#text4');
  var tween5a = utilities.appear('#img5');
  t4.add(tween4a).add(tween5).add(tween5a);
  var scene5 = utilities.newScene('#scene8').setTween(t4);
  progressScenes.push(scene5);

  tween5 = utilities.fade('#img5');
  var scene5a = utilities.newScene('#scene9').setTween(tween5);

  // SCENE JUNIOR PHASE

  // lectures
  var t5 = new TimelineMax();
  var tween6 = utilities.textLeft('#text5');
  var tween6a = utilities.appear('#img6');
  t5.add(tween6).add(tween6a);
  var scene6 = utilities.newScene('#scene10').setTween(t5);
  progressScenes.push(scene6);

  // workshops
  var t6 = new TimelineMax();
  tween6a = utilities.fade('#img6');
  var tween6b = utilities.appear('#img7');
  var tween6c = utilities.textLeft('#text6');
  t6.add(tween6c).add(tween6a).add(tween6b);
  var scene6a = utilities.newScene('#scene11').setTween(t6);
  progressScenes.push(scene6a);

  tween6c = utilities.fade('#img7');
  var scene6b = utilities.newScene('#scene12').setTween(tween6c);

  // SCENE REVIEW WEEK

  // assessments
  var t7 = new TimelineMax();
  var tween7 = utilities.textLeft('#text7');
  var tween7a = utilities.appear('#img2d');
  t7.add(tween7).add(tween7a);
  var scene7 = utilities.newScene('#scene13').setTween(t7);
  progressScenes.push(scene7);

  // not so hard
  var t7a = new TimelineMax();
  tween7 = utilities.fade('#img2d');
  var tween7b = utilities.appear('#img8');
  var tween7c = utilities.textLeft('#text8');
  t7a.add(tween7).add(tween7b).add(tween7c);
  var scene7a = utilities.newScene('#scene14').setTween(t7a);
  progressScenes.push(scene7a);

  // relax
  var t7b = new TimelineMax();
  tween7 = utilities.fade('#img8');
  var tween7d = utilities.appear('#img9')
  var tween7e = utilities.textLeft('#text9');
  t7b.add(tween7).add(tween7d).add(tween7e);
  var scene7b = utilities.newScene('#scene15').setTween(t7b);

  // hackathons
  var t7c = new TimelineMax();
  tween7d = utilities.fade('#img9');
  var tween7f = utilities.appear('#img10');
  var tween7g = utilities.textLeft('#text10');
  t7c.add(tween7d).add(tween7f).add(tween7g);
  var scene7c = utilities.newScene('#scene16').setTween(t7c);
  progressScenes.push(scene7c);

  tween7f = utilities.fade('#img10');
  var scene7d = utilities.newScene('#scene17').setTween(tween7f);


  // SCENE SENIOR PHASE

  // projects
  var t8 = new TimelineMax();
  var tween8 = utilities.textLeft('#text11');
  var tween8a = utilities.appear('#img11');
  t8.add(tween8).add(tween8a);
  var scene8 = utilities.newScene('#scene18').setTween(t8);
  progressScenes.push(scene8);

  // REACTO
  var t8a = new TimelineMax();
  tween8a = utilities.fade('#img11');
  var tween8b = utilities.appear('#img12');
  var tween8c = utilities.textLeft('#text12');
  t8a.add(tween8a).add(tween8b).add(tween8c);
  var scene8a = utilities.newScene('#scene19').setTween(t8a);
  progressScenes.push(scene8a);

  tween8b = utilities.fade('#img12');
  var scene8b = utilities.newScene('#scene20').setTween(tween8b);

  // SCENE HIRING DAY

  // demos
  var t9 = new TimelineMax();
  var tween9 = utilities.textLeft('#text13');
  var tween9a = utilities.appear('#img13');
  t9.add(tween9).add(tween9a);
  var scene9 = utilities.newScene('#scene21').setTween(t9);
  progressScenes.push(scene9);

  // round robin interviews
  var t9a = new TimelineMax();
  tween9a = utilities.fade('#img13');
  var tween9b = utilities.appear('#img14');
  var tween9c = utilities.textLeft('#text14');
  t9a.add(tween9a).add(tween9b).add(tween9c);
  var scene9a = utilities.newScene('#scene22').setTween(t9a);
  progressScenes.push(scene9a);

  tween9b = utilities.fade('#img14');
  var scene9b = utilities.newScene('#scene23').setTween(tween9b);

  // SCENE GRADUATION

  var t10 = new TimelineMax();
  var tween10 = utilities.textLeft('#text15');
  var tween10a = utilities.appear('#img15');
  t10.add(tween10).add(tween10a);
  var scene10 = utilities.newScene('#scene24').setTween(t10);
  progressScenes.push(scene10);

  tween10a = utilities.fade('#img15');
  var scene10a = utilities.newScene('#scene25').setTween(tween10a);

  // SCENE FLIGHT
  var t11 = new TimelineMax();
  var tween11 = utilities.textLeft('#text16');
  var tween11a = utilities.appear('#img16');
  t11.add(tween11).add(tween11a);
  var scene11 = utilities.newScene('#scene26').setTween(t11);
  progressScenes.push(scene11);

  tween11a = utilities.fade('#img16');
  var scene11a = utilities.newScene('#scene27').setTween(tween11a);

  // SCENE LANDING A JOB
  var t12 = new TimelineMax();
  var tween12 = utilities.textLeft('#text17');
  var tween12a = utilities.appear('#img17');
  t12.add(tween12).add(tween12a);
  var scene12 = utilities.newScene('#scene28').setTween(t12);
  progressScenes.push(scene12);

  tween12a = utilities.fade('#img17');
  var scene12a = utilities.newScene('#scene29').setTween(tween12a);

  // ADDING SCENES TO CONTROLLER

  allScenes = [scene1, scene1a, scene2, scene2a, scene2b, scene2c, scene3, scene3a, scene4, scene5, scene5a, scene6, scene6a, scene6b, scene7, scene7a, scene7b, scene7c, scene7d, scene8, scene8a, scene8b, scene9, scene9a, scene9b, scene10, scene10a, scene11, scene11a, scene12, scene12a]
  utilities.showProgress(progressScenes);
  controller.addScene(allScenes);

})