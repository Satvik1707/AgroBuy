const mongoose = require("mongoose");

const BidSchema = mongoose.Schema(
  {
    sourceAddress: [
      {
        address1: {
          type: String,
          required: true,
        },
        address2: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        pinCode: {
          type: Number,
          required: true,
        },
      },
    ],
    destinationAddress: [
      {
        address1: {
          type: String,
          required: true,
        },
        address2: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        pinCode: {
          type: Number,
          required: true,
        },
      },
    ],
    shipmentDetails: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    cost: {
      type: Number,
      required: true,
    },
    noOfBidders: {
      type: Number,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    bidders: [
      {
        user: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Bid = mongoose.model("Bid", BidSchema);

module.exports = Bid;
