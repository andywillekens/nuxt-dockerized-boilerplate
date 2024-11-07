# docker-example

This is going to be a test project to get familiar with setting up projects with docker.

### Requirements

- docker
- docker compose

### Start up local development

Run the following command: `docker compose -f docker-compose.local.yml up`

# As a developer

- [x] I first want to set up the project's local git to use the correct account.
- [x] I want to create a new feature branch from master.
- [x] I want to simply spin up this docker container and have my application ready to work with.
- [ ] ~I want to set up some custom hostname via a config file if that is possible.~
- [x] I want to create a basic setup that connect to the api server and retrieve and show data
- [ ] ~I want to add GraphQL to the express back-end~
- [ ] ~I want to fetch and display the GraphQL data~
- [ ] ~I want to seperate the GraphQL queries~
- [ ] I want to test wich settings are actually used, cleaning up Dockerfile & docker-compose.local.yml
- [ ] I want to also deploy this on vercel without docker causing issues.
