/*╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ global variables ✦
╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
let logo;         
let baseLayer;   

/*.   ╔══ஓ๑♡๑ஓ══╗
  ✦ preload assets ✦
      ╚══ஓ๑♡๑ஓ══╝ */
function preload() {
  logo = loadImage('elisebyPixelLogo.png'); 
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

  // ⋆ draw logo with locked ratio ⋆
  let maxLogoW = width * 0.55;   // max allowed width
  let maxLogoH = height * 0.6;   // max allowed height
  let logoRatio = logo.width / logo.height;

  let logoW = maxLogoW;
  let logoH = logoW / logoRatio;

  if (logoH > maxLogoH) {
    logoH = maxLogoH;
    logoW = logoH * logoRatio;
  }

  baseLayer.imageMode(CENTER);
  baseLayer.image(logo, width / 2, height / 2, logoW, logoH);
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

  // shrink, then enlarge
  image(lens, x, y, pixelsize, pixelsize);
  let tiny = get(x, y, pixelsize, pixelsize);
  image(tiny, x, y, regionsize, regionsize);
}
