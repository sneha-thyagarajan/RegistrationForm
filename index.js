import express  from "express";
import bodyParser from "body-parser";

const app = express();
const port= 8000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("login.ejs");
});
app.post("/signup", (req, res) => {
    res.render("submitted.ejs");
    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});