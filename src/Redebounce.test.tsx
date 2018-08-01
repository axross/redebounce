import { createElement } from 'react';
import * as TestRenderer from 'react-test-renderer';
import Redebounce from './Redebounce';

describe('<Redebounce>', () => {
  test('debounces the given value by time and provides it through props.children() as a render-props', async () => {
    const children = jest.fn(value => <span>{value}</span>);

    const testRenderer = TestRenderer.create(
      <Redebounce dueTime={100} value={0}>
        {children}
      </Redebounce>
    );

    await wait(5);

    testRenderer.update(
      <Redebounce dueTime={100} value={1}>
        {children}
      </Redebounce>
    );

    await wait(5);

    testRenderer.update(
      <Redebounce dueTime={100} value={2}>
        {children}
      </Redebounce>
    );

    await wait(5);

    testRenderer.update(
      <Redebounce dueTime={100} value={3}>
        {children}
      </Redebounce>
    );

    await wait(100);

    testRenderer.update(
      <Redebounce dueTime={100} value={4}>
        {children}
      </Redebounce>
    );

    await wait(5);

    testRenderer.update(
      <Redebounce dueTime={100} value={5}>
        {children}
      </Redebounce>
    );

    await wait(5);

    testRenderer.update(
      <Redebounce dueTime={100} value={6}>
        {children}
      </Redebounce>
    );

    await wait(100);

    expect(children).toHaveBeenCalledTimes(9);
    expect(children).toHaveBeenNthCalledWith(1, 0);
    expect(children).toHaveBeenNthCalledWith(2, 0);
    expect(children).toHaveBeenNthCalledWith(3, 0);
    expect(children).toHaveBeenNthCalledWith(4, 0);
    expect(children).toHaveBeenNthCalledWith(5, 3);
    expect(children).toHaveBeenNthCalledWith(6, 3);
    expect(children).toHaveBeenNthCalledWith(7, 3);
    expect(children).toHaveBeenNthCalledWith(8, 3);
    expect(children).toHaveBeenNthCalledWith(9, 6);
  });
});

const wait = async (duration: number) => new Promise(resolve => setTimeout(resolve, duration));
