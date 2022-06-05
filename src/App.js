import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import store from './store/index';
import routes from './router';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

const App = memo(function App() {
  return (
    <Provider store={store} >
      <HashRouter>
        <HYAppHeader />
          {renderRoutes(routes)}
        <HYAppFooter />
      </HashRouter>
    </Provider >
  )
})

export default App