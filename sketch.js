var d;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  d=select('.div-block');
  d.position(0,0);
  gui=new Gui();
  
  let gui_setup = new dat.GUI();
  
   gui_setup.add(gui, 'strokeWeightd', 1, 10).step(1).onChange(update),
  
  gui_setup.add(gui, 'strokeWeightl',1, 5).step(1).onChange(update),
  
  //gui_setup.add(gui, 'ymargin', 0, 100).step(1).onChange(update);
  
  gui_setup.add(gui, 'yspacing', 1, 50).step(1).onChange(update);
  
  gui_setup.addColor(gui,'color').onChange(update);
  
  gui_setup.addColor(gui, 'colordraw').onChange(update);
  
  gui_setup.addColor(gui, 'paperlinec').onChange(update);
  
 gui_setup.add(gui, 'description').onChange(description);
 
  //gui_setup.addColor(gui, 'dColor').onChange(description);
    
   
frameRate(120);
  noLoop();
}

function draw() {

   background(gui.color);
  paper();
  

}
function mouseDragged() 
{ 
  stroke(gui.colordraw);
	strokeWeight(gui.strokeWeightd);
  //ellipse(mouseX, mouseY, gui.strokeWeight/2, gui.strokeWeight/2)
	line(mouseX, mouseY, mouseX, mouseY);
}

function paper(){
  
  strokeWeight(gui.strokeWeightd);

  stroke(gui.paperlinec);

 for (var i = 0; i <= windowHeight; i += gui.yspacing) {
    

  	line(windowHeight*2, i, 0, i);
  
  }
}
function update(){
  redraw();
}
function Gui(){

  this.color = '#778c80';
  this.colordraw = '#32403B';
  this.paperlinec = '#f2b199';
  this.strokeWeightd = 10;
  this.strokeWeightl= 2;
  //this.ymargin = 100;
  this.yspacing =50;
    this.description = true;

  
  
    
}
  function description(){

    if(gui.description){
         d.show();
    } else {
        d.hide();
    }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}