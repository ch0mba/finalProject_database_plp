import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => {

    console.log('Fetching all shipments...');

     res.send('Welcome to the Logistics API!');
});


app.listen(PORT, () =>console.log(`Server is running on http://localhost:${PORT}`));
