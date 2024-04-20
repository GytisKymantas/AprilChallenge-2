import tesonetClient from "../config/tesonetClient";

const getToken = async (username:string, password:string) => {
  const token = await tesonetClient.getToken(username, password);

  return token;
};

export default getToken;
