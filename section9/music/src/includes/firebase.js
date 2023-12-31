// firebase/app = core-module --> has ALWAYS to be imported to be able to use other features!
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD1kW13UhXN-j3Nxs5nUgWSdkVRdURU_kg',
  authDomain: 'music-7e137.firebaseapp.com',
  projectId: 'music-7e137',
  storageBucket: 'music-7e137.appspot.com',
  messagingSenderId: '806297896009',
  appId: '1:806297896009:web:652b6b2588268cd8dbeb98'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
// a collection with the name "users" does not have to exist yet for Firebase to store data in it
const usersCollection = db.collection('users')

export { auth, db, usersCollection }
