import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { FIREBASE_API_KEY } from '../config/keys'

const config = {
  apiKey: 'AIzaSyD1qbW2FGYncEl6PiJYuc5dtcoyjwPKChY',
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
    const { displayName, email, photoURL, uid } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.warn('Error creating user ', err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

const facebookProvider = new firebase.auth.FacebookAuthProvider()
facebookProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
