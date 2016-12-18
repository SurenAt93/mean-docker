const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', require('./api_listing').get);

/* Get all users */
router.get('/users', require('./users').all);

/* Get single user */
router.get('/users/:id', require('./users').singl);

/* Create a user */
router.post('/users', require('./users').post);

/* Delete user */
router.delete('/users', require('./users').delete);
module.exports = router;
