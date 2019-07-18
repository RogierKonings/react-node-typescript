"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.get('/hello', function (req, res, next) { return res.send({ msg: 'Hello, Scaffold !!' }); });
module.exports = router;
//# sourceMappingURL=index.js.map