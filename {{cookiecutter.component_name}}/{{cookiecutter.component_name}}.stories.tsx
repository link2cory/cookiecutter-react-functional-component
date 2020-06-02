import React from 'react'
import { action } from '@storybook/addon-actions'

import {{ cookiecutter.component_name }} from './{{ cookiecutter.component_name }}'

export default {
  component: {{ cookiecutter.component_name }},
  title: '{{ cookiecutter.component_name }}',
  excludeStories: /.*Data$/,
}

export const {{ cookiecutter.component_name }}Data = {

}

export const Default = () => <{{ cookiecutter.component_name }} />
