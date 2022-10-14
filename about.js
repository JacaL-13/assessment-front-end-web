console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your message has been submitted.')
}

const catPic = document.querySelector('img')
let form = document.querySelector('#contact');

catPic.addEventListener('mouseover', () => alert('You\'re doing great!'))

form.addEventListener('submit', handleSubmit);