import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { FIREBASE_API_KEY } from '../config/de/keys'

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'tmny-59a35.firebaseapp.com',
  databaseURL: 'https://tmny-59a35.firebaseio.com',
  projectId: 'tmny-59a35',
  storageBucket: '',
  messagingSenderId: '183258270468',
  appId: '1:183258270468:web:d209fdd6d2c1ac0f33de51'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { dispalyName, email } = userAuth
    const createdAt = newDate()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error creating user ', err.message)
    }
  }

  return userRef
}

// Initialize Firebase
firebase.initializeApp(config)
// Initialize Analytics
firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
