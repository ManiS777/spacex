import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDomServer from 'react-dom/server';
import App from '../src/App';

const PORT = 7999;

const app = express();

app.get('/', (req, res) => {
    
    const app = ReactDomServer.renderToString(<App />);

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if(err) {
            console.error("Something went wrong: ", err);
            return res.status(500).send('Oops, better luck next time');
        }
        let a=data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        return res.send(
            a
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})