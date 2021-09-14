/* eslint-disable no-underscore-dangle */
/* const asyncHandler = require('express-async-handler'); */
const controller = require('./excursionController');
const Excursion = require('../models/excursionModel');

jest.mock('../models/excursionModel');

describe('Given getExcursions', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
      test('Then call json', async () => {
        const res = {
          send: jest.fn(),
          status: jest.fn(),
          json: jest.fn()
        };

        Excursion.find.mockResolvedValue({});

        await controller.getExcursions(null, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});

describe('Given getExcursionById', () => {
  describe('When is triggered', () => {
    describe('And findById resolves', () => {
      describe('if excursion exists,', () => {
        test('Then call json', async () => {
          const req = {
            params: { id: null }
          };
          const res = {
            json: jest.fn()
          };
          Excursion.findById.mockResolvedValue({});
          await controller.getExcursionById(req, res);

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

    await controller.getExcursionById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
