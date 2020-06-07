import os

from cookiecutter.main import cookiecutter

context = {{ cookiecutter }}

def setup_stylesheets(stylesheet: str):
    # only keep the appropriate stylesheet file
    if stylesheet == 'css':
        os.remove('{{ cookiecutter.component_name }}.scss')
    else:
        os.remove('{{ cookiecutter.component_name }}.css')

setup_stylesheets(context['stylesheet'])
