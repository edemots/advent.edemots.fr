import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: appProcess.env.FIREBASE_API_KEY,
  authDomain: appProcess.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: appProcess.env.DATABASE_URL,
  projectId: appProcess.env.FIREBASE_PROJECT_ID,
  storageBucket: appProcess.env.STORAGE_BUCKET,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export const storage = firebase.storage()
