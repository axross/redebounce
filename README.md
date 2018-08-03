# ![Redebounce](https://user-images.githubusercontent.com/4289883/43543985-7b6b50e0-9586-11e8-8b44-b1a4bb3cb665.png)

[![npm](https://img.shields.io/npm/dt/redebounce.svg)](https://www.npmjs.com/package/redebounce)
[![GitHub stars](https://img.shields.io/github/stars/axross/redebounce.svg)](https://github.com/axross/redebounce/stargazers)
[![GitHub license](https://img.shields.io/github/license/axross/redebounce.svg)](https://github.com/axross/redebounce/blob/master/LICENSE)

[Render Props](https://reactjs.org/docs/render-props.html) component to debounce the given value.

- 🚀 Dependency free
- 🏄‍ Extremely tiny
- 🔌 Plug and Play
- 👷 Well tested
- 👔 Built with TypeScript

## Example

[TRY IT OUT HERE](https://codesandbox.io/s/qz0w3088y4)

[![Redebounce Example](https://user-images.githubusercontent.com/4289883/43624324-6c06e6d0-969b-11e8-8213-39a69b96760f.gif)](https://codesandbox.io/s/qz0w3088y4)

## Install

```
npm i -S redebounce
```

## APIs

### `<Redebounce>`

#### Props

| Name       | Type                      | Required | Description                                                                                                                  |
| ---------- | ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `dueTime`  | `number`                  | ✓        | The timeout duration in milliseconds for the window of time to wait stopping changes of `value` and provide it to `children` |
| `value`    | `T`                       | ✓        | The value to provide to `children`.                                                                                          |
| `children` | `(value: T) => ReactNode` |          | A render props function which provides the value from `value`                                                                |

#### Usage

```js
import Redebounce from 'redebounce';

class WaitFor600ms extends PureComponent {
  state = { value: '' };

  render() {
    return (
      <div>
        <input onChange={this.onChangeInput} />

        <Redebounce dueTime={300} value={this.state.value}>
          {value => <input value={value} />}
        </Redebounce>
      </div>
    );
  }

  onChangeInput = e => {
    this.setState({ value: e.currentTarget.value });
  };
}
```

## License

MIT

## Contribute

You can help improving this project leaving Pull requests and helping with Issues.
