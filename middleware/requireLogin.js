//Next is a function we call when our middleware is finished running
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in' })
    };
    //If everthing looks good then continue on
    next();
};