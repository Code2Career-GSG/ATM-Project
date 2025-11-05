import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface Transaction {
id: number;
type: string;
amount: number;
currency: string;
target_user?: string;
date: string;
}

interface UserData {
id: number | null;
firstName: string;
lastName: string;
username: string;
image: string;
balance: number;
birthday: string;
transactions: Transaction[];
}

const userDataSlice = createSlice({
name: "userData",
initialState: {
id: null as number | null,
firstName: "",
lastName: "",
username: "",
image: "",
balance: 0,
birthday: "",
transactions: [] as Transaction[],
},
reducers: {
setUserData: (state, action: { payload: UserData }) => {
state.id = action.payload.id;
state.firstName = action.payload.firstName;
state.lastName = action.payload.lastName;
state.username = action.payload.username;
state.image = action.payload.image;
state.balance = action.payload.balance;
state.birthday = action.payload.birthday;
state.transactions = action.payload.transactions || [];
},
changeBalance: (state, action: { payload: number }) => {
state.balance = action.payload;
},
pushTransaction: (state, action: { payload: Transaction }) => {
state.transactions.push(action.payload);
},
clearUserData: (state) => {
state.balance = 0;
state.transactions = [];
},
},
});

const loginSlice = createSlice({
name: "login",
initialState: { logged: false },
reducers: {
setLogged: (state, action: { payload: boolean }) => {
state.logged = action.payload;
},
},
});

const currencySlice = createSlice({
name: "currencies",
initialState: {
rates: { USD: 3.7, EUR: 4.1, JOD: 5.2 },
favList: [] as string[],
},
reducers: {
addFavCurrency: (state, action: { payload: string }) => {
if (!state.favList.includes(action.payload)) {
state.favList.push(action.payload);
}
},
removeFavCurrency: (state, action: { payload: string }) => {
state.favList = state.favList.filter((item) => item !== action.payload);
},
},
});

const birthdayPopupSlice = createSlice({
name: "birthdayPopup",
initialState: { show: false },
reducers: {
setShowBirthday: (state, action: { payload: boolean }) => {
state.show = action.payload;
},
},
});

const appSettingsSlice = createSlice({
name: "appSettings",
initialState: { mode: "light" },
reducers: {
changeMode: (state) => {
state.mode = state.mode === "light" ? "dark" : "light";
},
},
});

const store = configureStore({
reducer: {
userData: userDataSlice.reducer,
login: loginSlice.reducer,
currencies: currencySlice.reducer,
birthdayPopup: birthdayPopupSlice.reducer,
appSettings: appSettingsSlice.reducer,
},
});

export const {
setUserData,
changeBalance,
pushTransaction,
clearUserData,
} = userDataSlice.actions;

export const { setLogged } = loginSlice.actions;
export const { addFavCurrency, removeFavCurrency } = currencySlice.actions;
export const { setShowBirthday } = birthdayPopupSlice.actions;
export const { changeMode } = appSettingsSlice.actions;

export default store;
