const controller = require('./orderController');
const Booking = require('../models/bookingModel');

jest.mock('../models/bookingModel');

describe('Given addOrderItems', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
      test('Then call json', async () => {
        const req = {
          body: {
            bookingItems: [],
            clientAddress: {},
            paymentMethod: {},
            itemsPrice: {},
            taxPrice: {},
            totalPrice: {}
          }
        };
        const res = {
          send: jest.fn(),
          status: jest.fn(),
          json: jest.fn()
        };

        Excursion.find.mockResolvedValue({});

        await controller.addOrderItems(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});

describe('Given getOrderById', () => {
  describe('When is triggered', () => {
    describe('And findById resolves', () => {
      describe('if booking exists,', () => {
        test('Then call json', async () => {
          const req = {
            params: { id: null }
          };
          const res = {
            json: jest.fn()
          };
          Booking.findById.mockResolvedValue({});
          await controller.getOrderById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });
    });
  });
});
describe('And findById returns null', () => {
  test('Then call status 404', async () => {
    const req = {
      params: { id: null }
    };
    const res = {
      status: jest.fn()
    };
    Excursion.findById.mockResolvedValue(null);

    await controller.getOrderById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
