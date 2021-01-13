const express = require('express');
const router = express.Router();

const {User} = require('../models/user')

const _ = require('lodash');

router.post('/user', async (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName','age'])

    const obj = new User(body)
    await obj.save()

    res.send(obj)
});

router.get('/users', async (req, res) => {

    const users = await User.find({})
    res.send(users)
});

module.exports = router;