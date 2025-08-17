const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const User = require("./models/User");
const { checkAuth, onlyForLoggedINUsers } = require("./middlewares/user");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

// --- DB Connect ---
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 10000, // 10s timeout instead of hanging forever
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

// --- Server Setup ---
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: "https://mission-parivartan3.vercel.app/",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuth);

const userRoute = require("./routes/userRoutes");
const formRoute = require("./routes/formRoutes");

app.use("/api/user", userRoute);
app.use("/api/treeform", formRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});
