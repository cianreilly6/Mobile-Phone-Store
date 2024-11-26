const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        order_id:{
            type: Number,
            required: true,
        },

        order_name:{
            type: String,
            required:  true,
        },

        order_model:{
            type: String,
            required: true,
        },

        order_price:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Orders = mongoose.model("Order", OrderSchema);
module.exports = Orders;