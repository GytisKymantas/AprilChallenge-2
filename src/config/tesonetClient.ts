import axios from 'axios';
import { TOKENS_ENDPOINT, SERVERS_ENDPOINT } from '../utils/constants';

export const createTesonetClient = () => {
  const instance = axios.create({
    baseURL: 'https://playground.tesonet.lt/v1',
  });

  const getToken = async (username:string, password:string) => {
    const response = await instance.post(
      TOKENS_ENDPOINT,
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.token;
  };

  const getServers = async (token:string) => {
    const response = await instance.get(SERVERS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  return {
    getToken,
    getServers,
  };
};

const tesonetClient = createTesonetClient();

export default tesonetClient;
