import React from 'react';
import useInitAuthFirebase from './src/utils/hooks/useInitAuthFirebase';
import Routes from './src/routes/Routes';

const App = () => {
  const user = useInitAuthFirebase();
  return <Routes user={user} />;
};

export default App;
