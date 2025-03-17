// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a response message
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  responseMessage.style.color = 'green';

  // Clear the form
  document.getElementById('contactForm').reset();
});