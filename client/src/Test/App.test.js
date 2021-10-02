/**
 * @jest-environment jsdom
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../components/App'

test('loads and displays greeting', async () => {
  render(<App />)

  expect(screen.getByText('Hello there!')).toBeInTheDocument();
});
