FROM node:15.5.0-alpine as hapi_build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . /usr/src/app
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]
