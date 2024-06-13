import storage from "redux-persist/lib/storage";

//this is needed to store auth state in the browser
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export default persistConfig;
