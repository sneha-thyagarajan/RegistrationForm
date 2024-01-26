import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port= process.env.PORT ||8000;

const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.8crpoxr.mongodb.net/registrationdb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const register= mongoose.model('register', userSchema);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("signup.ejs");
});
app.get("/signup", (req, res) => {
    res.render("signup.ejs");
})
app.post("/signup", async(req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    const exist= await register.findOne({email, password});
    if(!exist){
        const user = new register({
            email,
            password
        })
        await user.save();
        console.log(user);
        res.render("submitted.ejs");
    }
    else{
        console.log("user already exist");
        res.render("error.ejs");
    }
    
})

app.get("/signin", (req, res) => {
    res.render("signin.ejs");
})
app.post("/signin", async(req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    if(email && password){
        const exist= await register.findOne({email, password});
        
        if(exist){
            res.render("welcome.ejs");
        }
        else{
            const error= "Invalid password";
            res.render("signin.ejs",{error: error});

        }
    }

})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

