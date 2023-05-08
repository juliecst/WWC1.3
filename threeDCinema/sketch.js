function setup() {
  createCanvas(500, 400, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(200);
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  ambientLight(160, 60, 60,30 );
  pointLight(200, 100, 50, locX, locY, 100);
  directionalLight(250, 50, 20, 0, 0, -0.5);
  

  //Floor
  push();
  let angle = 90;
  translate(0, 110, 0);
  //rotateX(frameCount* 0.5);
  rotateX(90);
  noStroke();
  specularMaterial(250, 80);
  shininess(0.8);
  plane(305, 310, 350);

  translate(-50, 140, 30);
  torus(10, 5);

  translate(60, 10, 20);
  torus(20, 3);

  pop();

  //left wall
  push();
  translate(-250, 0, 0);
  //rotateY(frameCount* 0.5)
  rotateY(80);
  fill(234, 22, 53);
  noStroke();
  plane(600, 400, 400);
  pop();

  //right Wall
  push();
  translate(250, 0, 0);
  rotateY(-80);
  fill(234, 100, 53);
  noStroke();
  plane(600, 400);
  pop();

  //ceiling
  push();
  translate(0, -120, 10);
  rotateX(90);
  fill(4, 0, 53);
  plane(310, 310, 400);
  pop();

  //slowdance
  push();
  orbitControl(0.5);
  rotateX(20);

  for (let i = 0; i < 40; i++) {
    let hue = map(sin(frameCount), -1, 1, 0, 360);
    let sat = map(i, 0, 40, 20, 100);
    let bri = map(cos(frameCount), -1, 1, 100, 50);

    stroke(hue, sat, bri, 50);
    //rotate(frameCount *0.1);

    translate(frameCount * 0.001 * noise(0.3), noise(0.7) * 20, 0);
    beginShape();
    //scale(0.96);

    for (var j = 0; j < 360; j += 60) {
      let rad = i * 4;
      let x = rad * cos(j) * 0.3;
      let y = rad * sin(j) * 0.3;
      let z = sin(frameCount * 2 + i * 5) * 50;

      //texture(10,0)
      vertex(x, y, z);
      curveVertex(-2, 5, 40);
      vertex(5, 3, 2);

      rotate(30);
    }

    endShape(CLOSE);
  }
}
