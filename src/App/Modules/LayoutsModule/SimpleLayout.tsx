import * as React from 'react';

interface ISimpleLayoutProps {
  renderProp: any;
}

export class SimpleLayout extends React.Component<any> {
  public render() {
    return <div>{this.props.children}</div>;
  }
}
