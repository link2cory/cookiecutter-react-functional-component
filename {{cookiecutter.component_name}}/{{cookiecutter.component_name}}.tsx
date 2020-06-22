import React from 'react'
import { {{ cookiecutter.component_name }}Props } from './interfaces'
{% if cookiecutter.stylesheet == 'css' or cookiecutter.stylesheet == 'scss' %}
  import './{{cookiecutter.component_name}}.{{ cookiecutter.stylesheet }}'
{% elif cookiecutter.stylesheet == 'styled-components' %}
  import './{{cookiecutter.component_name}}.styles.tsx'
{% endif %}

const {{ cookiecutter.component_name }}: React.FC<{{cookiecutter.component_name}}Props> = ({}: {{ cookiecutter.component_name }}Props) => (
  <div className='{{ cookiecutter.component_name_lower }}-container' />
)

export default {{ cookiecutter.component_name }}
