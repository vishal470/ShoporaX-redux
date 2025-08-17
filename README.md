# 🛍️ ShopEase – E-Commerce Website (Redux)

ShopEase is a modern **E-Commerce web application** built with **React, Redux, and Tailwind CSS**.  
It allows users to browse products, view details, and manage authentication with a clean, Amazon-inspired UI.

---

## ✨ Features
- 🔹 Modern & responsive UI with **Tailwind CSS**
- 🔹 **Redux state management** for products & user authentication
- 🔹 **Product catalog** with images, descriptions, and prices
- 🔹 **Product detail page** (Amazon-style)
- 🔹 Add to Cart (UI setup)
- 🔹 Authentication (Login / Register with Redux)
- 🔹 Protected routes for admin features
- 🔹 Gradient backgrounds & modern UI components

---

## 🛠️ Tech Stack
- ⚛️ **React.js** – Frontend library  
- 🎨 **Tailwind CSS** – Styling  
- 📦 **Redux Toolkit / Redux Thunk** – State management & async actions  
- 🌐 **Axios** – API calls  
- 🔑 **React Hook Form** – Form handling  
- 🚏 **React Router DOM** – Navigation  

---



---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/shopease.git
cd shopease
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```
### 4️⃣ Build for production
```bash
npm run build
```

📂 Project Structure
```csharp
shopease/
├── .gitignore
├── README.md
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    └── vite.svg
├── src
    ├── App.jsx
    ├── PageNotFound.jsx
    ├── api
    │   └── axiosconfig.jsx
    ├── components
    │   └── Nav.jsx
    ├── index.css
    ├── main.jsx
    ├── pages
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Products.jsx
    │   ├── ProductsDetails.jsx
    │   ├── Register.jsx
    │   ├── admin
    │   │   ├── CreateProduct.jsx
    │   │   └── UpdateProduct.jsx
    │   └── users
    │   │   ├── Cart.jsx
    │   │   ├── CreateUser.jsx
    │   │   ├── ProfileUser.jsx
    │   │   └── UpdateUser.jsx
    ├── routes
    │   └── Mainroutes.jsx
    └── store
    │   ├── actions
    │       ├── cartAction.jsx
    │       ├── productAction.jsx
    │       └── userAction.jsx
    │   ├── reducers
    │       ├── cartsSlice.jsx
    │       ├── productsSlice.jsx
    │       └── userSlice.jsx
    │   └── store.jsx
└── vite.config.js
```
