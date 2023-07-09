import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactsSlice";
import filterReducer from "./filterReducer";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

const combContactsReducer = combineReducers({
	contacts: contactSlice,
	filter: filterReducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["filter"],
};

const persistedContactsReducer = persistReducer(persistConfig, combContactsReducer);

const store = configureStore({
	reducer: persistedContactsReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);

export default store;
