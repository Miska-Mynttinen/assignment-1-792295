# Node js image
FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Port
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
