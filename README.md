# RSVPEngine 🎉

A modern, full-stack RSVP management web application that simplifies event planning and guest coordination. Create events, share unique links, and track RSVPs in real-time.

## ✨ Features

- **Easy Event Creation**: Intuitive form-based event setup with name, date/time, location, and description
- **Instant RSVP Tracking**: Real-time attendee responses with Yes/No/Maybe options
- **Shareable Event Links**: Each event gets a unique URL for easy sharing
- **Live Updates**: Dynamic attendee list that updates instantly as responses come in
- **Clean, Responsive UI**: Modern interface that works seamlessly across devices
- **Persistent Data**: MongoDB backend ensures your events and RSVPs are safely stored

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Redux Toolkit** - Efficient state management
- **React Router DOM** - Client-side routing
- **Webpack** - Module bundling and development server
- **Babel** - JavaScript transpilation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Nodemon** - Development server with auto-restart
- **Jest** - Testing framework (configured)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/EventPulse/RSVPEngine.git
   cd RSVPEngine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/rsvpengine
   PORT=3000
   NODE_ENV=development
   ```

4. **Start MongoDB**
   - **Local MongoDB**: Ensure MongoDB service is running
   - **MongoDB Atlas**: Use your Atlas connection string in `MONGO_URI`

5. **Build the application**
   ```bash
   npm run build
   ```

6. **Start the server**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`

## 🧑‍💻 Development

For development with hot reloading:

```bash
# Start the backend server with nodemon
npm run server

# In a new terminal, start the frontend development server
npm run dev
```

## 📁 Project Structure

```
RSVPEngine/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── stylesheets/    # CSS styles
│   │   └── index.js        # App entry point
│   └── webpack.config.js   # Webpack configuration
├── server/                 # Backend Express application
│   ├── config/             # Database configuration
│   ├── controller/         # Business logic controllers
│   ├── model/              # Mongoose data models
│   ├── routes/             # API route definitions
│   └── src/                # Server entry point
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/create` | Create a new event |
| `GET` | `/api/event/:eventId` | Get event details and attendees |
| `POST` | `/api/event/:eventId` | Add RSVP response to event |

## 💡 Usage

### Creating an Event
1. Navigate to the home page
2. Fill out the event form with required details (name and start time)
3. Optionally add end time, location, and description
4. Click "Create Event" to generate a unique event link

### RSVPing to an Event
1. Open the shared event link
2. Enter your name
3. Select your response: Yes, No, or Maybe
4. Your response will instantly appear in the attendees list

## 📝 Scripts

- `npm start` - Start the production server
- `npm run server` - Start development server with nodemon
- `npm run dev` - Start frontend development server
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](https://github.com/EventPulse/RSVPEngine/issues) on GitHub.

---

**Built with ❤️ for seamless event management**
