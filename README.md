![](./logo.png)

Nextcloud Development
=====================

This is the [Mint System](https://www.mint-system.ch/) Nextcloud development environment.

This projects provides a highly opinionated way to develop Nextcloud and Nextcloud apps.

## Requirements

The Nextcloud development environment has the following requirements:

* [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/)
* bash/zsh alias `task='./task'` with optional [completion](https://github.com/janikvonrotz/dotfiles/blob/master/oh-my-zsh-completions/_task)

## Usage

The usage section is a set of workflows. Pick the one required by your scenario. See `task help` or [task](./task.md) for details about the projects commands.

Clone this repository.

```bash
git clone git@github.com:Mint-System/Nextcloud-Development.git
cd Nextcloud-Development
```

### Docker

Run Nextcloud with Docker container.

**Start and initialize Nextcloud with Docker**

Run docker compose.

```bash
task start
```