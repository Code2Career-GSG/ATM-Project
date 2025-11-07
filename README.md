# **🏦 Smart ATM App — Student Documentation**

The Smart ATM App is a simple banking simulation built with React. It lets users log in, check their balance, deposit or withdraw money, and track transactions,  just like a real ATM. You’ll also practice advanced concepts like React Router, and state management.

## **🎯 Project Objective**

Build a **React-based ATM system** that simulates basic banking operations with a real-world touch.

This project helps students practice **React components**, **props**, **state**, **React Router**, and **API handling**.

The system should let users:

- Log in using a mock account
- View balance and account details
- Deposit and withdraw money
- Manage a currency **watchlist** (using state management)
- Reset account data
- View a birthday popup (if it’s their birthday)
- Experience proper routing, including a **404 Not Found** page

---

## **⚙️ Core Features**

### **🧍 1. Login System**

- The user logs in with a **username** and **PIN** ([from mock API](https://www.youtube.com/watch?v=QNuXyezXBnA)).
- If credentials match, the user is redirected to the **Dashboard**.
- If incorrect, an error message appears.
- The system loads user info (name, birthday, and balance) from a **mock API**.
- Example mock data:

```json
{
  "id": 2,
  "user_name": "sarah-abuzeneh",
  "first_name": "Sarah",
  "last_name": "Abu Zeneh",
  "profile_img": "https://i.pinimg.com/236x/d1/4a/b5/d14ab57b9ddcfa1240ffabd13f8b609c.jpg",
  "pin": "Sa1234",
  "balance": 1600,
  "birthday": "2000-10-20",
  "transactions": [
    {
      "id": 1,
      "type": "Deposit",
      "amount": 100,
      "currency": "ILS",
      "date": "2025-10-24T10:00:00Z"
    },
    {
      "id": 2,
      "type": "Transfer",
      "amount": 50,
      "currency": "ILS",
      "target_user": "laith-nazzal",
      "date": "2025-10-24T12:15:00Z"
    }
  ]
}
```

- If the mock API is unreachable or limited, show an error message.

---

### **💰 2. Balance Display**

- Shows the **current account balance**.
- Color indicates account status:
    - 🟢 Positive balance
    - 🔴 Zero balance
- The balance is updated dynamically after each deposit or withdrawal.

---

### **➕ 3. Deposit Money**

- User enters a **deposit amount**.
- Validates positive numeric values.
- Update the API
- Creates a transaction record including:
    - Type: Deposit
    - Amount
    - Date

**Example:**

💰 Deposit 100 ILS → New balance: 1600 ILS

---

### **➖ 4. Withdraw Money**

- User enters a **withdrawal amount**.
- Validates:
    - Amount is positive
    - Sufficient balance
- Updates the balance and saves a transaction record.
- Shows an error if the balance is insufficient.

**Example:**

🏧 Withdraw 200 ILS → New balance: 1400 ILS

---

### **💹 7. Currency Watchlist (State Management Feature)**

**Objective:**

Show a list of currencies and let users **add them to a watchlist** using a ⭐ button.

**Example mock data:**

**🧩 Requirements**

- Use this **mock data**:

```json
{
  "USD": 3.7,
  "EUR": 4.1,
  "JOD": 5.2
}
```

- Display all currencies with their exchange rates.
- Each currency has a **⭐ button** to add it to the watchlist.
- A **Watchlist page** shows only the currencies the user added.
- Use **global state** (Context API, Redux Toolkit, or Zustand) to manage the watchlist.
- **No localStorage**, no API calls, no persistence — just in-memory state.

---

### **🔁 8. Toast Notifications**

- Provide instant feedback to users after performing actions — such as deposits, withdrawals, transfers, or resets — without interrupting their workflow.
- Toast notifications improve the user experience by confirming successful operations or alerting the user about errors.

---

### **🔁 9. Reset / Clear Data**

- A button allows the user to:
    - Reset balance to zero
    - Clear all transactions
- Optional: confirmation popup (“Are you sure you want to reset your account?”).
- Data reset on mock API (DELETE).

---

**🎂 10. Birthday Popup**

- When a user logs in, the app checks if **today’s date matches** the user’s birthday.
- If true, show a popup message, e.g.

🎉 *Happy Birthday, Sarah!* 🎂

Wishing you a day full of happiness and joy! 💖

- Popup appears only **once per login session —  Think how we can do it!**

---

### **🗺️ 10. Page Routing**

The app uses **React Router** to navigate between pages.

| **Page Path** | **Description** |
| --- | --- |
| / | Login Page |
| /dashboard | Main ATM screen (balance, quick actions) |
| /deposit | Deposit money form |
| /withdraw | Withdraw money form |
| /history | Transaction history (paginated) |
| /watchlist | Currency Watchlist page |
| /settings | Reset account, theme toggle, etc. |
| * | Custom 404 Page (invalid route) |

---

### **🚫 11. 404 Page (Not Found)**

When the user visits an invalid URL, show a friendly message:

⚠️ *Oops! Page not found*

The page you’re looking for doesn’t exist.

[Go Home] → redirects to `/dashboard`

---

### **🧠 12. Mock API**

### **🧰 Mock API**

Students should use a **mock REST API** (e.g. [MockAPI.io](https://mockapi.io/)) to store:

- User info
- Transactions
- Watchlist (optional)

If the user **exceeds the allowed limit** of the mock API (for example, the maximum number of records that can be added), an **error message** should appear — for example:

> ⚠️ You have reached the maximum limit allowed by the mock API.
> 

For more details about MockAPI, check out this [**video tutorial**](https://www.youtube.com/watch?v=QNuXyezXBnA).

---

### **🎨 13. Optional UI Enhancements**

Encourage students to customize their app with:

- 🌓 **Dark/Light mode toggle**
- 📊 **Summary bar** (total deposits, withdrawals, and balance)
- 🎉 **Confetti animation** for birthdays
- 🔒 **Protected routes** (redirect if not logged in)

---

## **🧩 Expected User Journey**

1. User opens the app → sees the **login page**.
2. Logs in using mock account → dashboard appears.
3. If it’s their birthday → birthday popup appears once.
4. User can deposit, withdraw, or view history (with pagination).
5. User can add or remove currencies in the **Watchlist**.
6. User can reset their account anytime.
7. Invalid route → 404 Not Found page.
8. If mock API fails → error message.

---

## **🎓 Learning Outcomes**

By completing this project, students will:

- Build a multi-page React app with real-world ATM logic
- Use mock APIs
- Manage and persist data using **state management**
- Apply **React Router** and conditional rendering
- Understand **global state**, actions, and persistence patterns
- Strengthen problem-solving and debugging skills

--- 
✨ Happy Coding!