$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////



    
// TODO 1: Enable the grid
// toggleGrid();
kaboom({
  width: 640,
  height: 480,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

// Load sprites
loadRoot("https://kaboomjs.com/sprites/");
loadSprite("bean", "bean.png");
loadSprite("block", "grass.png");

// Set gravity so the player falls
setGravity(1200);

// Add the ground platform
add([
  rect(width(), 48),
  pos(0, height() - 48),
  area(),
  solid(),
  color(127, 200, 255),
]);

// TODO 2 - Create Platforms
const platforms = [
  vec2(100, 380),
  vec2(200, 300),
  vec2(300, 220),
  vec2(400, 150),
];

for (const p of platforms) {
  add([
    sprite("block"),
    pos(p),
    area(),
    solid(),
  ]);
}

// Add the
const   add,[
  sprite("bean"),
  pos(80, 40),
  area(),
  body(),


// Player controls
onKeyDown("left", () => {
  player.move(-200, 0);
});

onKeyDown("right", () => {
  player.move(200, 0);
});

onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump(500);
  }
});




    // TODO 3 - Create Collectables
    collectables
const coins = [
  vec2(120, 340),
  vec2(220, 260),
  vec2(320, 180),
];
for (const c of coins) {
  add([
    sprite("coin"),
    pos(c),
    area(),
    "coin", // 
  ]);
}
// Add the player
const player = add([
  sprite("bean"),
  pos(80, 40),
  area(),
  body(),
]);
// Player controls
onKeyDown("left", () => {
  player.move(-200, 0);
});
onKeyDown("right", () => {
  player.move(200, 0);
});
onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump(500);
  }
});
// TODO: Collect coins when touched
player.onCollide("coin", (coin) => {
  destroy(coin);
  // Optionally play sound or update score
});



    
    // TODO 4 - Create Cannons
     loadSprite("cannon", "https://kaboomjs.com/sprites/mark.png");

function spawnBullet(x, y) {
  const bullet = add([
    rect(12, 6),
    pos(x, y),
    area(),
    move(LEFT, 300),
    cleanup(),
    color(255, 0, 0),
    "bullet",
  ]);
}

function spawnCannon(posX, posY) {
  add([
    sprite("cannon"),
    pos(posX, posY),
    area(),
    "cannon",
  ]);

  loop(2, () => {
    spawnBullet(posX + 20, posY + 8);
  });
}

spawnCannon(500, 400);

player.onCollide("bullet", () => {
  add([
    text("Game Over", { size: 32 }),
    pos(center()),
    anchor("center"),
  ]);
  destroy(player);
});



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

