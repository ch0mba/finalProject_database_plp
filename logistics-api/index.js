import express from 'express';
import bodyParser from 'body-parser';

import driversRouter from './routes/drivers.js';
import shipmentsRouter from './routes/shipments.js';
import routesRouter from './routes/routes.js';
import vehiclesRouter from './routes/vehicles.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/drivers', driversRouter);
app.use('/shipments', shipmentsRouter);
app.use('/routes', routesRouter);
app.use('/vehicles', vehiclesRouter);


app.get('/', (req, res) => {

    console.log('Fetching all shipments...');

     res.send('Welcome to the Logistics API!');
});


app.listen(PORT, () =>console.log(`Server is running on http://localhost:${PORT}`));
