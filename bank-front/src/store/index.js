import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // configurer le middleware pour désactiver la vérification de sérialisation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
