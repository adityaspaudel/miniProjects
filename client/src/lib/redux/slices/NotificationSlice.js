
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  type: null, // "success" | "error" | "info"
  visible: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || "info";
      state.visible = true;
    },
    hideNotification: (state) => {
      state.visible = false;
      state.message = null;
      state.type = null;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
