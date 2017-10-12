import React from 'react';
import PropTypes from 'prop-types';

let x=0;
let requestId=null;

const LoadingCircle = React.createClass({
    protoTypes: {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        infinite: PropTypes.bool,
    },

    getInitialState: function(){
      return {
          number: this.props.number,
      };
  },

    componentWillReceiveProps(nextProps){
      window.cancelAnimationFrame(requestId);
      let canvas = this.canvas;
      let width = nextProps.width;
      let height = nextProps.height;
      let number = nextProps.number;
      let isInfinite = nextProps.infinite;
      circleLoading(canvas, number, width, height,isInfinite);

    },

    componentDidMount() {
        let canvas = this.canvas;
        let width = this.props.width;
        let height = this.props.height;
        let number = this.props.number;
        let isInfinite = this.props.infinite;
        setTimeout(() => {circleLoading(canvas, number, width, height,isInfinite);},1000);
    },
    
    render: function(){
        return (
            <canvas ref={(can) => {this.canvas = can}} >
                Sorry! Your browser does not support canvas.
            </canvas>
        );
    }
});

function circleLoading(canvas, targetNumber, width=200, height=200, isInfinite = false, radius=140, fontSize=90){
    canvas.width = width;
    canvas.height = height;
    var	ctx = canvas.getContext("2d"),
      centerX = canvas.width/2,
      centerY = canvas.height/2,
      angle = Math.PI*2/100,
      speed = 0.1;
  
    function backGroundCircle(){
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,1)";
      ctx.lineWidth = 30;
      ctx.beginPath();
      ctx.arc(centerX,centerY,radius,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();
    }
  
    function foreGroundCircle(speed){
      ctx.save();
      ctx.strokeStyle = "#3A97F5";
      ctx.lineWidth = 30;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI*0.5, -Math.PI*0.5+angle*speed, false);
      ctx.stroke();
      ctx.restore();
    }
  
    function text(){
      ctx.save();
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.font = fontSize + "px " + "	Fjalla One";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(Math.floor(speed), centerX, centerY);
      ctx.restore();
    }
  
    function loading(){
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backGroundCircle();
      foreGroundCircle(speed);
      text();
      if (isInfinite){
        if(speed >= 100){
          speed = 0;
        }else {
          speed += 1.8;
        }
      }else if(!isInfinite){
        if(speed >= targetNumber){
          return;
        }else {
          speed += 0.9;
        }
      }
      requestId = window.requestAnimationFrame(loading);
    }

    requestId = window.requestAnimationFrame(loading);

  }

export default LoadingCircle;