const express = require("express");
const axios = require("axios");
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.post("/orders", async (req, res) => {
    const order = {
        id: crypto.randomUUID(),
        customerName: req.body.customerName,
        address: req.body.address,
        totalPrice: req.body.totalPrice,
    };

    const event = {
        id: crypto.randomUUID(),
        type: "order.created",
        createdAt: new Date().toISOString(),
        data: {
            orderId: order.id,
            customerName: order.customerName,
            address: order.address,
            totalPrice: order.totalPrice,
        },
    };

    try {
        await axios.post("http://localhost:4000/webhooks/shop", event);
    } catch (error) {
        console.error("Webhook failed:", error.message);
    }

    res.status(201).json({
        message: "Order created",
        order,
    });
});

app.listen(3000, () => {
    console.log("Shop system running on http://localhost:3000");
});