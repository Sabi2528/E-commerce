// Function to redirect to the sign-in page
function goToSignInPage() {
  window.location.href = 'signin.html';  // Redirect to the sign-in page
}

// Handle 'Get Started' button for email input
document.querySelector('.signin').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  let emailInput = document.querySelector('.input-group input').value;

  if (emailInput === "") {
      alert("Please enter your email address.");
  } else if (!validateEmail(emailInput)) {
      alert("Please enter a valid email.");
  } else {
      window.location.href = 'welcome.html';  // Redirect to a new page
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to check window size and apply navbar styles
function checkWindowSize() {
  if (window.innerWidth < 768) {
      document.getElementById('navbar').classList.add('bg-dark');
  } else {
      document.getElementById('navbar').classList.remove('bg-dark');
  }
}

// Add event listeners
window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize); // Check on page load


