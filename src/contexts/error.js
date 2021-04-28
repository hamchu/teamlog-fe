import React, { useState } from 'react';

const ErrorContext = React.createContext(null);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return <ErrorContext.Provider value={[error, setError]}>{error || children}</ErrorContext.Provider>;
};

export default ErrorContext;

export { ErrorProvider };
