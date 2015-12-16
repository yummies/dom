function runKarma(config) {
    const { Server } = require('karma');

    return new Promise((resolve, reject) => {
        const karmaServer = new Server(config, exitCode => {
            if (exitCode !== 0) {
                return reject();
            }

            resolve();
        });

        karmaServer.start();
    });
}

export function karmaBuild() {
    process.env.NODE_ENV = 'development';

    const karmaConfig = require('../test/conf/karma.build').default;

    return runKarma(karmaConfig);
}

export function karmaDev() {
    process.env.NODE_ENV = 'development';

    const karmaConfig = require('../test/conf/karma.dev').default;

    return runKarma(karmaConfig);
}

export function karmaTravis() {
    process.env.NODE_ENV = 'development';

    const karmaConfig = require('../test/conf/karma.travis').default;

    return runKarma(karmaConfig);
}
