# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's code
COPY . .

# Build the app
ARG TINA_CLIENT_ID
ARG TINA_TOKEN
RUN npm run build

# ---

# Use a smaller, more secure image for the final stage
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy built assets from the 'base' stage
COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY package.json .

# Expose the port the app runs on
EXPOSE 4321

# Healthcheck to make sure the container is ready
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:4321/ || exit 1

# The command to run the app
CMD ["npm", "run", "preview"] 