# Full-stack boilerplate

### Front-end

- CSS modules are supported out of the box. A sample CSS file for the App component can be found in the src folder.

- Testing is set up with Jest and React Testing Library. A sample test file can be found in the src folder.

### Back-end

- Prefer SQL or noSQL? No worries, both mongoDb and postgreSQL are set up with their respective models and compatible controllers. Talk about ready to go.

### Additional dependencies

- You must have MongoDb Community Edition or PostgreSQL installed locally and running.
  - [MongoDb Community Edition download](https://docs.mongodb.com/manual/administration/install-community/)
  - [PostgreSQL download](https://www.postgresql.org/download/)

## Get up and coding in seconds

1. install dependencies `npm install`
1. build development bundle with `npm run build:dev`
1. for front-end development, build dev bundle and start dev server with `npm run build:dev-server`
1. for back-end development, start express server with `npm run start:dev`
1. run tests with `npm run test`

### For SQL database use only

1. Environment variables are required for postgres. For quick hacking follow the example.env file to create your own .env file and fill out the postgres environment variables.
1. Once the postgres environment variables are set, create the database with `npm run createSqlDb`

### For production

1. Set `MODE` environment variable to `prod`
1. Build production bundle files (js, gzip, and br) with `npm run build`
1. Start production server with `npm run start`
