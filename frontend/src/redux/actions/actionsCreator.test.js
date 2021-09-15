import axios from 'axios';
import actionTypes from './actionTypes';
import { listExcursions } from './actionCreator';

jest.mock('axios');

describe('Given listExcursions function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValue({ data: [] });

        await listExcursions()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.EXCURSION_LIST_REQUEST,
          payload: data
        });
      });
    });
    describe('And rejects', () => {
      test('Then should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.post.mockRejectedValue(new Error('There was an error'));

        await payProducts()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.EXCURSION_LIST_FAIL,
          payload: error.response
        });
      });
    });
  });
});
