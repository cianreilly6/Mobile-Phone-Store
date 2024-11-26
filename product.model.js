const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required:[true, "Please enter your title"],
        },

        first_name:{
            type: String,
            required:[true,"Please enter your first name"],
        },

        surname:{
            type: String,
            required:[true, "Please enter your surname"],
        },

        phone_number:{
            type: Number,
            required: true,
        },

        email:{
            type: String,
            required: true,
        },

        address1:{
            type: String,
            required: true,
        },

        address2:{
            type: String,
            required: true,
        },

        town:{
            type: String,
            required: true,
        },

        county:{
            type: String,
            required: true,
        },

        eircode:{
            type: String,
            reqired: true,
        },

    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;