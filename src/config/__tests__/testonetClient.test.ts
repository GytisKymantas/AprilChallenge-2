import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Endpoints } from '../../utils/constants';
import { createTesonetClient } from '../tesonetClient';

describe('createTesonetClient', () => {
  const mock = new MockAdapter(axios);

  const mockToken = 'mock-token';
  const mockServers = [
    { id: 1, name: 'Server 1' },
    { id: 2, name: 'Server 2' },
  ];
  afterEach(() => {
    mock.reset();
  });

  it('getToken should return token', async () => {
    mock.onPost(Endpoints.TOKENS).reply(200, { token: mockToken });

    const token = await createTesonetClient().getToken('username', 'password');
    expect(token).toBe(mockToken);
  });

  it('getServers should return servers', async () => {
    mock.onGet(Endpoints.SERVERS).reply(200, mockServers);

    const servers = await createTesonetClient().getServers(mockToken);
    expect(servers).toEqual(mockServers);
  });
});
