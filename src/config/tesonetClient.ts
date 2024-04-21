import axios from 'axios';
import { Endpoints } from '../utils/constants';

export const createTesonetClient = () => {
  const instance = axios.create({
    baseURL: 'https://playground.tesonet.lt/v1',
  });

  const getToken = async (username:string, password:string) => {
    const response = await instance.post(
      Endpoints.TOKENS,
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
    const response = await instance.get(Endpoints.SERVERS, {
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
