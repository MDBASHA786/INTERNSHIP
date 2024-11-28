const firebaseConfig = {
    apiKey: "AIzaSyBR8m4CVU3BlYIbFgCLb_pRqzDo9MIRtPc",
    authDomain: "icon-7c304.firebaseapp.com",
    projectId: "icon-7c304",
    storageBucket: "icon-7c304.appspot.com",
    messagingSenderId: "851619965060",
    appId: "1:851619965060:web:fa0c2d097ba9d832677ad1",
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();