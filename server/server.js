require('dotenv').config({ path: './env/secrets.env' });

const { PORT } = process.env;

const app = require('./app')
const server = require('http').createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
