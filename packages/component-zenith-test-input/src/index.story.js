import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ValidationInputComponent from '.'

storiesOf('ValidationInputComponent', module)

  .add('Image Validation', () => (
    <ValidationInputComponent onChange={action('changed')} />
  ))
