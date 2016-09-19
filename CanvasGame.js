

function CreateCanvas() {
  var c = document.querySelector("#c");
  var ctx = c.getContext("2d");


  var image = new Image();
  image.onload = function() {
  console.log("Loaded image");

  ctx.drawImage(image, 0, 0, c.width , c.height);
  ctx.fillRect(100, 100, 100, 100);
  ctx.strokeStyle = "#33CC33";
  ctx.strokeRect(50, 50, 50, 50);

  // to reset the canvas use
  // ctx.clearRect(0, 0, c.width, c.height);
  // or just change the wigth or height, c.width = c.width;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 10);
  ctx.lineTo(10, 10);
  // ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.fillText("Hello", 90, 10);

  document.addEventListener("keydown", function(event) {
    console.log(event.which);
    // if(event.which == 70) {console.log("WORKED!)};
}

// This is where your game will go.



// This is a slingshot class used to create the objects.
var CreateSlingShot() {

}




<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <canvas id="canvas" width="640" height="426"></canvas>

    <script type="text/javascript">

    // example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

    var Bird = function(starting_point) {
      var obj = Object.create(Bird.prototype);
      obj.x = 90;
      obj.y = 10;
      obj.t = 1;
      obj.x1 = 0;
      obj.q = 1;
      obj.z = 0;

      if(starting_point != null) { obj.placement = starting_point; }
      else { obj.placement = 30; }

      obj.x = obj.x + obj.placement;
      obj.speed = 20.0;

      return obj;
    };
    Bird.prototype.updatePosition = function() {

      this.speed = 20.0;            // Create the astroid/meteor objects that move by themselves.
      if(this.x === 1) {
        this.x = 0;
        // time = new Date().getTime() * 0.002;
        // console.log("time 1");
        console.log(this.t);
        this.t = this.t + this.speed;
      }
      else if (this.x === 2) {
        this.x = 0;
        this.t = this.t - this.speed;
      }
      if (this.z === 1) {
        this.z = 0;
        this.q = this.q + this.speed;
      }
      else if (this.z === 2){
        this.z = 0;
        this.q = this.q - this.speed;
      }
      // else if (timing()) {b1.y = b1.y + t; t = 1;}
    };

    Bird.prototype.move = function() {
      ctx.beginPath();
      // ctx.fillText("", 90, 10+t);
      // ctx.clearRect(90, 10+t, 10, 10);
      ctx.clearRect(0,0, canvas.width, canvas.height);
      ctx.moveTo(10, 10);
      ctx.lineTo(50, 50);
      ctx.lineTo(50, 10);
      ctx.lineTo(10, 10);
      // ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.fillText("V", this.x + this.q, this.y + this.t);
      // console.log(10+t);
      ctx.closePath();
    };

    Bird.prototype.move2 = function() {
      ctx.beginPath();
      ctx.moveTo(30, 10);
      ctx.lineTo(70, 50);
      ctx.lineTo(70, 10);
      ctx.lineTo(30, 10);
      // ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.fillText("V", 120 + q, 10+t);
      ctx.closePath();
    };



// REMOVE THESE FROM THE GLOBAL SCOPE !!!!!S
      var canvas, context;
      init();
      var t = 1;
      var x = 0;
      var q = 1;
      var z = 0;
      var b1 = Bird();
      var b2 = Bird(30);
      var time = new Date().getTime() * 0.002;
      var time2 = new Date().getTime() * 0.002;
      animate();
      function init() {
          canvas = document.getElementById('canvas');
          ctx = canvas.getContext( '2d' );
      }
      function animate() {
          requestAnimationFrame( animate );
          proccessInput();
          time = new Date().getTime() * 0.002;
          b1.updatePosition();
          b1.move();
          b2.move2();
      };

      function UpdateCoordinates() { // this should all be a part of the objects !!!!!! MAKE THIS A CLASS METHOD OF BIRD.

      };

      function timing() {
        time2 = new Date().getTime() * 0.002;
        // console.log("time 2");
        // console.log(time2);
        console.log(time2 - time);
        if ( (time2 - time) >= .0001 ) {

          return true;
        }
        return false;
      };

      function proccessInput() {
        if(t > 370) {b1.y = 10; t = 1};
        // console.log(t);
        window.addEventListener("keydown", function(event) {
          if(event.which == 83) {
            // console.log(t);
             x = 1;
           }
           else if(event.which == 87) {
             x = 2;
           }
           else if(event.which == 68) {
             z = 1;
           }
           else if(event.which == 65) {
             z = 2;
           }
        })
      };

    </script>
  </body>
</html>

// <!--
// // example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
// var canvas, context;
// init();
// animate();
// function init() {
//     canvas = getCanvas();
//     context = canvas.getContext( '2d' );
// }
// function animate() {
//     requestAnimationFrame( animate );
//     draw();
// }
// function draw() {
//     var time = new Date().getTime() * 0.002;
//     var x = Math.sin( time ) * 96 + 38;
//     var y = Math.cos( time * 0.9 ) * 96 + 38;
//
//     context.fillStyle = 'rgb(245,245,245)';
//     context.fillRect( 0, 0, 255, 255 );
//     context.fillStyle = 'rgb(255,0,0)';
//     context.beginPath();
//     context.arc( x, y, 10, 0, Math.PI * 2, true );
//     context.closePath();
//     context.fill();
// } -->
