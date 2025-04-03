const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInForm = document.getElementById('signInForm');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Add event listener for sign in form submission
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Here you would typically validate the credentials against a database
    // For this example, we'll use a simple check
    if(email && password) {
        // Successful login - redirect to HomeScreen.html
        window.location.href = "HomeScreen.html";
    } else {
        // Handle unsuccessful login
        alert("Please enter both email and password");
    }
});

const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if(name && email && password) {
        // Successful registration - redirect to HomeScreen.html
        window.location.href = "HomeScreen.html";
    } else {
        alert("Please fill in all fields");
    }
});