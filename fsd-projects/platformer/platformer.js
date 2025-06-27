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

    // TODO 1 - Enable the Grid
     //toggleGrid(); 


    // TODO 2 - Create Platforms

createPlatform(200, 500, 90, 70, "teal" );

createPlatform(100, 600, 50, 40, " green");

createPlatform(300, 700, 20, 50, "pink");

createPlatform(600,550 , 200, 70 ,"peach");
createPlatform(1100, 200, 200, 40, "hotpink");
createPlatform(800 , 400, 200, 30,"light green");

    // TODO 3 - Create Collectables

createCollectable("steve", 1350, 50);

createCollectable("diamond", 200, 170, 0.5, 0.7);

createCollectable("database", 800 , 200, 0.3, 0.6 )
    
    // TODO 4 - Create Cannons

createCannon("top", 200, 1000);

createCannon("right", 300, 300);
 
createCannon( "top" , 500 , 3000);
    
createCannon ("top" , 1000, 500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
