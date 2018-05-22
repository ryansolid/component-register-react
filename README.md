# Component Register React

This is a [Component Register](https://github.com/ryansolid/component-register) HOC (decorator/mixin) to support React Components. Component props are passed through as React props.

    import { register, compose } from 'component-register'
    import withReact from 'component-register-react'
    import React, { Component }  from 'react'

    // Normal React Component
    class MyComponent extends Component
      constructor(props) {
        @state = {greeting: 'Hello'}
      }

      render() {
        return <div>{@state.greeting + ' ' + @props.recipient}</div>
      }

    export default compose(
      register('my-component', {recipient: 'John'})
      withReact
    )(MyComponent)

This library also supports Stateless pure function components.