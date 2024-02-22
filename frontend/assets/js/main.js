const js5Element = React.createElement(
    'h1',
  {
      title: 'Hello',
    className: 'heading'
  },
  'Hello guys!'
)

const js6Element = React.createElement(
    'ul',
  null,
  React.createElement('li', null, 'Javasript'),
  React.createElement('li', null, 'ReactJS'),
)

const rootElement = document.getElementById('root')
ReactDOM.render([js5Element,js6Element], rootElement)