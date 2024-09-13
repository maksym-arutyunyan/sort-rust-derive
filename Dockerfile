# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the project dependencies locally in the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Specify the command to run the tests
CMD [ "npm", "test" ]
