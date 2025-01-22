# -Ecommerce_kadukal
Welcome to the Ecommerce kadukal Project: Milestone 1!

## Features

- **User Authentication**: Secure registration and login with password encryption.
- **Product Management**:
  - View and search for products.
  - Categorized product listings.
  - Add to cart and wishlist functionality.
- **Shopping Cart**:
  - Manage items in the cart.
  - Dynamic price calculations.
  - Secure checkout process.
- **Order Management**:
  - Track orders.
  - View order history.
- **Admin Panel**:
  - Manage products, categories, and user accounts.
  - Track sales and inventory.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Technologies Used

### Frontend:
- HTML5, CSS3, JavaScript (ES6+)
- Frameworks/Libraries: React.js

### Backend:
- Node.js, Express.js

### Database:
- MongoDB (NoSQL) or MySQL (Relational, depending on implementation)

### Other Tools:
- Authentication: JWT (JSON Web Tokens)
- Payment Integration: Stripe/PayPal
- Version Control: Git

## Installation

### Prerequisites:
1. Node.js and npm installed on your system.
2. MongoDB or MySQL database set up.

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     DATABASE_URL=<your-database-url>
     JWT_SECRET=<your-secret-key>
     STRIPE_SECRET_KEY=<your-stripe-key>
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:5000`.

## Usage

- **For Users**:
  1. Register and log in to the platform.
  2. Browse and search for products.
  3. Add desired items to the cart and proceed to checkout.

- **For Admins**:
  1. Log in using admin credentials.
  2. Manage products, categories, and user roles.
  3. Monitor sales and inventory levels.

## Project Structure

```
project-root
├── public
├── src
│   ├── components
│   ├── pages
│   ├── utils
│   ├── App.js
│   └── index.js
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── .env
├── package.json
└── README.md
```

Milestone 2: Project Setup and Login Page
Overview
This milestone focuses on setting up the project structure, configuring the frontend and backend, and implementing a functional login page. It’s part of the e-commerce application development process.

Folder Structure
The project is organized into two main folders:

frontend/: Contains the React application for the user interface.
backend/: Contains the Node.js server to handle API requests.
Key Features Implemented
Frontend:
Set up a React app for building the user interface.
Created the login page, which includes the following features:
A form for users to input their credentials.
Basic validation (e.g., checking for empty fields).
Styled using Tailwind CSS for a responsive layout.
Backend:
created new folder called backend
Tailwind CSS:
Configured Tailwind CSS for streamlined, utility-first styling.


For any queries or contributions, please contact Gautham Ram U M (gauthamram.um@gmail.com).



Milestone 6 

Encrypt the Password:

Use bcrypt to hash the user's password during signup.
Save the hashed password in the database instead of plain text.

Store Complete User Data:
Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.
