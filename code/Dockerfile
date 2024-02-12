# Node js image
FROM node:latest

WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install project dependencies
#COPY package.json package.json
RUN npm install

# Port
EXPOSE 3000

# Command to run your application
CMD ["node", "index.js"]