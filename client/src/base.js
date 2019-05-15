import Rebase from "re-base";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDz-OrfPfV8DKY24mGMb6p8Scgj_eIRpQE",
    authDomain: "react-app-32a27.firebaseapp.com",
    databaseURL: "https://react-app-32a27.firebaseio.com",
    projectId: "react-app-32a27",
    storageBucket: "react-app-32a27.appspot.com",
    messagingSenderId: "914704654767",
    appId: "1:914704654767:web:5d70597497770fe0"
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export { app, base, facebookProvider }