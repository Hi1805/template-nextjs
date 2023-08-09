'use client';

import { store } from '@/redux/store';
import React from 'react';
import { Provider as ProviderRedux } from 'react-redux'

function Providers({ children }: React.PropsWithChildren) {

  return (
    <ProviderRedux store={store}>
        {children}
    </ProviderRedux>
  );
}

export default Providers;
