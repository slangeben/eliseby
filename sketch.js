/*╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ global variables ✦
╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
let logo;         
let baseLayer;   


/*╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ preload assets ✦
╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function preload() {
  logo = loadImage('elisebyPixelLogo.png'); 
}


/*✧༺♥༻✧ ╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
  ✦ setup canvas + base scene ✦
  ✧༺♥༻✧ ╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth(); // keeps pixelation crisp

  baseLayer = createGraphics(windowWidth, windowHeight);
  baseLayer.background(255);

  // ⋆ responsive logo scaling ⋆
  let maxLogoW, maxLogoH;

  if (windowWidth < 768) {
    // mobile scale
    maxLogoW = width * 0.8;   
    maxLogoH = height * 0.4;
  } else {
    // desktop scale
    maxLogoW = width * 0.55;   
    maxLogoH = height * 0.6;   
  }

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

  let regionsize, pixelsize;

  if (windowWidth < 768) {
    // smaller lens on mobile
    regionsize = 120; 
    pixelsize = 10;   
  } else {
    // bigger lens on desktop
    regionsize = 180; 
    pixelsize = 14;   
  }

  // pos, following mouse
  let x = constrain(mouseX - regionsize / 2, 0, width - regionsize);
  let y = constrain(mouseY - regionsize / 2, 0, height - regionsize);

  let lens = baseLayer.get(x, y, regionsize, regionsize);

  // shrink, then enlarge
  image(lens, x, y, pixelsize, pixelsize);
  let tiny = get(x, y, pixelsize, pixelsize);
  image(tiny, x, y, regionsize, regionsize);
}


/*✧༺♥༻✧╔══ஓ๑♡๑ஓ══╗ ✧༺♥༻✧
     ✦ responsive resize ✦
✧༺♥༻✧  ╚══ஓ๑♡๑ஓ══╝ ✧༺♥༻✧*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup(); // re-run setup for correct scaling
}
