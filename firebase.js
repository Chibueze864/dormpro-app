import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";
import { getDatabase, ref as dbRef, set } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";




console.log("A")


const firebaseConfig = {

  apiKey: "AIzaSyBCZEq2IDXdsakSge_eXfqDPL376DJygcg",

  authDomain: "dorm-pro.firebaseapp.com",

  projectId: "dorm-pro",

  storageBucket: "dorm-pro.appspot.com",

  messagingSenderId: "340983945626",

  appId: "1:340983945626:web:b655b8a3c07a1a80cf8223",

  measurementId: "G-T1KPBH5SSP"

};

  // Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);


let play = ()=>{
  console.log("play")
}

// Function to handle user registration
function registerUser(e) {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const username = document.getElementById('register-username').value;
  const profilePictureInput = document.getElementById('register-picture');

  // Check if all required fields are entered
  if (!email || !password || !username || !profilePictureInput.files[0]) {
    alert('Please enter all required fields (email, password, username, and profile picture).');
    return; // Exit the function if any field is missing
  }

  // 1. Register the user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // 2. Upload profile picture to Firebase Storage
      const storageRef = ref(storage, `profilePictures/${user.uid}`);
      const uploadTask = uploadBytes(storageRef, profilePictureInput.files[0]);

      // 3. Handle the upload task
      uploadTask.then((snapshot) => {
        // Get the download URL of the uploaded image
        return getDownloadURL(storageRef);
      }).then((downloadURL) => {
        // 4. Save user information to Firebase Realtime Database
        const userInformation = {
          email: email,
          username: username,
          profilePictureURL: downloadURL
        };

        // Assuming you have a "users" node in your Realtime Database
        const dbUploadRef = dbRef(database, `users/${user.uid}`);
        set(dbUploadRef, userInformation)
          .then(() => {
            console.log('User registered successfully!');
            if (callback) {
              callback(user);
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.error("Error setting data:", error);
          });
      }).catch((error) => {
        // Handle image upload errors
        alert(`Image upload failed: ${error.message}`);
      });
    })
    .catch((error) => {
      // Handle registration errors
      alert(`Registration failed: ${error.message}`);
    window.location.href = "/register.html";
    });
}