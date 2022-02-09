const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
    {
        clientName : {
            type: String,
            required: true
        },
        table: {
            type: Number,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {
      timestamps: true
    }
);

module.exports = mongoose.model('clients', clientSchema)