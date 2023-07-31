# Use an official Node runtime as the base image
FROM node:16.16.0 as build

# Set the working directory in the container to /app
WORKDIR /app

# Copy the application code to the working directory
COPY . .

# Install the application dependencies
RUN npm install

# Build the application
RUN npm run build

