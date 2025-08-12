/*╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ global variables ✦
╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
//let ocrfont;      
let logo;         
let baselayer;   

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
  baselayer = createGraphics(windowWidth, windowHeight);
  baselayer.background(255);

  // draw logo (adjust size here)
  let logow = width * 0.55;  // custom width
  let logoh = height * 0.6; // custom height
  baselayer.imageMode(CENTER);
  baselayer.image(logo, width / 2, height / 2, logow, logoh);

  // ⋆ static graphics here ⋆


}

/*✧༺♥༻✧╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
        ✦ pixelation ✦
✧༺♥༻✧  ╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function draw() {
  image(baselayer, 0, 0);

  let regionsize = 180; // pixelated area size
  let pixelsize = 10;   // pixel block size

  // pos, following mouse
  let x = constrain(mouseX - regionsize / 2, 0, width - regionsize);
  let y = constrain(mouseY - regionsize / 2, 0, height - regionsize);

  
  let lens = baselayer.get(x, y, regionsize, regionsize);

  // shrink, then large
  image(lens, x, y, pixelsize, pixelsize);
  let tiny = get(x, y, pixelsize, pixelsize);
  image(tiny, x, y, regionsize, regionsize);


 
}
