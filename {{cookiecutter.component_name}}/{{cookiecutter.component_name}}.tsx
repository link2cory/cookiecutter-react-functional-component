import React from 'react'
import { {{ cookiecutter.component_name }}Props } from './interfaces.ts'
import './{{cookiecutter.component_name}}.{{ cookiecutter.stylesheet }}'

const {{ cookiecutter.component_name }}: React.FC<{{cookiecutter.component_name}}Props> = ({}: {{ cookiecutter.component_name }}Props) => (
  <div className='{{ cookiecutter.component_name_lower }}-container' />
)

export default {{ cookiecutter.component_name }}
