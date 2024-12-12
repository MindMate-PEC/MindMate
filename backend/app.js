const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // Enable CORS for client
app.use(helmet()); // Add security headers
app.use(morgan('dev')); // Logging HTTP requests
app.use(cookieParser()); // Parse cookies

// Base route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the backend API!' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;