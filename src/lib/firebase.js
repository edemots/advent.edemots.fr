import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: appProcess.env.FIREBASE_API_KEY,
  authDomain: appProcess.env.FIREBASE_AUTH_DOMAIN,
  projectId: appProcess.env.FIREBASE_PROJECT_ID,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
