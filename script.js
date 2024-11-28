// script.js
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signInButton');
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const signUpButton = document.getElementById('signUp');
    const signInB = document.getElementById('signIn');


    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });
      
      signInB.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Sign-up form submitted');
            const name = signUpForm.querySelector('input[placeholder="Name"]').value;
            const email = signUpForm.querySelector('input[placeholder="Email"]').value;
            const password = signUpForm.querySelector('input[placeholder="Password"]').value;
    
            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
            addUser(name, email, password);
        });
    }
    
    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = signInForm.querySelector('input[placeholder="Email"]').value;
            const password = signInForm.querySelector('input[placeholder="Password"]').value;
            signInUser(email, password);
        });
    }
    

    // Check the user's authentication state
    auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in, change the sign-in button text to "Welcome!"
            signInButton.innerHTML = 'Welcome!';
            signInButton.classList.add('sign-in-success');
            signInButton.href = '#'; // Prevents navigating away
        } else {
            // No user is signed in, keep the button as "Sign In"
            signInButton.innerHTML = 'Sign In';
            signInButton.href = 'register/reg.html';
        }
    });
});

function addUser(name, email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
                name: name,
                email: email
            });
        })
        .then(() => {
            alert('User created successfully!');
            window.location.href = '../int.html';
        })
        .catch((error) => {
            console.error('Error adding user:', error);
            alert(`Error: ${error.message}`);
        });
}

function signInUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Signed in successfully!');
            window.location.href = '../int.html';
        })
        .catch((error) => {
            console.error('Error signing in user:', error);
            alert(`Error: ${error.message}`);
        });
}
