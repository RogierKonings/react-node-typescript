import express from 'express';
import path from 'path';
const router = express.Router();

router.get('/hello', (req, res, next) => res.send({ msg: 'Hello, Scaffold !!' }));

module.exports = router;
