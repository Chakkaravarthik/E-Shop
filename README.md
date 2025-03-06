# E-Shop React Application

## Overview
This is a React-based E-Shop application built with [Vite](w) for fast development and [Redux](w) for state management. The application allows users to browse categories, view items, add items to the cart, and place orders.

## Features
- **State Management:** Implemented using Redux to manage categories, items, and cart state.
- **Navigation:** Users can navigate between the home page, category pages, item description, cart, and orders listing page.
- **Cart Management:** Users can add, remove, and update item quantities in the cart.
- **Order Management:** Orders are generated with unique order IDs and displayed in the orders listing page.

## Tech Stack
- **Frontend:** React, Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Styling:** CSS / BootstrapCSS

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](w) (v14 or later)
- [npm](w) or [yarn](w)

### Steps to Set Up Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/e-shop-react.git
   cd e-shop-react
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
   or using yarn:
   ```sh
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
   or using yarn:
   ```sh
   yarn dev
   ```
4. **Open the app in your browser:**
   The app will be running at `http://localhost:5173/`

## Project Structure
```
E-Shop/
│-- src/
│   │-- components/    # Reusable components
│   │-- pages/         # Page components (Home, Cart, Orders, etc.)
│   │-- redux/         # Redux store, slices
│   │-- routes/        # React Router setup
│   │-- App.jsx        # Main app component
│   │-- main.jsx       # Entry point
│-- public/            # Static assets
│-- index.html         # Main HTML file
│-- package.json       # Dependencies and scripts
│-- README.md          # Project documentation
```

## Redux Store Structure
- **store.js:** Configures Redux store
- **slices/**
  - `categoriesSlice.js`: Manages categories state
  - `itemsSlice.js`: Handles individual items
  - `cartSlice.js`: Manages cart items and quantities
  - `ordersSlice.js`: Stores order history

## Available Scripts
- `npm run dev` – Starts the development server
- `npm run build` – Builds the project for production
- `npm run preview` – Previews the production build

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your fork.
5. Submit a pull request.

## License
This project is licensed under the MIT License.

---
### Happy Coding! 🚀

