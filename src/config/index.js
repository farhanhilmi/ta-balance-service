import dotenv from 'dotenv';

import path, { join } from 'path';

const NODE_ENV = process.env.NODE_ENV;
const env = `${NODE_ENV}.env`;
console.log('current env:', env);

const basedir = path.resolve(process.cwd());
// const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
    path: join(basedir, `${NODE_ENV}.env`),
});

const { APP_NAME, MONGODB_URI, PORT } = process.env;

const config = {
    app: {
        port: PORT,
        // host: HOST,
        name: APP_NAME,
    },
    db: {
        uri: MONGODB_URI,
    },
};

export default config;
