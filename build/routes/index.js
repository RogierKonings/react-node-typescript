var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/hello', function (req, res, next) { return res.send({ msg: 'Hello, Scaffold !!' }); });
module.exports = router;
//# sourceMappingURL=index.js.map