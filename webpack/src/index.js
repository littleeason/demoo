// import _ from 'lodash';
import './style.scss';

function component() {
    let a = 12345;
    alert(a);
    let element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());