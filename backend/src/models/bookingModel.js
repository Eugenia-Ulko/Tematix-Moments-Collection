const { model, Schema } = require('mongoose');

const bookingSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  bookingItems: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      excursion: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Excursion'
      }
    }
  ],
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

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
