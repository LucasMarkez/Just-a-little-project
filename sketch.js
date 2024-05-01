function setup() {
    createCanvas(800, 500);background("yellow");
  }
  
  function draw() {
    
    fill("blue");
    stroke("red");
    console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  