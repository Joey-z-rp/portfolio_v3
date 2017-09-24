import React from 'react';
import PropTypes from 'prop-types';

const HomePageBackground = React.createClass({
    protoTypes: {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    },

    componentDidMount() {
        let canvas = this.canvas;
        let width = this.props.width;
        let height = this.props.height;
        space(canvas, width, height);
    },
    
    render: function(){
        return (
            <canvas 
                ref={(can) => {this.canvas = can}} 
                style={{width : this.props.width -10 , height: this.props.height -5}}>
                Sorry! Your browser does not support canvas.
            </canvas>
        );
    }
});


function space(canvas, width, height){
    let w = canvas.width = width - 10;
    let h = canvas.height = height - 5;
    let ctx = canvas.getContext('2d');

    function Ball(){
        this.x = 0;
        this.y = 0;
        this.xpos = Math.random() * 3000 - 1500;
        this.ypos = Math.random() * 3000 - 1500;
        this.zpos = Math.random() * 1000;
        this.vx = 0;
        this.vy = 0;
        this.vz = -1;
        this.radius = Math.random() * 1 +10;
        this.scaleX = 1;
        this.scaleY = 1;
        this.colorArray = [
          '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
          '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
          '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
          '#FF5722'
          ];
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
        this.visible = true;
    }

    Ball.prototype.draw = function(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        var gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        gradient.addColorStop(0,"rgba(255,255,255,1)");
        gradient.addColorStop(0.2,"rgba(0,255,255,1)");
        gradient.addColorStop(0.3,"rgba(0,0,100,1)");
        gradient.addColorStop(1,"rgba(0,0,0,0.1)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }

    var balls = [],
    fl = 150,
    vpX = w / 2,
    vpY = h / 2,
    gravity = 0;

    for(var i=0; i<200; i++){
        var ball = new Ball();
        balls.push(ball);
    }

    function drawAllBalls(ctx){
        for(var i = 0; i < balls.length; i++){
            if(balls[i].visible){
                balls[i].draw(ctx);
            }
        }
    }

    function checkScreen(ball){
        if(ball.zpos - ball.radius < -fl){
            ball.zpos += 1000;
        }
    }

    function move(ball){
        checkScreen(ball);
        ball.vy += gravity;
        ball.xpos += ball.vx;
        ball.ypos += ball.vy;
        ball.zpos += ball.vz;
        if (ball.zpos > -fl){
            var scale = fl / (fl + ball.zpos);
            ball.scaleX = ball.scaleY = scale;
            ball.x = vpX + ball.xpos * scale;
            ball.y = vpY + ball.ypos * scale;
            ball.visible = true;
        }else{
            ball.visible = false;
        }
    }

    function checkIE(){
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        return isIE || isEdge;
    }
    
    //detect mobile device
    
    function detectmob() { 
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
        return true;
        }
        else {
        return false;
        }
    }

    if(false){
        balls.forEach(move);
        balls.sort(function(a, b){ return (b.zpos - a.zpos);});
        drawAllBalls(ctx);
    }else{
        (function draw(){
            window.requestAnimationFrame(draw);
            ctx.clearRect(0, 0, w, h);
            balls.forEach(move);
            balls.sort(function(a, b){ return (b.zpos - a.zpos);});
            drawAllBalls(ctx);
        }())
    }
}


export default HomePageBackground;