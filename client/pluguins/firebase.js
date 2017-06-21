import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyC8hmL3TcG3uhY4J4VqAdwvto8s3DEmOSc',
  authDomain: 'api-risc.firebaseapp.com',
  databaseURL: 'https://api-risc.firebaseio.com',
  projectId: 'api-risc',
  storageBucket: 'api-risc.appspot.com',
  messagingSenderId: '436750473728'
}

const connection = Firebase.initializeApp(config)
const DB = connection.database()
const AUTH = connection.auth()

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    },
    $authFB: {
      get () {
        return AUTH
      }
    }

  })
}
