const Router = require('express');
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome to the home page."));
indexRouter.get("/about", (req, res) => res.send("About us"));
indexRouter.get("/contact", (req, res) => res.send("Contact us!"));
indexRouter.post("/contact", (req, res) => res.send("Email sent!"));

module.exports = indexRouter;