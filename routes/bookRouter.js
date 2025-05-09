const e = require('express');
const { Router } = require('express');
const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}!`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
    const bookId = req.params['bookId'];
    const reserved = req.params['reserved'];
    if (reserved === true) {
        res.send(`Book #${bookId} is reserved.`);
    } else {
        res.send(`Book #${bookId} is not reserved.`);
    }
});

bookRouter.post("/:bookId/reserve", (req, res) => {
    const bookId = req.params['bookId'];
    res.send(`You reserved Book #${bookId}`);
});

module.exports = bookRouter;