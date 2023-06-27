const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const {name} = req.body;
    res.cookie('name', name);
    res.send('Cookie has been set;);')
});

app.get('/hello', (req, res) => {
    const name = req.cookies.name;
        if (name) {
            res.send(`Welcome ${name}`)
        } else {
            res.send('Please login');
        }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});