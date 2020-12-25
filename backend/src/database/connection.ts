import { createConnection } from 'typeorm';

createConnection().then(({ isConnected }) => console.log(isConnected));