document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('signupform');
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const firstname = document.getElementById('firstname').value;
		const lastname = document.getElementById('lastname').value;
		const email = document.getElementById('email').value;

		form.reset();
		alert("Thank you for signing up!");
	});
}); 