import express from 'express';

const router = express.Router();


const drivers = [
    {name: "John Mwangi",license_number: "DL-001122",phone_number: "0712345678"},
    {name: "Grace Wanjiku", license_number: "DL-003344",phone_number: "0722345678"},
]


router.get('/', (req, res) => {
    console.log(drivers);
    res.send('List of drivers');
});


router.post('/', (req, res) => {
    console.log("posting driver");

    console.log(req.body);

    const drivers = res.body;

    drivers.push();

    res.send(`Driver ${drivers.name} added`);
});

export default router;