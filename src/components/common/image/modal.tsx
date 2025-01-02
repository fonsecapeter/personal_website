import React, { ReactNode, MouseEventHandler } from 'react';

interface ImageModalProps {
  isOpen: boolean,
  closeModal: MouseEventHandler,
  children: ReactNode,
}

const ImageModal = ({ isOpen, closeModal, children }: ImageModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="image-modal-background">
      <button className="image-modal-close-button" onClick={closeModal}>x</button>
      {children}
    </div>
  );
};

export default ImageModal;
