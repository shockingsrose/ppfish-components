// context.js
import React from 'react';
export const ConfigContext = React.createContext({
  Locale: 'zh_CN',
});
export const Provider = ConfigContext.Provider;
export const Consumer = ConfigContext.Consumer;


