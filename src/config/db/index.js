const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://thanthao123:123@cluster0.unxa4bn.mongodb.net/education-dev',
        );
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failture??');
    }
}

module.exports = { connect };
