import express from 'express';
import bodyParser from 'body-parser'
const connection = required('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.json()); // for prasing application/json

// CREATE Shipment

app.post('/shipments', (req, res) => {
    const { sender, receiver, address, status, delivert_date } = req.body;
    connection.query(
        'INSERT INTO shipments ( sender, receiver, address, status, delivery_date) VALUES (?, ?, ?, ?, ?)'
        [sender, receiver, address, status, delivery_date],
        (err, results) => {
            if (err) throw err;
            res.status(201).send({shipment_id: results.insterId });

        }

    );
});

// READ Shipments
app.get('/shipments', (req, res) =>{
    connection.query('SELECT * FROM shipments', (err, results) => {
        if (err) throw err;
        res.json(results);
    });

});

//UPDATE shipment
app.put('/shipment/:id', (req, res) => {
    const { sender, receiver, address, status, delivery_date } = req.body;
    connection.query(
    'UPDATE shipments SET sender = ?, receiver = ?, address = ?, status = ?, delivery_date = ? WHERE shipment_id = ?',
    [sender, receiver, address, status, delivery_date, req.params.id],
    (err, results) => {
        if (err) throw err;
        res.send('shipment updated');
    }
    );
});

// DELET shipment
app.delete('/shipments/:id', (req, res) => {
    connection.query('DELETE FORM shipments WHERE shipment_id = ?', [req.params.id], (err, results) => {
        if (err) throw err;
        res.end('Shipment deleted');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

