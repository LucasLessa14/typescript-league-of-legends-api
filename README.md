# 🎮 League of Legends API
This project consists of an API using NodeJS and TypeScript that provides data to a frontend to render a tips page for league of legends players.

### Changelog
The version control of this project can be seen here: [CHANGELOG.md](changelog.md)

### API Documentation
This link has everything you need to consume this API: [documentation here](https://www.notion.so/League-of-Legends-API-docs-85eb51ad203b42e8aaf923612dd9489c)

This project uses git flow. A detailed explanation can be found here: [Git Flow](https://git-scm.com/book/en/v2/Git-Flow-Basics)
## 💻 Technologies
This project was developed with the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)

## 🏁 Quick Start
``` js
// this command ceates a test database in the container
$ docker run --name lol-mysql -e MYSQL_DATABASE=leagueoflegends -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 --restart always -d mysql:latest

// this command installs all project dependecies 
yarn install

// this command executes all migrations
yarn typeorm migration:run

// this command runs application for development environment
yarn run dev

// this command builds application for production environment
yarn run build

// this command runs application for production environment
yarn run start
```

## 🚀 To do
- [x] Create a CRUD of champions
- [ ] Create a CRUD of skill
- [ ] Create a CRUD of items
- [ ] Create a CRUD of runes

## 🧑‍💻 Author
- Lucas Lessa

