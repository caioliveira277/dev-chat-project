import io from 'socket.io-client';
import { Auth } from 'adapters/login';

const socket = io.connect(
  process.env.REACT_APP_API_BASE_URL!,
  {
    reconnectionDelayMax: 10000,
    transportOptions: {
      polling: {
        extraHeaders: {
          authorization: `Bearer ${Auth.getToken()}`,
        }
     }
    }
  }
);

export default socket;