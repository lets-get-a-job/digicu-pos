/* eslint-disable no-unused-vars */
import io from 'socket.io-client';

const socket = io.connect(
  'http://ec2-3-34-247-127.ap-northeast-2.compute.amazonaws.com:5002',
);

export function JoinSocket(companyId) {
  console.log(companyId);
  socket.emit('join', {
    company_id: companyId,
  });
}

export function GetSocket() {
  socket.on('dequeue', msg => {
    console.log(msg);
  });
}

export function PushSocekt(type) {
  socket.emit('enqueue', {
    type: 'qr',
  });
}
