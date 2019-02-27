# Component Register React

This is a [Component Register](https://github.com/ryansolid/component-register) HOC (decorator/mixin) to support React Components. Component props are passed through as React props.

```jsx
import { register, compose } from 'component-register'
import withReact from 'component-register-react'
import React, { Component }  from 'react'

// Normal React Component
class MyComponent extends Component {
  constructor(props) {
    this.state = {greeting: 'Hello'}
  }

  render() {
    return <div>{this.state.greeting + ' ' + this.props.recipient}</div>
  }
}

export default compose(
  register('my-component', {recipient: 'John'})
  withReact
)(MyComponent)
```

This library also supports Stateless pure function components.