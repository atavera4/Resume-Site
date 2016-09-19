// Project:  My Resume Website
// Author: Ariel Taveras
//  Date: June 2016.



// Below are HTML String variables used for editing the site.


// These are for the stuff that goes on top of the web page.
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLCurrentDate = "<h4 id='date'>%data%</h4>";
var HTMLCurrentTime = "<h4 id='time'>%data%</h4>";
var HTMLCurrentWeather = "<h4 id='weather'>%data%</h4>";


// These are for the Links to my social media and online contact info.
var HTMLlinkedin = "<a href='http://%data%'>Linkedin.com</a>";
var HTMLResumePDF = "<a href='file:///%data%'>Resume PDF</a>";
var HTMLEmailContact = "<a href='file:///%data%'>E-mail</a>";
var HTMLPhoneContact = "";

// description.
var HTMLBioDescription = "<div id='BioDescription'><%data%</dev>";

// These are for the text that goes on top of the photos placed on the bootstrap grid.

var Projects1 = "<div id='projects1'>%data%</div>";
var Projects2 = "<div id='projects2'>%data%</div>";
var Projects3 = "<div id='projects3'>%data%</div>";


//Display the links on screen.
function ShowLinks()
{
  var link1 = HTMLlinkedin.replace("%data%","Linkedin.com");
  var link2 = HTMLResumePDF.replace("%data%","Users/Ariel/Desktop/Ariel%20Site/Resume.pdf");
  var link3 = HTMLEmailContact.replace("%data%","Users/Ariel/Desktop/Ariel%20Site/C_Projects.html");
  $("#linkedin").append(link1);
  $("#ResumePDF").append(link2);
  $("#email").append(link3);

}
ShowLinks();


// This object is for the description and bio.
var bio =
{
  "name":"Ariel Taveras",
  "School":"Binghamton University",
  "Degree":"B.S Computer Engineering",
  "Degree2":"M.S Electrical and Computer Enginering",
  "age":"23",
  "address":"",
  "phone":""
}

bio.display = function()
{
  for(info in bio)
  {
    var description = HTMLBioDescription.replace("%data%", info);
    $("#description").append(description);
  }
}


var Resume =
{
  "resume":
  [
    {
      "role":"Embedded Systems and Firmware Engineering Intern",
      "organization":"Crestron Electronics",
      "location":"Rockleigh, NJ",
      "date":"May 2015 - August 2015"
    },
    {
      "role":"Undergraduate Course Assistant",
      "organization":"Binghamton Univerisity",
      "location":"Binghamton NY",
      "date":"?????"
    },
    {
      "role":"Undergraduate Course Assistant",
      "organization":"Binghamton Univerisity",
      "location":"Binghamton NY",
      "date":"?????"
    }
  ]
}


// Functions for changing the Appearance/Theme of the site.

//Black Theme
function ClickThemes()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundBlack";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground2";
  document.getElementById("PanelColor").className = "";
  document.getElementById("PanelColor").className = "panel-heading PanelColorThemeBlack"
  document.getElementById("PanelColorTop").className = "";
  document.getElementById("PanelColorTop").className = "panel PanelColorTopThemeBlack";
  document.getElementById("navbar").className = "";
  document.getElementById("navbar").className = "navbar navbar-default";

}
//White Theme
function ClickThemes2()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundWhite";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground1";
  document.getElementById("PanelColor").className = "";
  document.getElementById("PanelColor").className = "panel-heading PanelColorThemeWhite";
  document.getElementById("PanelColorTop").className = "";
  document.getElementById("PanelColorTop").className = "panel PanelColorTopThemeWhite";
  document.getElementById("navbar").className = "";
  document.getElementById("navbar").className = "navbar navbar-inverse";

}
//Red Theme
function ClickThemes3()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundRed";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground3";
}


// Fuctions for opening the various site pages.

function OpenHomePage()
{
  window.open
}

function OpenSummer2015()
{
  window.open("Operating Systems Projects.html");
}

function OpenFall2015()
{
  window.open("Fall2015.html");
}


function OpenOSproject2() {
  window.open("Operating Systems Project 2.html");
}

function OpenOSproject3() {
  window.open("Operating Systems Project 3.html");
}

function OpenOSproject4() {
  window.open("Operating Systems Project 4.html");
}

function OpenMicroProject() {
  window.open("Microprocessors Project.html");
}

function OpenSummer_1() {
  window.open("Summer2015 Assignment_1.html");
}
function OpenSummer_2() {
  window.open("Summer2015 Assignment_2.html");
}
function OpenSummer_3() {
  window.open("Summer2015 Assignment_3.html");
}
function OpenSummer_4() {
  window.open("Summer2015 Assignment_4.html");
}
function OpenSummer_5() {
  window.open();
}
function OpenSummer_6() {
  window.open();
}
function OpenSummer_7() {
  window.open();
}

