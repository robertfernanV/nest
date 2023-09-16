import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from "../../firebase/firebaseConfig"; // Importa el objeto auth de tu archivo firebase.js
import { db } from "../../firebase/firebaseConfig"; // Importa el objeto db de tu archivo firebase.js
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; // Importa las funciones doc y getDoc de la librería de Firestore

// Función auxiliar para obtener el token de autenticación actual
const getToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return user.getIdToken();
  } else {
    return null;
  }
};

// Acción asíncrona para obtener la lista de usuarios desde Firebase
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    const token = await getToken();
    console.log('token', token)
    if (token) {
      try {
        // Realizar la consulta a Firestore para obtener los usuarios
        
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return users;
      } catch (error) {
        throw new Error('No se pudieron obtener los usuarios desde Firestore.');
      }
    } else {
      throw new Error('No se pudo obtener el token de autenticación.');
    }
  });

  export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id, thunkAPI) => {
    const token = await getToken();
    console.log('token', token)
    if (token) {
      try {
        // Realizar la consulta a Firestore para obtener el usuario por id
        console.log('id', id)
        const docRef = doc(db, "users", "PBHUgwIqu9I2yCQnrZ2j");
        console.log('docRef', docRef)
        const docSnap = await getDoc(docRef);
        docSnap.data();
        console.log(docSnap, "span")
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() };
        } else {
          throw new Error('No se encontró el usuario.');
        }
      } catch (error) {
        console.log(error)
        throw new Error('No se pudo obtener el usuario desde Firestore.');
      }
    } else {
      throw new Error('No se pudo obtener el token de autenticación.');
    }
  });

        

// Estado inicial
const initialState = {
  data: {},
  loading: false,
  error: null,
};

// Slice de usuarios
const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Manejo de la acción fetchUsers
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //MAnejo de la acción fetchUserById
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
    }
    );
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    }
    );
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
    );


  },
});

export default usersSlice.reducer;




