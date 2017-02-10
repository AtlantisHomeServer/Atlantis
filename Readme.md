##Atlantis Home Server
### dist standalone
```bash
$ npm install  # for the first time.
$ bin/activator dist
```

### Build dockerfile

**atlantis-ejabberd-docker should be running**

just type

```bash
# example - sh ./build_docker.sh 0.0.1
$ sh ./build_docker.sh $VERSION
```

Now docker images will generate

### Build and push dockerfile

```bash
# example - sh ./build_docker.sh 0.0.1 publish
$ sh ./build_docker.sh $VERSION publish
```

Now docker image will generate and push to docker repo
