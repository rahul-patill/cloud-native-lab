# 1. Use Node.js as our base image (the environment)
FROM node:20

# 2. Create a folder inside the container for our app
WORKDIR /app

# 3. Copy everything from our current folder into the container
COPY . .

# 4. Install the libraries defined in package.json
RUN npm install

# 5. Build the Next.js application for production
RUN npm run build

# 6. Open port 3000 for web traffic
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]
