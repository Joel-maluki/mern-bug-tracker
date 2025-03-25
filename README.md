# MERN Bug Tracker

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) application for tracking software bugs. 
Users can **report, update, and manage** bugs efficiently with built-in testing and debugging features.

---

 Features
- **Create, View, Update, and Delete** bug reports
- **User Authentication** (Optional feature)
- **Search and Filter** bugs
- **Status Tracking:** Open, In Progress, Resolved
- **Backend API** built with Express.js & MongoDB
- **Frontend UI** using React & Tailwind CSS
- **Testing:** Jest, Supertest, React Testing Library
- **Debugging Tools:** Chrome DevTools, Node.js Inspector

---

## 📂 Project Setup

### 1️⃣ Clone Repository
```sh
 git clone https://github.com/YOUR-USERNAME/mern-bug-tracker.git
 cd mern-bug-tracker
```

### 2️⃣ Install Dependencies
#### Backend Setup
```sh
 cd server
 npm install
```

#### Frontend Setup
```sh
 cd ../client
 npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in `server/` and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🏃 Running the Project

### Start Backend Server
```sh
 cd server
 npm run dev
```

### Start Frontend
```sh
 cd client
 npm start
```

---

## 🛠️ Testing

### Backend Tests (Jest & Supertest)
```sh
 cd server
 npm test
```

### Frontend Tests (React Testing Library)
```sh
 cd client
 npm test
```

## 🐞 Debugging Techniques
- **Console Logs** (`console.log`) for debugging values
- **Chrome DevTools** for inspecting API calls & UI
- **Node.js Inspector** (`node --inspect server.js`) for backend debugging
- **Error Boundaries** in React for catching UI errors

---

## 📜 License
This project is open-source under the **MIT License**.

---

## 🙌 Contribution
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to GitHub (`git push origin feature-branch`)
5. Open a **Pull Request** 🚀

---

## 📩 Contact
For any issues, feel free to raise an **issue** or contact me at malukijoe7@gmail.com.


