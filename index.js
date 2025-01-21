import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
});


app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => { 
    console.log(`running on port ${port}`);
});
