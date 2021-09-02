const { model, Schema } = require('mongoose');

const reviewSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true
});

const excursionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      requires: true
    },
    image: {
      type: String,
      required: true
    },
    cathegory: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    date: {
      type: Date,
      required: true
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    placesAvailable: {
      type: Number,
      required: true,
      default: 0
    }
  }, {
    timestamps: true
  }
);

module.exports = model('Excursion', excursionSchema);
