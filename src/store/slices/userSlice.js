import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { auth } from "../../firebase/firebaseConfig"; // Importa el objeto auth de tu archivo firebase.js
// import { db } from "../../firebase/firebaseConfig"; // Importa el objeto db de tu archivo firebase.js
// import { getToken } from "../../firebase/firebaseConfig";
import Firebase from "../../firebase/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; // Importa las funciones doc y getDoc de la librería de Firestore

// Función auxiliar para obtener el token de autenticación actual
// export const getToken = async () => {
//   const user = auth.currentUser;

//   if (user) {
//     return user.getIdToken();
//   } else {
//     return null;
//   }
// };

// Acción asíncrona para obtener la lista de usuarios desde Firebase
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const db = await Firebase.getDb();
  try {
    // Realizar la consulta a Firestore para obtener los usuarios

    const snapshot = await getDocs(collection(db, "users"));
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log({ users });
    return users;
  } catch (error) {
    throw new Error("No se pudieron obtener los usuarios desde Firestore.");
  }
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async () => {
    const token = await Firebase.getToken();

    if (token) {
      const db = await Firebase.getDb();
      try {
        // Realizar la consulta a Firestore para obtener el usuario por id
        const docRef = doc(db, "users", "PBHUgwIqu9I2yCQnrZ2j");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const families = [
            ...docSnap
              .data()
              .families.map((family) => ({ ...family, selected: false })),
            {
              id: "0",
              name: "Nueva Familia",
              selected: false,
            },
          ];
          return {
            id: docSnap.id,
            families,
          };
        } else {
          throw new Error("No se encontró el usuario.");
        }
      } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener el usuario desde Firestore.");
      }
    } else {
      throw new Error("No se pudo obtener el token de autenticación.");
    }
  }
);

// Estado inicial
const initialState = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    data: {},
    loading: false,
    error: null,
  };
  return user;
};

// Slice de usuarios
const usersSlice = createSlice({
  name: "user",
  initialState: initialState(),
  reducers: {
    setFamilySelected: (state, action) => {
      state.data.families.find(
        (family) => family.id === action.payload.id
      ).selected = action.payload.selected;
      localStorage.setItem("user", JSON.stringify({ ...state }));
    },
  },
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
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;

      localStorage.setItem(
        "user",
        JSON.stringify({ ...initialState(), data: action.payload })
      );
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFamilySelected } = usersSlice.actions;
export default usersSlice.reducer;
