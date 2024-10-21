import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const initialState = {
  data: [],
  status: "",
  error: "",
  response: "",
};

export const addChildActivity = createAsyncThunk(
  "action/addChildActivity",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const activity = state.action.data;
      const idFamily = state.user.data.families.find(
        (family) => family.selected
      ).id;
      const childrenId = state.children.data.find(
        (child) => child.selected
      ).childrenId;

      const db = getFirestore();
      const collectionRef = collection(db, "childrenActivities");

      const promises = activity.map((act) => {
        return addDoc(collectionRef, {
          ...act,
          idFamily,
          childrenId,
          createdAt: serverTimestamp(),
        });
      });

      await Promise.all(promises);
      //   return docRefs;
    } catch (error) {
      console.log({ error });
      return rejectWithValue(error.message);
    }
  }
);

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChildActivity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addChildActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
      })
      .addCase(addChildActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setData } = actionSlice.actions;
export default actionSlice.reducer;
