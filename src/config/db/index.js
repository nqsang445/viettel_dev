
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://viettel_web_dev:0345617864@cluster0.uovjr.mongodb.net/viettel_web_dev?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully!');
    } catch (error) {
        console.log('connect failed!');
    }
}

module.exports = { connect };