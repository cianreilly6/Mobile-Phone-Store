const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema(
    {
        manufacturer:{
            type: String,
            required: true,
        },

        model:{
            type: String,
            required: true,
        },

        price:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Phones = mongoose.model("Phone", PhoneSchema);
module.exports = Phones;