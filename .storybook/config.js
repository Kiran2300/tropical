import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import {createRenderer} from 'fela'
import {RendererProvider} from 'react-fela'

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator((storyFn) => {
  const renderer = createRenderer()
  return <RendererProvider renderer={renderer}>{storyFn()}</RendererProvider>
})

configure(loadStories, module)
