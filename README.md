# Webhook Practice Project

A simple Node.js project for learning how webhooks work.

The project contains two small systems:

- **Shop System:** Creates an order and sends a webhook.
- **Delivery System:** Receives and processes the webhook.

## Webhook Flow

1. A user creates an order.
2. The shop creates an `order.created` event.
3. The shop sends the event to the delivery system.
4. The delivery system receives the webhook.
5. The delivery system returns a successful response.

## Technologies

- Node.js
- Express.js
- Axios

## Installation

```bash
npm install
```

## Run the Delivery System

```bash
node src/delivery.js
```

The delivery system runs on:

```text
http://localhost:4000
```

## Run the Shop System

Open another terminal:

```bash
node src/shop.js
```

The shop system runs on:

```text
http://localhost:3000
```

## Create an Order

Send a POST request:

```http
POST http://localhost:3000/orders
Content-Type: application/json
```

Request body:

```json
{
  "customerName": "Suriya",
  "address": "Herat",
  "totalPrice": 35
}
```

## Webhook Endpoint

```http
POST http://localhost:4000/webhooks/shop
```

Example webhook payload:

```json
{
  "id": "event-id",
  "type": "order.created",
  "createdAt": "2026-10-04T10:00:00.000Z",
  "data": {
    "orderId": "order-id",
    "customerName": "Suriya",
    "address": "Herat",
    "totalPrice": 35
  }
}
```

## What I Practised

- Creating webhook events
- Sending webhooks between systems
- Receiving and processing webhooks
- Handling different event types
- Handling successful and failed requests
