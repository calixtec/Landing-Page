const express = require("express");
const router =require("./routes/index")
// const router= express.Router();
// recent comment out
const layouts = require("express-ejs-layouts");
// const homeController = require("./controllers/homeController");
const app = express();
// const router = require("./routes/index")

const path = require( 'path' );
app.use (
    express.urlencoded({
    extended: false
    })
    );
app.set("view engine", "ejs");
app.use(layouts);

app.set( 'views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.set("port", process.env.PORT || 3000);
// app.get("/", homeController.index);

console.log("pass 1");
// app.get("/home", homeController.home);
console.log('pass 2');
// app.get("/users", homeController.showUsers);
// app.get("/contact", homeController.postedSignUpForm);
console.log('pass 2a');
// app.post('/users/submit', homeController.addUsers );

app.listen(app.get("port"), () => { 
console.log(
`Server running at port:${app.get(
"port"
)}/`
);
});

app.use("/", router);
