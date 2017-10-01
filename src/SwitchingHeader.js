import React from 'react';
import PropTypes from 'prop-types';

let timerId = null;
const header = ['HTML','CSS','Javascript',
                'React','Node.js','ASP.NET','Ruby',
                'Rails','Bootstrap','Sass','Wordpress',
                'jQuery','C#','Git'];

const SwitchingHeader = React.createClass({
    protoTypes: {
    },

    componentDidMount() {
      const p = this.p;
      timerId = setInterval(function(){
        p.innerHTML = header[Math.floor(Math.random()*header.length)];
      },200)
    },

    componentWillUnmount(){
        clearInterval(timerId);
    },
    
    render: function(){
        return (
            <p ref={ (p) => this.p = p}>HTML</p>
        );
    }
});



export default SwitchingHeader;