/* eslint-disable no-undef */

import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect, useState } from 'react';

const ApiLoadContext = React.createContext(null);

const ApiLoadProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyD19HDfecIVKOhxEa0a81aC9AV5_2LrgDY',
      version: 'weekly',
      language: 'ko',
      region: 'KR',
    });

    loader.load().then(
      () => {
        setIsLoaded(true);
      },
      () => {
        console.error('failed to load google maps api');
      },
    );
  }, []);

  return <ApiLoadContext.Provider value={[isLoaded]}>{children}</ApiLoadContext.Provider>;
};

export default ApiLoadContext;

export { ApiLoadProvider };
