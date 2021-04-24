import io from 'socket.io-client';
import { Auth } from 'adapters/login';

const socket = io(process.env.REACT_APP_API_BASE_URL!, {
  reconnectionDelayMax: 10000,
  auth: (cb) => {
    cb({authorization: `Bearer ${Auth.getToken()}`});
  },
  autoConnect: false
});
export default socket;