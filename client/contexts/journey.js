import React from 'react';

export const JourneyContext = React.createContext({
  origin: '',
  destination: '',
  updateOriginAndDestination: () => {}
});