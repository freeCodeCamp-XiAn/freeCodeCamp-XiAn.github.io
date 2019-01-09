import * as React from 'react'
import readme from './README.md'
import DraggableContainer from './index'

const component = () => (
  <DraggableContainer>
    <span>拖一下我试试</span>
  </DraggableContainer>
)

export default [readme, component]