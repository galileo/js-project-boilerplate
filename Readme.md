# JavaScript project boilerplate

This project will ease start your `node` and `javascript` application development to the minimum. 
All you need to do is to start your docker container.

## Install project

Clone github repository. Run:

```
docker-compose up -d 
````

You can now open your browser and go to the `http://localhost/` url. The project should be prepared for development. You can even start your debugging with NiM or just go to the docker logs -f and get the url address for devtools debugging.

There is also predefined `Visual Studio Code` configuration, you just need to go to this branch `.vscode-config`.

## Heavy libraries

Sometimes we don't need to have all those js goodies at once so here are some
extracted libraries that are slowing down the development build process and maybe somebody does not requires it all.

- [Flow](../../tree/flow) - With installed binaries and webpack loader
- [Husky](../../tree/husky) - You can use it if you want to have the possibility to use git hooks, but be aware about
the limitations, you can read more about in Readme there
