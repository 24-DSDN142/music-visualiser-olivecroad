
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(90);
 textAlign(CENTER);
 let G = map(drum,0,100,0,256);
let bounce = map(drum,0,100,0,15);
let arms = map(drum,0,100,0,1);
let sing = map(vocal,0,100,1,30);
let DJ = map(other,0,100,0,20);
let sway = map(drum,0,100,-7,8);
let flash = map(other,0,100,-110,150)
strokeWeight(0)
 fill(138, 206, 0);
 if(counter>4100){fill(0,flash,0)}
 if(counter>4550){fill(138,206,0)}
rect(600,220,600,400);

fill(0,0,0);
text("brat",600,180); 

//for (let i=0; i<11; i++){
  //for(let j=0; j<4; j++){
   // if(i%2==1 || j%2==1){fill(0,0,0);}
 // if(i%2==0 ){fill(256,256,256);}
 //   rect(62+(i*124),550+(j*62),124,62);
 // }
//}
fill(89, 138, 33);
beginShape(); //Apple DJ
vertex(442, 247);
bezierVertex(448, 207, 507, 221, 506, 247);
bezierVertex(512, 221, 556, 205, 574, 249);
bezierVertex(579, 305, 550, 373, 508, 338);
bezierVertex(465, 368, 435, 316, 440, 247);
endShape();

fill(0,0,0)
stroke(0,0,0) //DJ Glasses
strokeWeight (7)
line(440,260+bounce,573,260+bounce)
beginShape()
vertex(465,260+bounce)
vertex(470,280+bounce)
vertex(490,280+bounce)
vertex(495,260+bounce)
endShape(CLOSE)
beginShape()
vertex(520,260+bounce)
vertex(525,280+bounce)
vertex(545,280+bounce)
vertex(550,260+bounce)
endShape(CLOSE)

strokeWeight(0)
fill(201, 175, 103); //Apple DJ Hair
beginShape();
vertex(430, 249);
bezierVertex(439, 175, 564, 171, 584, 243);
bezierVertex(589, 259, 574, 283, 548, 229);
bezierVertex(546, 264, 523, 253, 520, 231);
bezierVertex(507, 255, 491, 257, 482, 227);
bezierVertex(476, 257, 454, 261, 456, 240);
bezierVertex(448, 282, 425, 273, 432, 252);
endShape();




fill(0,0,0);
beginShape(); //Charli Apple Hair
vertex(634, 224);
bezierVertex(637, 183, 704, 185, 704, 210);
bezierVertex(705, 185, 774, 180, 772, 217);
bezierVertex(772, 251, 805, 209, 805, 255);
bezierVertex(842, 265, 786, 291, 819, 302);
bezierVertex(839, 297, 834, 331, 817, 329);
bezierVertex(594, 329, 594, 329, 594, 329);
bezierVertex(571, 299, 590, 290, 601, 295);
bezierVertex(585, 260, 618, 281, 617, 252);
bezierVertex(612, 216, 632, 244, 635, 224);
endShape();

fill(139, 179, 7);
beginShape(); //Apple Charli
vertex(642, 247);
bezierVertex(648, 207, 707, 221, 706, 247);
bezierVertex(712, 221, 756, 205, 774, 249);
bezierVertex(779, 305, 750, 373, 708, 338);
bezierVertex(665, 368, 635, 316, 640, 247);
endShape();

strokeWeight(6) //Charli Glasses
fill(0,0,0)
line(630,270,780,270);
rect(673,270,40,25);
rect(737,270,40,25);

fill(80,G,0) 
rect(737,270,39,24)
rect(673,270,39,24)


fill(0,0,0); //mouth
strokeWeight(0)
ellipse(706,306,sing,sing)


strokeWeight(0);
fill(107, 158, 3); //floor
if(counter>4100){fill(0,flash,0)}
if(counter>4550){fill(107,158,3)}
beginShape() 
 vertex(10,650);
 vertex(100,410);
 vertex(1140,420);
 vertex(1230,650);
 endShape(CLOSE);

fill(10, G, 0);
if(counter>4100){fill(0,flash,0)}
if(counter>4550){fill(10,G,0)}
rect(193,210,190,380);
rect(1017,215,210,390);

