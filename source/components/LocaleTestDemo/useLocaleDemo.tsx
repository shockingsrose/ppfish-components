import React from 'react';
import withLocale from '../Config/Locale/withLocale';

@withLocale({ componentName: 'Table' })
class A extends React.Component<{ Locale?: { filterTitle?: string } }> {
  constructor(props) {
    super(props);
  }
  render() {
    const { Locale } = this.props;
    return (
      <div>
        useLocale demo:  Locale {Locale.filterTitle}
      </div>
    )
  }
}

export default A;