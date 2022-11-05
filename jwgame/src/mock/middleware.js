module.exports = (req, res, next) => {
    console.log('Middleware ...');
    next();
};
