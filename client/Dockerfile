# Use an official Node runtime as the base image
FROM node:16.16.0 as build

# Set the working directory in the container to /app
WORKDIR /app

# Define the build argument
ARG VITE_API_URL

# Set the environment variable
ENV VITE_API_URL=$VITE_API_URL

# Copy the application code to the working directory
COPY . .

# Install the application dependencies
RUN npm install

# Build the application
RUN npm run build
