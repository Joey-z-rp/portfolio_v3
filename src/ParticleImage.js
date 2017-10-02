import React from 'react';
import PropTypes from 'prop-types';
var animationId;

const ParticleImage = React.createClass({
    protoTypes: {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
	},
	
	getInitialState: function(){
        return {
          animation: null,
        };
    },

    componentDidMount() {
        let canvas = this.canvas;
        let image = this.img;
        let width = this.props.width;
        let height = this.props.height;
        setTimeout(() => {particleImage(canvas, image, width, height)},0);
	},
	
	componentWillUnmount(){
		console.log('unmount');
		window.cancelAnimationFrame(animationId);
	},
    
    render: function(){
        return (
            <div className="particle-image">
                <canvas ref={(can) => {this.canvas = can}} >
                    Sorry! Your browser does not support canvas.
                </canvas>
                <img src={this.props.url} ref={(img) => {this.img = img}} />
            </div>
        );
    }
});

function particleImage(canvas, image, width, height){
	var img = image,
		w = canvas.width = width,
		h = canvas.height = height,
		ctx = canvas.getContext("2d");

	var gridX = 3,
		gridY = 3;

	function Particle(x, y){
		this.x = x;
		this.y = y;
		this.radius = 1.5;
		this.colorArray = [
		  // '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
		  // '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
		  // '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
		  // '#FF5722'
		  '#e06518'
		  ];
		this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
		this.scale = 0;
		this.speed = Math.random() * 360;
		this.initialScale = Math.random() + 1;
		this.speedIncrement = Math.random()*5 + 15;
	}

	Particle.prototype.draw = function(ctx){
		this.scale = this.initialScale + Math.sin(this.speed * Math.PI / 180);
		this.speed += this.speedIncrement;
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.scale(this.scale, this.scale);
		ctx.beginPath();
		ctx.arc(this.x / this.scale, this.y / this.scale, this.radius, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.restore();
	}

	function Shape(){
		this.placement = [];
	}

	Shape.prototype.getParticles = function(ctx){
		ctx.save();
	  	ctx.drawImage(img, 0, 0, w, h);
		ctx.restore();
		var data = ctx.getImageData(0, 0, w, h).data;

		for (var row = 0; row < h; row += gridY){
			for(var col = 0; col < w * 4; col += 4 * gridX){
				if(data[row * w * 4 + col] || 
					data[row * w * 4 + col + 1] || 
					data[row * w * 4 + col + 2] || 
					data[row * w * 4 + col + 3] ){
					var particle = new Particle(col /4 + 1, row);
					this.placement.push(particle);
				}
			}
		}
	}

	Shape.prototype.display = function(ctx){
		for (var i = 0; i < this.placement.length; i++){
			this.placement[i].draw(ctx);
		}
	}

	var shape = new Shape();
	shape.getParticles(ctx);


	function draw(){
		ctx.clearRect(0, 0, w, h);
		shape.display(ctx);
		animationId = window.requestAnimationFrame(draw);
		console.log(image.src);
	}
	animationId = window.requestAnimationFrame(draw);

}


export default ParticleImage;