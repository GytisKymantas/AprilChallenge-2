import tesonetClient from '../../config/tesonetClient';
import getToken from '../getToken';

jest.mock('../../config/tesonetClient');

const mockedGetToken = tesonetClient.getToken as jest.Mock;

describe('getToken function', () => {
  it('returns token when username and password are valid', async () => {
    mockedGetToken.mockResolvedValue('mocked-token');

    const token = await getToken('validUsername', 'validPassword');

    expect(token).toBe('mocked-token');
  });

});
