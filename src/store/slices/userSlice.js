import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Firebase from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore"; // Importa las funciones doc y getDoc de la librería de Firestore

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

export const fetchFamilyByEmail = createAsyncThunk(
  "users/fetchFamilyByEmail",
  async (email) => {
    const token = await Firebase.getToken();
    if (token) {
      const db = await Firebase.getDb();
      try {
        // Realizar la consulta a Firestore para obtener el usuario por email
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          if (userData.id_family) {
            const idFamily = userData.id_family;

            // Realizar la consulta a Firestore para obtener la familia por idFamily
            const familyDocRef = doc(db, "families", idFamily);
            const familyDocSnap = await getDoc(familyDocRef);

            if (familyDocSnap.exists()) {
              return {
                id: userDoc.id,
                families: [
                  {
                    id_family: familyDocSnap.id,
                    name: familyDocSnap.data().name,
                    id: familyDocSnap.id,
                    selected: true,
                    image: familyDocSnap.data().image,
                  },
                  {
                    id: "0",
                    name: "Nueva Familia",
                    selected: false,
                  },
                ],
                role: userData.role,
              };
            } else {
              throw new Error("No se encontró la familia.");
            }
          } else {
            const families = [
              ...userData.families.map((family) => ({
                ...family,
                selected: false,
              })),
            ];
            return {
              id: userData.id,
              families,
            };
          }
        } else {
          throw new Error(
            "No se encontró el usuario con el email proporcionado."
          );
        }
      } catch (error) {
        throw new Error("No se pudo obtener la información desde Firestore.");
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
      state.data.families.forEach((family) => {
        if (family.id !== action.payload.id && family.selected) {
          family.selected = false;
        }
        if (family.id === action.payload.id) {
          family.selected = action.payload.selected;
        }
      });

      localStorage.setItem("user", JSON.stringify({ ...state }));
    },
    clearState: () => ({
      data: {},
      loading: false,
      error: null,
    }),
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

    //MAnejo de la acción fetchFamilyByEmail
    builder.addCase(fetchFamilyByEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFamilyByEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;

      localStorage.setItem(
        "user",
        JSON.stringify({ ...initialState(), data: action.payload })
      );
    });
    builder.addCase(fetchFamilyByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFamilySelected, clearState } = usersSlice.actions;
export default usersSlice.reducer;
