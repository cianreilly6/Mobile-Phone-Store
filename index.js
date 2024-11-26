const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');//Details of customer params and links to index
const Phones = require('./models/Phones.js');//Details of phone params and links to index
const Orders = require('./models/Order.js');//Details of order params and links to index
const app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');//Tells me what port the server is running on
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Updated");
});

//CUSTOMERS
//Retrieving customers from database
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});//Finds the customer in database
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});//Error essage
    }
});

//Update customer
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);//Uses fucntion to find and update by id
        if(!product){
            return res.status(404).json({message: "Person not found"})//Tells me if the person was found
        }

        const UpdatedProduct = await Product.findById(id);//Finds by id
        res.status(200).json(UpdatedProduct);//Updates Customer
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});

//Delete customer
app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);//Uses function to find and delete the customer based off of the id

        if(!product){
            return res.status(404).json({message: "Customer not found"});//Tells me if the customer was found
        }

        res.status(200).json({message: "Customer deleted successfully"});//Tells me if the deletion worked

    } catch (error) {
        res.status(500).json({message: error.message});//Error message 
    }
});


//Search for customer
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);//Uses fucntion to fiind customer based off the id 
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});//Error Message
    }
});
//Creating a customer
app.post('/api/products', async  (req, res) => {
    try {
        const product = await Product.create(req.body);//uses create to make the customer based off the params the user gives
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});//Error Message
    }
})

//PHONES
//Retrieving phones from database
app.get('/api/phones', async (req, res) => {
    try {
        const phones = await Phones.find({});//Uses fucntion to find the phone
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({message: error.message});//Error meesage
    }
});

//Update Phones
app.put('/api/phones/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const phones = await Phones.findByIdAndUpdate(id, req.body);//Uses function to find the phone by the id
        if(!phones){
            return res.status(404).json({message: "Phone not found"})//Tell me its found or not
        }

        const UpdatedPhone = await Phones.findById(id);//Finds the phone by its id
        res.status(200).json(UpdatedPhone);//Updates the phone
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});

//Delete Phone
app.delete('/api/phones/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const phones = await Phones.findByIdAndDelete(id);//Uses function to find and delete the phone based off of the id

        if(!phones){
            return res.status(404).json({message: "Phone not found"});//tells me if the phone was found or not
        }

        res.status(200).json({message: "Phone deleted successfully"});//Tells me if the phone was deleted

    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});


//Search for phone
app.get('/api/phones/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const phones = await Phones.findById(id);//Uses the fucntion to find the phone by its id
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});

//Creating a Phone
app.post('/api/phones', async  (req, res) => {
    try {
        const phones = await Phones.create(req.body);//Uses th function to create a phone
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
})


//ORDERS
//Retrieving Orders from database
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Orders.find({});//Uses function to find the order
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});

//Update Orders
app.put('/api/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await Orders.findByIdAndUpdate(id, req.body);//Uses this fucntion to find and update by id
        if(!orders){
            return res.status(404).json({message: "Order not found"})//Error to tell if order wasnt found
        }

        const UpdatedOrder = await Orders.findById(id);//Finds order by ID and updates the order
        res.status(200).json(UpdatedOrder);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Delete Order
app.delete('/api/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await Orders.findByIdAndDelete(id);//function to find and delete by using id

        if(!orders){
            return res.status(404).json({message: "Order not found"});//Error message if the order wasnt found
        }

        res.status(200).json({message: "Order deleted successfully"});//Tells me if it was deleted

    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});


//Search for Order
app.get('/api/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await Orders.findById(id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message});//Error message
    }
});

//Creating an Order
app.post('/api/orders', async  (req, res) => {
    try {
        const orders = await Orders.create(req.body);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message});//Error message 
    }
})


//Connecting to MongoDB database
mongoose.connect("mongodb+srv://cianr286:Fionna2622@cianreilly.cehadsg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=cianreilly")
.then(() => {
    console.log("Connected to database");//Tells me if it is connected
})
.catch(() => {
    console.log("Connection failed");//Tells me if the connection failed
});