const { constants } = require('../constants');


const errorHandler = (err, req, res, next) => {
   // console.log(err.stack.red);
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stackTrace,
            });

            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stackTrace,
            });

            break;

            case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stackTrace,
            });

            break;
        
        default:
            console.log("No error All Good");
            break;
    }

}

module.exports = errorHandler;