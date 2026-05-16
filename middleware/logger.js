const logger = (req, res, next) => {

    const log = {
        method: req.method,
        url: req.originalUrl,
        time: new Date().toISOString()
    };

    console.log(log);

    next();
};

module.exports = logger;