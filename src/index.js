import './static/css/index.css'
import './static/css/tailwind.css'

import { addBall } from './modules/js/addBall';

const add = () => {
    const ball = addBall();
    const ele = document.querySelector('#app')
    ele.appendChild(ball);
}

const app = document.getElementById('app');


const div = document.createElement('div');
app.appendChild(div);
div.className = 'w-full justify-center flex-wrap flex';

const p = document.createElement('p');
div.appendChild(p);
p.className = 'text-[2.3rem] text-center text-red-700 mt-3 font-bold w-full';
p.textContent = 'Hello World';

const button = document.createElement('button');
div.appendChild(button);
button.className = 'bg-green-500 text-white p-2 rounded-md mt-3 w-3/12';
button.textContent = 'Click Me';
button.addEventListener('click', add);