const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  bookingItems: [
    {
      name: { type: String, required: true },
      qty: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      excursion: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Excursion'
      }
    }
  ],

  clientAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true }
  },

  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String }
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  }
},
{
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
