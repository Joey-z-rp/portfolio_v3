import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from './NavMenu';


const About = React.createClass({

    protoTypes : {
        handleTurn: PropTypes.func.isRequired,
        styleContent: PropTypes.object.isRequired
    },

    componentDidMount(){

        setTimeout(function(){
            const piece = new Pieces(document.querySelector('.my-bio'), "./bio.jpg");
            flyAway(false,0);
            flyAway(true,1);
            window.addEventListener('mousemove', function(e){
                const x = getMousePos(e).x;
                const y = getMousePos(e).y;
                const top = getElementPos('.my-bio').top;
                const bottom = getElementPos('.my-bio').bottom;
                const left = getElementPos('.my-bio').left;
                const right = getElementPos('.my-bio').right;
                const className = document.querySelector('.piece').className;
                if(x > left && x < right && y > top && y < bottom
                     && className === "piece"){
                    flyAway(false,1);
                }else if((x < left || x > right || y < top || y > bottom)
                     && className === "piece fly-away"){
                    flyAway(true,1);
                }
            });
        },100);
    },

    render: function(){
        return (
            <div className="about" style={this.props.styleContent} ref={ (div) => this.div = div} >
                <h2>My past and future</h2>
                <video autoPlay muted loop><source src="./backgroundVideoMinified.mp4" /></video>
                <div className="video-layer"></div>
                <div className="about-me-wrap">
                    <div className="about-me-box">
                        <div className="my-bio"></div>
                        <p>
                            After 8 years' work as an aircraft maintenance engineer, I moved here and started new life. Computer science and information technology have always been my interest, so I decided to follow my heart and change career to be a software developer. I am familiar with HTML, CSS, Javascript, React.js, Node.js, Ruby, Rails etc. I am good at learning and really enjoy it, which I think is a core ability to a developer.
                        </p>
                    </div>
                </div>
                <NavMenu handleTurn={this.props.handleTurn} currentPage="about"/>
            </div>
        );
    }
});


function flyAway(flyBack,isRandom){
    const photoPieces = document.querySelectorAll('.piece');
    for(let i = 0; i < photoPieces.length; i++){
        (function(i,photoPieces,flyBack){
            setTimeout(function(){
                flyBack ? photoPieces[i].className = "piece" :
                photoPieces[i].className = "piece fly-away";
            }, Math.random()*100*isRandom);
        })(i,photoPieces,flyBack);
    }
}

class Pieces {
    constructor(imageDiv, imgsrc) {
        this.options = {
            // Number of pieces / Layout (rows x cols).
            pieces: {rows: 12, columns: 10},
        };
        this.imgsrc = imgsrc;
        this.imageDiv = imageDiv;
        this.init();
    }
    init() {
        // Window sizes.
        this.win = {width: window.innerWidth, height: window.innerHeight};
        // Container sizes.
        this.dimensions = {width: this.imageDiv.offsetWidth, height: this.imageDiv.offsetHeight};
        // Render all the pieces defined in the options.
        this.layout();
        this.setImage();

    }
    layout() {
        // Create the pieces and add them to the DOM (append it to the main element).
        this.pieces = [];
        for (let r = 0; r < this.options.pieces.rows; r++) {
            for (let c = 0; c < this.options.pieces.columns; c++) {
                const piece = this.createPiece(r,c);	
                piece.style.backgroundPosition = `${-1*c*100}% ${-1*100*r}%`;
                this.pieces.push(piece);
            }
        }
    }
    createPiece(row, column) {
        const w = Math.round(this.dimensions.width/this.options.pieces.columns);
        const h = Math.round(this.dimensions.height/this.options.pieces.rows);
        const piece = document.createElement('div');

        piece.style.backgroundImage = `url(${this.imgsrc})`;
        piece.className = 'piece';
        piece.style.width = `${w}px`;
        piece.style.height = `${h}px`;
        piece.style.backgroundSize = `${w*this.options.pieces.columns+4}px auto`;
        this.imageDiv.appendChild(piece);

        return piece;
    }    
    // Set the pieces background image.
    setImage(imgsrc) {
        for(const piece of this.pieces) {
            piece.style.backgroundImage = `url(${this.imgsrc})`;
        }
    }

};

function getMousePos(e){
    let posx = 0;
    let posy = 0;
    if (!e) {let e = window.event};
    if (e.pageX || e.pageY) 	{
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    return {
        x : posx,
        y : posy
    };
}

function getElementPos(className){
    const element = document.querySelector(className);
    return element.getBoundingClientRect();
}


export default About;