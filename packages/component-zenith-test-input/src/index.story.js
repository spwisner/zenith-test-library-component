import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ZenithValidationInput from '.'

storiesOf('ZenithValidationInput', module)

  .add('Image Validation', () => (
    <ValidationInputComponent onChange={action('changed')} />
  ))
