module.exports = (req, res, next) => {
    const { pass } = req.query;

    if (!psss || pass !== "banana") {
        return res.status(400).json("errado");
    }

    next()
}