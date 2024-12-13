import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExperienceItem } from '../../../components/experience/item';

describe('ExperienceItem', () => {
  let container;
  beforeEach(() => {
    container = render(
      <ExperienceItem
        experience={{
          title: 'Artist',
          icon: 'test/icon.png',
          date: '1992-present',
          link: 'https://studio1way.com/',
          org: 'P',
          bullets: [
            'Self taught',
            'Pretty cool if u ask me',
          ],
        }}
      />
    ).container;
  });

  it('renders the experience', () => {
    expect(screen.getByText('Artist')).toBeInTheDocument();
    expect(screen.getByText('1992-present')).toBeInTheDocument();
    expect(screen.getByText('P')).toBeInTheDocument();
    expect(screen.getByText('Self taught')).toBeInTheDocument();
    expect(screen.getByText('Pretty cool if u ask me')).toBeInTheDocument();
  });

  it('toggles bullets on click', () => {
    expect(screen.getByTestId('experience-item-bullets')).toHaveAttribute(
      'class',
      'experience-item-bullets',
    );
    fireEvent.click(container.firstChild);
    expect(screen.getByTestId('experience-item-bullets')).toHaveAttribute(
      'class',
      'hidden',
    );
  });
});
