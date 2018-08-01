import { Component, createElement, ReactNode } from 'react';
import NoDebounceContext from './NoDebounceContext';

type Props<Value> = {
  dueTime: number;
  value: Value;
  children: (value: Value) => ReactNode;
};

type State<Value> = {
  value: Value;
};

class RedebounceImpl<Value> extends Component<Props<Value>, State<Value>> {
  private timeoutId?: number;

  public componentDidUpdate(prevProps: Props<Value>) {
    if (prevProps.value !== this.props.value) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        this.timeoutId = undefined;

        this.setState({ value: this.props.value });
      }, this.props.dueTime);
    }
  }

  public componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  public render() {
    return this.props.children(this.state.value);
  }

  public constructor(props: Props<Value>) {
    super(props);

    this.state = {
      value: props.value,
    };
  }
}

function Redebounce<Value>(props: Props<Value>) {
  return (
    <NoDebounceContext.Consumer>
      {noDebounce => (noDebounce ? props.children(props.value) : <RedebounceImpl {...props} />)}
    </NoDebounceContext.Consumer>
  );
}

export default Redebounce;
