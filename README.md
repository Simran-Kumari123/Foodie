# Foodie Restaurant Website 🍽️

A modern, responsive restaurant website built with React frontend and Node.js/Express backend. This full-stack application allows customers to explore the restaurant's menu, make reservations, and learn about the restaurant's team and qualities.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Menu Section**: Browse delicious food items with categories
- **Reservation System**: Easy online table booking
- **Team Showcase**: Meet the restaurant's talented team
- **About Section**: Learn about the restaurant's story and values
- **Modern UI**: Clean and attractive user interface

## 🛠️ Tech Stack

### Frontend
- **React** with Vite
- **CSS3** for styling
- **JavaScript ES6+**

### Backend
- **Node.js** with Express.js
- **MongoDB** (or your preferred database)
- **Environment variables** for configuration

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Simran-Kumari123/Foodie.git
   cd Foodie
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   - Copy `Backend/config/config.env.example` to `Backend/config/config.env`
   - Update the environment variables with your actual values

## 🚀 Running the Application

### Start Backend Server
```bash
cd Backend
npm start
```
Server runs on http://localhost:5000

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:3000

## 📁 Project Structure

```
Foodie/
├── Backend/
│   ├── config/          # Configuration files
│   ├── controller/      # Route controllers
│   ├── database/        # Database connection
│   ├── error/           # Error handling
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── app.js          # Express app setup
│   └── server.js       # Server entry point
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── Pages/       # Page components
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # React entry point
│   └── package.json
└── README.md
```

## 🎨 Components Overview

- **HeroSection**: Main banner with call-to-action
- **Navbar**: Navigation menu
- **About**: Restaurant information
- **Menu**: Food items display
- **Qualities**: Restaurant features
- **Team**: Staff members showcase
- **Reservation**: Booking form
- **Footer**: Contact and links

## 🔧 API Endpoints

- `POST /api/reservation` - Create new reservation
- `GET /api/reservations` - Get all reservations
- Additional endpoints can be added as needed

## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Enjoy building and customizing your restaurant website!** 🎉
