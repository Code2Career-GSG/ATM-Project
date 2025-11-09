import { configureStore, createSlice } from "@reduxjs/toolkit";
const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

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
    id: storedData.id || null,
    firstName: storedData.firstName || "",
    lastName: storedData.lastName || "",
    username: storedData.username || "",
    image: storedData.image || "",
    balance: storedData.balance || 0,
    birthday: storedData.birthday || "",
    transactions: storedData.transactions || [],
  },
  reducers: {
    setUserData: (state, action) => {
      Object.assign(state, action.payload);
      localStorage.setItem("userData", JSON.stringify(state));
    },
    changeBalance: (state, action: { payload: number }) => {
      state.balance = action.payload;
      localStorage.setItem("userData", JSON.stringify(state));
    },
    pushTransaction: (state, action: { payload: Transaction }) => {
      state.transactions.push(action.payload);
      localStorage.setItem("userData", JSON.stringify(state));
    },
    clearUserData: (state) => {
      state.balance = 0;
      state.transactions = [];
      localStorage.setItem("userData", JSON.stringify(state));
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
    favList: JSON.parse(localStorage.getItem("favList") || "[]") as string[],
  },
  reducers: {
    addFavCurrency: (state, action: { payload: string }) => {
      if (!state.favList.includes(action.payload)) {
        state.favList.push(action.payload);
      }
      localStorage.setItem("favList", JSON.stringify(state.favList));
    },
    removeFavCurrency: (state, action: { payload: string }) => {
      state.favList = state.favList.filter((item) => item !== action.payload);
      localStorage.setItem("favList", JSON.stringify(state.favList));
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

const savedMode = localStorage.getItem("mode") || "light";

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState: { mode: savedMode },
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
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
export type RootState = ReturnType<typeof store.getState>;

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
