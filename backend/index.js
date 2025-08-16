const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const User = require("./models/User");
const { checkAuth ,onlyForLoggedINUsers} = require("./middlewares/user");
const MONGODB_URI = process.env.MONGODB_URI;


//db connect
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//server
const app = express();
const PORT = 8000;

app.use(cors({
  origin: "https://mission-parivartan3.vercel.app",   
  credentials: true                 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuth);

const userRoute = require("./routes/userRoutes");
const formRoute = require("./routes/formRoutes");


app.use("/api/user",userRoute);
app.use("/api/treeform",formRoute);




app.listen(PORT,() => {
    console.log(`server started at http://localhost:${PORT}`);
})

