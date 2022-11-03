import { ReactElement } from 'react';
import reactDom from 'react-dom';

const ModalPortal = ({ children }: { children: ReactElement }) => {
  const el = document.getElementById('modal-root');
  return reactDom.createPortal(children, el!);
};

export default ModalPortal;
