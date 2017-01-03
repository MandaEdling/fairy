//The fairy-test code js animation was created using 
//William Malone's animation tutorial, only minor changes have been 
//made to the code: IDs and var tags along with the use of multiple 
//canvases instead of one.  Other animations effects have been added 
//using css3 that are not part of the following javascript.
//
// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 
(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// New function to create fairy body
(function () {
			
	var fairy,
		fairyImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  fairy.update();
	  fairy.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas, the fairy's body
	canvas = document.getElementById("fairyAnimation");
	canvas.width = 460;
	canvas.height = 460;
	
	// Create fairy body sprite sheet
	fairyImage = new Image();	
	
	// Create fairy body sprite
	fairy = sprite({
		context: canvas.getContext("2d"),
		width: 920,
		height: 400,
		image: fairyImage,
		numberOfFrames: 2,
		ticksPerFrame: 8
	});
	
	// Load fairy body sprite sheet
	fairyImage.addEventListener("load", gameLoop);
	fairyImage.src = "images/fairyFlySpriteBody.png";

} ());

// New function to create fairy wings
(function () {
			
	var wings,
		wingsImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  wings.update();
	  wings.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas, the wings body
	canvas = document.getElementById("wingsAnimation");
	canvas.width = 460;
	canvas.height = 460;
	
	// Create fairy wings sprite sheet
	wingsImage = new Image();	
	
	// Create fairy wings sprite
	wings = sprite({
		context: canvas.getContext("2d"),
		width: 1840,
		height: 400,
		image: wingsImage,
		numberOfFrames: 4,
		ticksPerFrame: 4
	});
	
	// Load fairy wings sprite sheet
	wingsImage.addEventListener("load", gameLoop);
	wingsImage.src = "images/fairyWingsSprite2.png";

}());

// New function to create fairy eyes
(function () {
			
	var eyes,
		eyesImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  eyes.update();
	  eyes.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas, the wings body
	canvas = document.getElementById("eyesAnimation");
	canvas.width = 460;
	canvas.height = 460;
	
	// Create fairy wings sprite sheet
	eyesImage = new Image();	
	
	// Create fairy wings sprite
	eyes = sprite({
		context: canvas.getContext("2d"),
		width: 7820,
		height: 400,
		image: eyesImage,
		numberOfFrames: 17,
		ticksPerFrame: 16
	});
	
	// Load fairy wings sprite sheet
	eyesImage.addEventListener("load", gameLoop);
	eyesImage.src = "images/fairyEyesSprite.png";

}());

// New function to create fairy legs
(function () {
			
	var legs,
		legsImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  legs.update();
	  legs.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas, the arms body
	canvas = document.getElementById("legsAnimation");
	canvas.width = 460;
	canvas.height = 460;
	
	// Create fairy arms sprite sheet
	legsImage = new Image();	
	
	// Create fairy arms sprite
	legs = sprite({
		context: canvas.getContext("2d"),
		width: 3680,
		height: 400,
		image: legsImage,
		numberOfFrames: 8,
		ticksPerFrame: 8
	});
	
	// Load fairy arms sprite sheet
	legsImage.addEventListener("load", gameLoop);
	legsImage.src = "images/fairyLegsSprite.png";

}());

// New function to create fairy arms
(function () {
			
	var arms,
		armsImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  arms.update();
	  arms.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas, the wings body
	canvas = document.getElementById("armsAnimation");
	canvas.width = 460;
	canvas.height = 460;
	
	// Create fairy arms sprite sheet
	armsImage = new Image();	
	
	// Create fairy arms sprite
	arms = sprite({
		context: canvas.getContext("2d"),
		width: 920,
		height: 400,
		image: armsImage,
		numberOfFrames: 2,
		ticksPerFrame: 16
	});
	
	// Load fairy arms sprite sheet
	armsImage.addEventListener("load", gameLoop);
	armsImage.src = "images/fairyArmsSprite.png";

}());