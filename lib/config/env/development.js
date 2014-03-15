'use strict';

module.exports = {
    db: "mongodb://localhost/test",
    app: {
        name: "Cruise Control"
    },
    facebook: {
        clientID: "721923287847289",
        clientSecret: "13fd50ca5d0bb27318ed772a8f7edbb1",
        callbackURL: "http://localhost:9000/auth/facebook/callback"
    }
};
