import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/component-register-react.js',
    format: 'cjs',
    exports: 'named'
  },
  external: ['react', 'react-dom', 'react-shadow-dom-retarget-events', 'component-register'],
  plugins: [
    nodeResolve({ extensions: ['.js'] })
  ]
};