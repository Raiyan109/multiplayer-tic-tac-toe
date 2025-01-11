import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { StreamChat } from 'stream-chat';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const apiKey = 'tng54gvqq64m'
const apiSecret = 'rzztu2h9cxqfv5wat2yujjpebddqqe6etb7t3b6cjgvxju4mqz6dxsmede4ppqu8'
const serverClient = new StreamChat.getInstance(apiKey, apiSecret);

app.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, userName, password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createToken(userId);


        res.json({
            token,
            firstName,
            lastName,
            userName,
            hashedPassword,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/login', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});