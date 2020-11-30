import React from 'react'
import LocaleProvider from './Locale/Provider';

export default function ConfigProvider(props) {
  const { value } = props;
  const { Locale } = value;
  return <LocaleProvider value={Locale}>
    {
      props.children
    }
  </LocaleProvider>
}