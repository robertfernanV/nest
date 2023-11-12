// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import * as FirebaseAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUByAx1nQzNhQT_h8fQCUiV_7P__ZszOc",
  authDomain: "nest-c8a5b.firebaseapp.com",
  projectId: "nest-c8a5b",
  storageBucket: "nest-c8a5b.appspot.com",
  messagingSenderId: "163508104760",
  appId: "1:163508104760:web:502a950c1081c23ca940cd",
};

// Clase que representa la instancia de Firebase
class Firebase {
  constructor() {
    // No se realizan operaciones asincrónicas en el constructor
    this.app = null;
    this.auth = null;
    this.db = null;
  }

  async init() {
    const app = await initializeApp(firebaseConfig);
    const auth = await getAuth(app);
    const db = await getFirestore(app);

    // Inicializa Firebase
    this.app = app;
    this.auth = auth;
    this.db = db;
  }

  static async getInstance() {
    // Si la instancia de Firebase ya existe, devuélvela
    if (Firebase.instance) {
      return Firebase.instance;
    }

    // Crea la instancia de Firebase
    Firebase.instance = new Firebase();

    // Inicializa Firebase y espera a que esté listo
    await Firebase.instance.init();
    // Devuelve la instancia de Firebase
    return Firebase.instance;
  }

  static async getToken() {
    const instance = await this.getInstance();
    const token = await instance.auth.currentUser.getIdToken();
    return token;
  }

  static async getDb() {
    const instance = await this.getInstance();
    return instance.db;
  }

  static async getFirebaseAuth() {
    const instance = await this.getInstance();
    return instance.auth;
  }
}

export default Firebase;
