// Importing module
import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;
app.use(express.static('public'));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}...`);
});
