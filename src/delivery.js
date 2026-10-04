const express = require("express");

const app = express();
app.use(express.json());

app.post("/webhooks/shop", (req, res) => {
    const event = req.body;
    switch (event.type) {
        case "order.created":
            console.log(`Creating delivery for order: ${event.data.orderId}`);
            console.log(`Delivery address: ${event.data.address}`);
            break;

        case "order.cancelled":
            console.log(`Cancelling delivery for order: ${event.data.orderId}`);
            break;

        default:
            console.log(`Unknown event: ${event.type}`);
    }

    res.status(200).json({
        received: true,
    });
});

app.listen(4000, () => {
    console.log("Delivery system running on http://localhost:4000");
});