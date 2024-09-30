---
title: "Python Virtual Environments"
date: 2024-06-03
image: images/2024-thumbs/python-virtual-environments.png
draft: false
author: "Matt Hammond"
description: "Quick reference to installing `pyenv` and managing different python versions. Also, steps for creating and managing virtual environments."
---

## Install pyenv and Setup Environment

For full documentation on [pyenv](https://github.com/pyenv/pyenv) visit [Github](https://github.com/pyenv/pyenv).

- `brew install pyenv pyenv-virtualenv`
- Add the following to your .zshrc file.

```bash
# Enable shims and autocompletion
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

```bash
# Add pyenv to $PATH
export PYENV_ROOT="$HOME/.pyenv"
[[ ":$PATH:" =~ ":$PYENV_ROOT/bin:" ]] || export PATH="$PYENV_ROOT/bin:$PATH"
```

## Commands

- `pyenv install -l`: list versions for installation
- `pyenv install <version>`: install selected version
- `pyenv virtualenv <version> <environment_name>`: create virtual environment
- `pyenv virtualenvs`: list virtual environments
- `pyenv activate <environment_name>`: activate virtual environment
- `source deactivate`: deactivate virtual environment
- `pyenv uninstall <environment_name or python version>`: delete virtual environment or uninstall python version

## Autoload Virtual Environment

Create `.python-version` inside project directory

Inside file put the environment name you created.
