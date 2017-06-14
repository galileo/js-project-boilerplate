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

For hooks there is no real handy solution, to get the full out of them you need either install `npm`, `yarn` and all 
modules on host or get into container and do all things from container.


### 1. Install yarn on host

This is not the best solution but it will work perfectly, but since we want to move all our dependencies to docker 
container you can consider this solution if you want the comfort of using git

### 2. Exec to the container

Second solution which will suite all you needs is to log in into container, with docker-compose command

```
docker-compose exec node bash

// Use git as you would normally do
```

> In this method you need to setup your user `email` and `name` locally for the git, so use `git config --local` command

```
git config --local user.name 'Kamil Ronewicz'
git config --local user.email 'your@email.com'
```

### Use shortcut command ./git

You can use `./git` command from this directory - which is shortcut for running git within container.

> Known limitations for this method
There is a problem with passing quote and singleqoute signs so you can not use the commit command with message longer
than one word

```
// ./git use case

./git commit -m Success // This works
./git commit -m "Added husky" // this will not work !!!!!! :(
```

> Second know limitation
It is impossible to push your data to your repository without adding your certificates to container, so you should use
push from your local machine.


Conclusion:
With all those limitations we can came with an conslusion that still the best approach would be the `1` solution
where we install all those dependencies on your host machine. But this is up to you how you want to use it.

## Heavy libraries

Sometimes we don't need to have all those js goodies at once so here are some
extracted libraries that are slowing down the development build process and maybe somebody does not requires it all.

- [Flow](../../tree/flow) - With installed binaries and webpack loader
- [Husky](../../tree/husky) - You can use it if you want to have the possibility to use git hooks, but be aware about
the limitations, you can read more about in Readme there
