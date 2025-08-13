/*╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ global variables ✦
╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
//let ocrfont;      
let logo;         
let baseLayer;   

/*.   ╔══ஓ๑♡๑ஓ══╗
  ✦ preload assets ✦
      ╚══ஓ๑♡๑ஓ══╝ */
function preload() {
  //ocrfont = loadFont('ocrfont.ttf');             // load font
  logo = loadImage('elisebyPixelLogo.png');       // load logo
}

/*✧༺♥༻✧ ╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ setup canvas + base scene ✦
  ✧༺♥༻✧ ╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth(); // keeps pixelation crisp

  // create the base layer
  baseLayer = createGraphics(windowWidth, windowHeight);
  baseLayer.background(255);

  // draw logo (adjust size here)
  let logoW = width * 0.55;  // custom width
  let logoH = height * 0.6; // custom height
  baseLayer.imageMode(CENTER);
  baseLayer.image(logo, width / 2, height / 2, logoW, logoH);

  // ⋆ static graphics here ⋆


}

/*✧༺♥༻✧╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
        ✦ pixelation ✦
✧༺♥༻✧  ╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function draw() {
  image(baseLayer, 0, 0);

  let regionsize = 180; // pixelated area size
  let pixelsize = 14;   // pixel block size

  // pos, following mouse
  let x = constrain(mouseX - regionsize / 2, 0, width - regionsize);
  let y = constrain(mouseY - regionsize / 2, 0, height - regionsize);

  
  let lens = baseLayer.get(x, y, regionsize, regionsize);

  // shrink, then large
  image(lens, x, y, pixelsize, pixelsize);
  let tiny = get(x, y, pixelsize, pixelsize);
  image(tiny, x, y, regionsize, regionsize);


 
}
