import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImg';
import '@testing-library/jest-dom/extend-expect';


describe('HeroImage Component', () => {
  const testImageUrl = 'https://wallpapers.com/images/featured-full/cute-profile-picture-s52z1uggme5sj92d.jpg';
  const testAltText = 'Hero Image';

  it('renders the component and checks visibility', () => {
    render(<HeroImage src={testImageUrl} alt={testAltText} />);
    const heroImageElement = screen.getByTestId('hero-image');
    expect(heroImageElement).toBeVisible();
  });

  it('changes background color when disabled', () => {
    render(<HeroImage src={testImageUrl} alt={testAltText} disabled={true} />);
    const heroImageElement = screen.getByTestId('hero-image');
    expect(heroImageElement).toHaveStyle('cursor: not-allowed;');
    expect(heroImageElement).toHaveStyle('background-color: #cccccc');
  });
});
