import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ZenithInputOnly from '.'

storiesOf('ZenithInputOnly', module)

  .add('Image Validation', () => (
    <ZenithInputOnly onChange={action('changed')} />
  ))
