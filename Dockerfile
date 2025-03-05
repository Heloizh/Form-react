# Dockerfile for the nodejs application
FROM node:18-alpine

# Create app directory
WORKDIR  /app

# Copy the package.json file
COPY package.json .

# Install the dependencies
RUN npm install
RUN npm i -g serve

# Copy the source code
COPY . .

RUN npm run build

# Expose the port
EXPOSE 8080

# Start the application
CMD ["npm", "run", "dev"]


