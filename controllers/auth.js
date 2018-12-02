const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if(candidate) {
        res.status(409).json({
            message: 'Email address already exists'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        await user.save()
        res.status(201).json(user)
    }
}

module.exports.login = async function(req, res) {
    console.log(req.body)
    const candidate = await User.findOne({ email: req.body.email })
    if(candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        console.log(req.body.password, candidate.password)
        if(passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, 'dev-jwt', {expiresIn: 3600});

            res.status(200).json({
                token: `Bearer ${token}`,
                user: candidate,
                message: 'success',
                auth: true
            })
        } else {
            res.status(200).json({
                message: 'Password incorrect',
                auth: false
            })
        }
    } else {
        res.status(200).json({
            message: 'Email not found',
            auth: false
        })
    }
}   