import express from 'express';

const router = express.Router();


const drivers = [
    {name: "John Mwangi",license_number: "DL-001122",phone_number: "0712345678"},
    {name: "Grace Wanjiku", license_number: "DL-003344",phone_number: "0722345678"},
]


router.get('/', (req, res) => {
    res.send('List of drivers');
});

export default router;