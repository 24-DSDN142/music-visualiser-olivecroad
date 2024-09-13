
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
let flash = map(other,0,100,-110,150);
let DJTHINGS = map(bass,0,100,0,256);
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
strokeWeight(0);

//DJ things that change colour
fill(0,DJTHINGS,0);
beginShape()
vertex(600,345);
vertex(630,325);
vertex(780,325);
vertex(810,345);
endShape(CLOSE);


for (let i=0; i<2; i++){
  drawApple(150+(i*940),400,1+i,1+(2*i),bounce,sing);
  drawApple(250+(i*740),450,2+i,1,bounce,sing);
  drawApple(135+(i*970),500,1,3-i,bounce,sing);
  drawApple(275+(i*690),530,3-i,1+i,bounce,sing);
  drawApple(200+(i*840),570,1+i,1,bounce,sing);
  drawApple(100+(i*1040),590,2-i,2-i,sway,sing);
  drawApple(400+(i*440),530,1+i,3-i,bounce,sing);
  drawApple(300+(i*640),580,2-i,1,bounce,sing);
  drawApple(550+(i*140),560,1+(2*i),2,sway,sing);
  drawApple(450+(i*340),580,3-(2*i),3,bounce,sing);
  
}
}

function drawApple(x,y,colour,type,bop,sing){
  if (colour==1){
    fill(104, 179, 29);
    stroke(84,159,9);
  }
  else if (colour==2){
    fill(128, 222, 73);
    stroke(108,202,53);
  }
  else if (colour==3){
    fill(247, 234, 84);
    stroke(227,214,64);
  }


if (type==1){
  strokeWeight(5);
  line(x+50,y,x+60,(y-30)-bop)
  strokeWeight(0);


  beginShape(); //Apple
vertex(x-55, (y-6)+bop);
bezierVertex(x-62, (y-49)+bop, x+6, (y-47)+bop, x, (y-25)+bop);
bezierVertex(x-5, (y-47)+bop, x+60, (y-52)+bop, x+55, (y-7)+bop);
bezierVertex(x+59, (y+24)+bop, x+38, (y+75)+bop, x, (y+41)+bop);
bezierVertex(x-35, (y+79)+bop, x-58, (y+27)+bop, x-56, (y-5)+bop);
endShape();
//stem
fill(117, 74, 30);
  rect(x,y-35+bop,10,30);
//leaf
fill(63, 117, 30);
  beginShape();
vertex(x-24, (y-59)+bop);
bezierVertex(x-23, y-39+bop, x-16, y-29+bop, x+3, y-24+bop);
bezierVertex(x+12, y-44+bop, x+1, y-59+bop, x-22, y-60+bop);
endShape();

fill(0,0,0);
ellipse(x-15,y+bop,25,25);
ellipse(x+15,y+bop,25,25);
stroke(0,0,0);
strokeWeight(3);
line((x-20),y+bop,(x+20),y+bop)
arc(x,(y+20)+bop,20,20,0,180);
strokeWeight(0);
}
else if(type==2){
  strokeWeight(5);
line(x+50,y,(x+60)+(bop*1.25),y-40);
line(x-50,y,(x-60)+(bop*1.25),y-40);
strokeWeight(0);

  beginShape(); //Apple
vertex((x-55)+bop, y-6);
bezierVertex((x-62)+bop, y-49, (x+6)+bop, y-47, x+bop, y-25);
bezierVertex((x-5)+bop, y-47, (x+60)+bop, y-52, (x+55)+bop, y-7);
bezierVertex((x+59)+bop, y+24, (x+38)+bop, y+75, x+bop, y+41);
bezierVertex((x-35)+bop, y+79, (x-58)+bop, y+27, (x-56)+bop, y-5);
endShape();
//stem
fill(117, 74, 30);
  rect(x+bop,y-35,10,30);
//leaf
fill(63, 117, 30);
  beginShape();
vertex(x-24+bop, y-59);
bezierVertex(x-23+bop, y-39, x-16+bop, y-29, x+3+bop, y-24);
bezierVertex(x+12+bop, y-44, x+1+bop, y-59, x-22+bop, y-60);
endShape();

stroke(0,0,0);
strokeWeight(4);
line((x-55)+bop,y,(x+55)+bop,y);
strokeWeight(0);
fill(0,0,0);
rect((x-20)+bop,y,30,15);
rect((x+20)+bop,y,30,15);
rect(x+bop,y+20,15,5+(sing/2));
}


else if(type==3){
  beginShape(); //Apple
  vertex((x-55), y-6);
  bezierVertex((x-62), y-49, (x+6), y-47, x, y-25);
  bezierVertex((x-5), y-47, (x+60), y-52, (x+55), y-7);
  bezierVertex((x+59), y+24, (x+38), y+75, x, y+41);
  bezierVertex((x-35), y+79, (x-58), y+27, (x-56), y-5);
  endShape();
  //stem
  fill(117, 74, 30);
  rect(x,y-35,10,30);

  //glasses
  stroke(0,0,0);
  strokeWeight(5);
  line(x-55,y+bop,x+55,y+bop);
  strokeWeight(0);
  //lens
  fill(0,0,0);
  beginShape();
  vertex(x-10,y+bop);
  vertex(x-15,(y+15)+bop);
  vertex(x-40,(y+15)+bop);
  vertex(x-45,y+bop);
  endShape(CLOSE);
  beginShape();
  vertex(x+10,y+bop);
  vertex(x+15,(y+15)+bop);
  vertex(x+40,(y+15)+bop);
  vertex(x+45,y+bop);
  endShape(CLOSE);
}
}