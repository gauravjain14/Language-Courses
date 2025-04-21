const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const more_content = document.createElement('p');
more_content.classList.add('more-content');
more_content.textContent = 'This is really cool!';
content.appendChild(more_content);

const div_content = document.createElement('div');
const div_h1 = document.createElement('h1');
div_h1.textContent = 'I am a div';
div_content.appendChild(div_h1);
const div_p = document.createElement('p');
div_p.textContent = 'ME TOO!';
div_content.appendChild(div_p);
container.appendChild(div_content);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'palegreen';
    alert('Button clicked and color changed!');
});