document.getElementById('theme1').addEventListener("click", ClickThemes);
document.getElementById('theme2').addEventListener("click", ClickThemes2);
document.getElementById('theme3').addEventListener("click", ClickThemes3);


function showCode() {
  document.getElementById('code_block_1').toggle();
}

// document.getElementById('button1').addEventListener("click", showCode);


// The code below is the game


    var CANVAS_WIDTH = 640;//window.innerWidth;
    var CANVAS_HEIGHT = 640;//window.innerHeight;

    var FPS = 60;

    // example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
    // var glob = 0;

    var GameInfoTracker = {
      num_keydowns: 0,
      game_time: 0
    };
    var Bird = function() {
      var obj = Object.create(Bird.prototype);
      obj.x = 90;
      obj.y = 10;
      obj.t = 1;
      obj.vert = 0;
      obj.q = 1;
      obj.z = 0;

      // if(starting_point != null) { obj.placement = starting_point; }
      // else { obj.placement = 0; }
      obj.placement = 0;
      obj.x = obj.x + obj.placement;
      obj.speed = 20.0;

      return obj;
    };

    Bird.prototype.proccessInput = function() {
      if(this.t > 370) {this.y = 10; this.t = 1};
      //  console.log(this.t);
      var Bird_obj = this;
      window.addEventListener("keydown", function(event) {
        if(event.which == 83) {
          //  console.log("key!!!");
          //  glob = 1;
           Bird_obj.vert = 1;
          //  console.log(temp);
         }
         else if(event.which == 87) {
           Bird_obj.vert = 2;
         }
         else if(event.which == 68) {
           Bird_obj.z = 1;
         }
         else if(event.which == 65) {
           Bird_obj.z = 2;
         }
      })
    };

    Bird.prototype.updatePosition = function() {
                  // Create the astroid/meteor objects that move by themselves.
      if(this.vert === 1) {
        this.vert = 0;
        glob = 0;
        // time = new Date().getTime() * 0.002;
        // console.log("time 1");
        // console.log("this.speed");
        this.t = this.t + this.speed;
      }
      else if (this.vert === 2) {
        this.vert = 0;
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
      // console.log(this.t);
      ctx.closePath();
    };

    var Ball = function() {
      var obj = Object.create(Ball.prototype);
      obj.x = 100;
      obj.y = 100;
      obj.speed = 3;
      obj.direction = Math.PI * 2 * Math.random();

      return obj;
    }

    Ball.prototype.move = function() {
      // Draw over the whole canvas to create the trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, .05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the dot
      ctx.beginPath();
      ctx.fillStyle = '#ff0000';
      ctx.moveTo(this.x, this.y);
      ctx.arc(this.x, this.y, 3, 0, Math.PI*2, true);
      ctx.fill();
    }

    Ball.prototype.updatePosition = function() {
      var dx = this.x + this.speed * Math.cos(this.direction);
      var dy = this.y + this.speed * Math.sin(this.direction);

      if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
        this.direction = Math.PI * 2 * Math.random();
        this.updatePosition();
      } else {
        this.x = dx;
        this.y = dy;
      }
    }


// REMOVE THESE FROM THE GLOBAL SCOPE !!!!!S
      var canvas, context;
      init();

      var b1 = Bird();
      var ball1 = Ball();
      var ball2 = Ball();
      var ball3 = Ball();
      var ball4 = Ball();
      // var b2 = Bird(30);
      animate();
      function init() {
          canvas = document.getElementById('canvas');
          ctx = canvas.getContext( '2d' );
          canvas.width = CANVAS_WIDTH;
          canvas.height = CANVAS_HEIGHT;
          createTrail();
      }
      function animate() {
          requestAnimationFrame( animate );
          b1.proccessInput();
          // time = new Date().getTime() * 0.002;
          b1.updatePosition();
          // updatePositionBall();
          ball1.updatePosition();
          ball2.updatePosition();
          ball3.updatePosition();
          ball4.updatePosition();
          b1.move();
          ball1.move();
          ball2.move();
          ball3.move();
          ball4.move();
          // loop();
      };


      function timing() {
        time2 = new Date().getTime() * 0.002;
        // console.log("time 2");
        // console.log(time2);
        // console.log(time2 - time);
        if ( (time2 - time) >= .0001 ) {

          return true;
        }
        return false;
      };

      function createTrail() {
        dot = {
          x: 100,
          y: 100,
          speed: 3,
          direction: Math.PI * 8 * Math.random()
        }
      }

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
