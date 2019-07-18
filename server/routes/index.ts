export {};
const express = require('express');
// const path = require('path');
const router = express.Router();

router.get('/hello', (req: any, res: any, next: any) => res.send({ msg: 'Hello, Scaffold !!' }));

module.exports = router;
