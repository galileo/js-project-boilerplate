# JavaScript project boilerplate

This project will ease start your `node` and `javascript` application development to the minimum. 
All you need to do is to start your docker container.

## Install project

Clone this GitHub repository. 

### Run development mode

Compose files are prepared to serve first the development environment, to run in develop mode just start docker-compose
command:

```
docker-compose up -d 
````

You can now open your browser and go to the `http://localhost/` url. The project should be prepared for development. 
You can even start your debugging with NiM or just go to the docker logs -f and get the url address for DevTools 
debugging.

There is also predefined `Visual Studio Code` configuration, you just need to go to this branch `.vscode-config`.

### Production mode

If you want to test how this application will be exposed on production you can try to run our production container
setup. This will first build the app and then expose it via `node` as static files to end user.

```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --force-recreate
```

Important:
Please start first the dev `up` to build the proper image.

## Git hooks

There problem around hooks within Docker container world you can take, several approaches but none of it is looking as 
an right solution.

1. You need yarn on your host machine - but this also means that you need ot install all modules on your host.
2. You can use `./git` command from this directory - which is shortcut for running git within container
3. Create 

Limitations of point `2`
> As we are using docker-compose to run our git command and to be able to guess the container name we are not allowed to
use interactive shell. So we just can use simple git actions

## Heavy libraries

Sometimes we don't need to have all those js goodies at once so here are some
extracted libraries that are slowing down the development build process and maybe somebody does not requires it all.

- [Flow](../../tree/flow) - With installed binaries and webpack loader
- [Husky](../../tree/husky) - You can use it if you want to have the possibility to use git hooks, but be aware about
the limitations, you can read more about in Readme there
