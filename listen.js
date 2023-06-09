const app = require('./app.js');
const { PORT = 3141 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));