fill(121, 122, 118);
rect(600,450,550,200); //DJ Stand
fill(94, 94, 92);
beginShape ()
  vertex(325,350);
  vertex (365,320);
  vertex(830,320);
  vertex(875,350);
  endShape(CLOSE);

fill(64, 64, 64);
ellipse(450,335,55,20);
ellipse (530,335,65,20);

fill(0,0,0);
ellipse (450,335,20,9);
ellipse (530,335,25,10);

//apple DJ hands
strokeWeight(5);
stroke(79, 128, 23);
line(570,300,550-DJ,335);
line (450,300,480-DJ,335)


fill(176, 235, 94);
// beginShape ()
// curveVertex(100,300);
// curveVertex(110,300);
// curveVertex(130,320);
// curveVertex(150,300);
//endShape(CLOSE);

//apple
strokeWeight(3);
line(160,500+bounce,140,475-(bounce));
line(230,500+bounce,250,540+bounce);

strokeWeight(0);
fill(138, 206, 0);
ellipse(180,487+bounce,65,80);
ellipse(223,487+bounce,65,80);

fill(138, 206, 0); // BRAT
  stroke(0); // Black outline
  strokeWeight(0);

  ellipse(200,500+bounce,100,100);
  fill(108, 176, 0);
  ellipse(200,468+bounce,20,20);
  fill(79, 50, 23);
  rect(200,454+bounce,10,30);

  fill(0,0,0); //eyes
  ellipse(180,490+bounce,10,10);
  ellipse(220,490+bounce,10,10);
  strokeWeight(2);
  fill(138, 206, 0);
  arc(200,510+bounce,15,15,0,180);
  strokeWeight(0);
  fill(237, 166, 194);
  ellipse(175,508+bounce,15,15);
  ellipse(225,508+bounce,15,15);

  
  fill(0,0,0); //glasses
  rect(200,480+(1.25*bounce),107,5);
  arc(180,480+(1.25*bounce),30,40,0,180);
  arc(220,480+(1.25*bounce),30,40,0,180);

 

  drawApple(950,450);
 
fill(59, 130, 21)
beginShape(); //Apple 4
vertex(1038, 488);
bezierVertex(1026, 441, 1105, 447, 1098, 472);
bezierVertex(1091, 448, 1167, 440, 1154, 489);
bezierVertex(1150, 529, 1129, 557, 1100, 536);
bezierVertex(1074, 559, 1046, 531, 1038, 489);
endShape();

fill(222, 210, 78)
beginShape(); //Apple 5
vertex(934, 553);
bezierVertex(927, 520, 1004, 519, 994, 542);
bezierVertex(986, 519, 1057, 519, 1058, 550);
bezierVertex(1066, 611, 1017, 638, 995, 615);
bezierVertex(974, 637, 933, 610, 932, 553);
endShape();

beginShape(); //Apple 6
vertex(288+sway, 529);
bezierVertex(285+sway, 480, 341+sway, 486, 354+sway, 511);
bezierVertex(368+sway, 485, 423+sway, 476, 420+sway, 525);
bezierVertex(418+sway, 584, 376+sway, 602, 359+sway, 583);
bezierVertex(340+sway, 605, 292+sway, 588, 288+sway, 529);
endShape();
strokeWeight(3)
arc(386+sway,530,20,20,180,0) //eye 1
arc(325+sway,530,20,20,180,0) //eye 2
fill(0,0,0);
arc(355+sway,555,sing,sing,0,180) //mouth

strokeWeight(0)
fill(53, 117, 34);
beginShape(); //Apple 7
vertex(448, 544+bounce);
bezierVertex(446, 507+bounce, 502, 501+bounce, 512, 527+bounce);
bezierVertex(520, 499+bounce, 572, 504+bounce, 572, 547+bounce);
bezierVertex(570, 588+bounce, 549, 625+bounce, 514, 607+bounce);
bezierVertex(477, 628+bounce, 448, 593+bounce, 448, 543+bounce);
endShape();
  

}

function drawApple(x,y){
  fill(104, 179, 29)
  beginShape(); //Apple
vertex(x-55, y-6);
bezierVertex(x-62, y-49, x+6, y-47, x, y-25);
bezierVertex(x-5, y-47, x+60, y-52, x+55, y-7);
bezierVertex(x+59, y+24, x+38, y+75, x, y+41);
bezierVertex(x-35, y+79, x-58, y+27, x-56, y-5);
endShape();
}