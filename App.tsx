// src/App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainTabs from './src/navigation/MainTabs';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
      
    </QueryClientProvider>
  );
};

export default App;
