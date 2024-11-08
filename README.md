# docker-example

This is going to be a test project to get familiar with setting up projects with docker.

### Requirements

- docker
- docker compose
- Prettier - Code formatter (vs code plugin)
- Tailwind CSS IntelliSense (vs code plugin)

### Start up local development

Run the following command: `docker compose -f docker-compose.local.yml up`

# As a developer

- [x] I first want to set up the project's local git to use the correct account.
- [x] I want to create a new feature branch from master.
- [x] I want to simply spin up this docker container and have my application ready to work with.
- [x] I want to create a basic setup that connect to the api server and retrieve and show data
- [ ] ~I want to add GraphQL to the API~
- [ ] ~I want to fetch and display the GraphQL data~
- [ ] ~I want to seperate the GraphQL queries~
- [x] I want to install and use Tailwind out of the box
- [x] I want to set up a minimal starter style
- [x] I want to test wich settings are actually used, cleaning up Dockerfile & docker-compose.local.yml
- [ ] I want to also deploy this on vercel or any other service without docker causing issues.
