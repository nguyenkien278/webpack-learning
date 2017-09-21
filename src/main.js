import _ from 'lodash';
import './style.css';
import Icon from './img.jpg';

// import './main.scss';

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	
	var myIcon = new Image();
	myIcon.src = Icon;
	
	element.appendChild(myIcon);
	
	// var element2 = document.createElement('div');
	// var element3 = document.createElement('div').classList.add('level2');
	// element2.classList.add('level1');
	// element2.innerHTML = _.join(['Hello', 'webpack', 'level 1'], ' ');
	// element2.appendChild(element3);
	
    return element;
	
  }
  
  document.body.appendChild(component());