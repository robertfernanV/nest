import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Firebase from "../../firebase/firebaseConfig"; // Importa el objeto db de tu archivo firebase.js
import { collection, getDocs, query, where } from "firebase/firestore"; // Importa las funciones doc y getDoc de la librería de Firestore

export const getChildren = createAsyncThunk(
  "children/getChildren",
  async (familyId) => {
    try {
      const db = await Firebase.getDb();
      try {
        const childrenActivitiesRef = collection(db, "childrens");
        const childrensQuery = query(
          childrenActivitiesRef,
          where("familyId", "==", familyId)
        );

        const querySnapshot = await getDocs(childrensQuery);
        const data = querySnapshot.docs.map((doc) => doc.data());
        return data.map((child) => ({
          ...child,
          selected: false,
          createdAt: child.createdAt
            ? child.createdAt.toDate().toISOString()
            : null,
        }));
      } catch (err) {
        throw new Error("No se pudieron obtener los usuarios desde Firestore.");
      }
    } catch (err1) {
      console.log("ERROR GET CHILDREN", { err1 });
    }
  }
);

export const getChildrenActivities = createAsyncThunk(
  "children/getChildren",
  async (childrenId) => {
    try {
      const x = "";
    } catch (err) {
      console.error({ err });
    }
  }
);

const initialState = () => {
  const children = JSON.parse(localStorage.getItem("children")) || {
    data: {},
    loading: false,
    error: null,
  };
  return children;
};

const childrenSlice = createSlice({
  name: "children",
  initialState: initialState(),
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setChildrenSelected: (state, action) => {
      state.data.forEach((child) => {
        if (child.childrenId !== action.payload.id && child.selected) {
          child.selected = false;
        }
        if (child.childrenId === action.payload.id) {
          child.selected = action.payload.selected;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChildren.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getChildren.fulfilled, (state, action) => {
      state.loading = true;
      state.data = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(getChildren.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setLoading, setChildrenSelected } = childrenSlice.actions;
export default childrenSlice.reducer;
