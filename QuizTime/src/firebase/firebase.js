import firebase from 'firebase';

const firebaseConfig = {
	 apiKey: "AIzaSyCmRE1sDyY1HRSerX5_DMsKQNLV0flPbjs",
  	authDomain: "quiztime-therebootedcoder.firebaseapp.com",
  	projectId: "quiztime-therebootedcoder",
  	storageBucket: "quiztime-therebootedcoder.appspot.com",
  	messagingSenderId: "725503262291",
  	appId: "1:725503262291:web:ea11c94561c38409f510a6",
  	measurementId: "G-KWH2G1Y029"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;