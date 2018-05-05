module.exports = function(env) {
    let path = ".env";

    if (env === 'development') {
        // Default
    }

    if (env === 'staging') {
        path = ".env.staging";
    }

    if (env === 'production') {
        path = ".env.prod";
    }

    return {
        clientAllowedKeys: [],
        path: path
    };
};