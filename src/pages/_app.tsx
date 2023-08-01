import { store } from '@/redux/store';
import '@/styles/globals.css';
import i18n from '@/translation/i18n';
import { StyledEngineProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StyledEngineProvider>
          <Component {...pageProps} />
        </StyledEngineProvider>
      </I18nextProvider>
    </Provider>
  );
}
