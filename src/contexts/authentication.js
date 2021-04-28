import React, { useEffect, useState } from 'react';

const AuthenticationContext = React.createContext(null);

// const AuthenticationPublisher = {
//     subscribers: [],
//     isLoading: false,
//     id: null,
//     subscribe: function (callback) {
//         this.subscribers.push(callback);
//     },
//     unsubscribe: function (callback) {
//         const index = this.subscribers.indexOf(callback);
//         if (index === -1) {
//             return;
//         }
//         this.subscribers.splice(index, 1);
//     },
//     update: async function () {
//         if (this.isLoading) {
//             return;
//         }
//         this.isLoading = true;
//         // 인증 상태를 확인하고 id를 갱신한다.
//         this.isLoading = false;
//         this.subscribers.forEach(callback => {
//             callback(id);
//         });
//     },
// };

const AuthenticationProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    // 인증 상태를 확인하고 id를 갱신한다.
    setIsLoaded(true);
  }, []);

  return (
    <AuthenticationContext.Provider value={[id, setId]}>
      {isLoaded && children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;

export { AuthenticationProvider };
