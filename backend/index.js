const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./Routers/router');

app.use(cors());
app.use(express.json());

app.use('/aconews', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
