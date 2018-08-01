import { createElement } from 'react';
import * as TestRenderer from 'react-test-renderer';
import Redebounce from './Redebounce';
import NoDebounce from './NoDebounce';

describe('<NoDebounce>', () => {
  test("ignores <Redebounce>'s debouncing behaviour", async () => {
    const children = jest.fn(value => <span>{value}</span>);

    const testRenderer = TestRenderer.create(
      <NoDebounce>
        <Redebounce dueTime={100} value={0}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(5);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={1}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(5);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={2}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(5);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={3}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(100);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={4}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(5);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={5}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(5);

    testRenderer.update(
      <NoDebounce>
        <Redebounce dueTime={100} value={6}>
          {children}
        </Redebounce>
      </NoDebounce>
    );

    await wait(100);

    expect(children).toHaveBeenCalledTimes(7);
    expect(children).toHaveBeenNthCalledWith(1, 0);
    expect(children).toHaveBeenNthCalledWith(2, 1);
    expect(children).toHaveBeenNthCalledWith(3, 2);
    expect(children).toHaveBeenNthCalledWith(4, 3);
    expect(children).toHaveBeenNthCalledWith(5, 4);
    expect(children).toHaveBeenNthCalledWith(6, 5);
    expect(children).toHaveBeenNthCalledWith(7, 6);
  });
});

const wait = async (duration: number) => new Promise(resolve => setTimeout(resolve, duration));
