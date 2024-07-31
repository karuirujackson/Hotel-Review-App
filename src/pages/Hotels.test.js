import { render, screen } from '@testing-library/react';
import Hotels from "./Hotels";
import HotelsContext from '../context/HotelsContext';
import { BrowserRouter } from 'react-router-dom';

test('The Hotels component should render', async() => {
  const wrapper = ({ children }) => (
    <HotelsContext.Provider 
        value={{
            loading: true,
            error: '',
            hotels: [],
            fetchHotels: jest.fn(),
        }}    
    >
        {children}
    </HotelsContext.Provider>
  );

  render(<Hotels />, { wrapper });
  expect(await screen.findByText(
    'Loading...')).toBeVisible();
});

test('The Hotels component should render a list of hotels', async() => {
  const wrapper = ({ children }) => (
    <BrowserRouter>
        <HotelsContext.Provider
            value={{
                loading: false,
                error: '',
                hotels: [
                    {
                        id: 1,
                        title: 'Test hotel 1',
                        thumbnail: ''
                    },
                    {
                        id: 2,
                        title: 'Test hotel 2',
                        thumbnail: ''
                    },
                ],
                fetchHotels: jest.fn(),
            }}
        >
            {children}
        </HotelsContext.Provider>
    </BrowserRouter>
  );
});
