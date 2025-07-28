
# Hugo's Blog

This is the repository for my personal blog, built with Astro and featuring a neubrutalist design. You can visit the live site at [beaversden.com](https://beaversden.com).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## Docker Support

This project includes Docker support for easy deployment.

### Building the Docker Image

To build the Docker image, run the following command from the root of the project:

```bash
docker build -t hugo-blog .
```

### Running the Docker Container

To run the application in a Docker container, use the following command:

```bash
docker run -p 4321:4321 hugo-blog
```

The application will be available at [http://localhost:4321](http://localhost:4321).

### Using Docker Compose

For a more streamlined experience, you can use Docker Compose to manage the application.

To start the application, run:

```bash
docker-compose up
```

To build and start the application, run:

```bash
docker-compose up --build
```

To stop the application, run:

```bash
docker-compose down
```

## Want to learn more?

Check out the [Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat). 