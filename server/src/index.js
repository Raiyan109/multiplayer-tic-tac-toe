import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const apiKey = 'tng54gvqq64m'
const apiSecret = 'rzztu2h9cxqfv5wat2yujjpebddqqe6etb7t3b6cjgvxju4mqz6dxsmede4ppqu8'

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});