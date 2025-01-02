import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageModal from '../../../../components/common/image/modal';

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <button data-testid="test-modal-open-button" onClick={() => setIsOpen(true)} />
        <ImageModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <img data-testid="test-modal-content" />
        </ImageModal>
      </>
  );
};

describe('ImageModal', () => {
  beforeEach(async () => {
    render(<TestComponent />);
  });

  it('is hidden when not isOpen', () => {
    expect(screen.queryByTestId('test-modal-content')).toBeNull();
  });

  it('renders when isOpen', () => {
    fireEvent.click(screen.getByTestId('test-modal-open-button'));
    expect(screen.getByTestId('test-modal-content')).toBeInTheDocument();
  });

  it('includes a close button', () => {
    fireEvent.click(screen.getByTestId('test-modal-open-button'));
    fireEvent.click(screen.getByText('x'));
    expect(screen.queryByTestId('test-modal-content')).toBeNull();
  });
});
