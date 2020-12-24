FROM node:15.5.0-alpine as hapi_build
#also say
WORKDIR /app
#copy the react app to the container
COPY . /app/
RUN npm install --silent
CMD ["npm", "start"]

