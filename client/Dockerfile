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

# Use an official Ubuntu runtime as the base image
FROM ubuntu

# Update Ubuntu and install nginx
RUN apt-get update && apt-get install nginx -y

# Copy the built application from the build stage to the nginx directory
COPY --from=build /app/dist /var/www/html/

# Make port 80 available outside the container
EXPOSE 80

# Run nginx
CMD ["nginx","-g","daemon off;"]
