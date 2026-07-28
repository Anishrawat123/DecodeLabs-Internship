const express = require("express");

const app = express();
const userRoutes = require("./routes/users");
app.use(express.json());
app.use("/users",userRoutes);
//routes
app.get("/",(req,res)=>{
    res.send("backend API is running");
});


app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
