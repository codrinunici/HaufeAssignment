FROM node:15.5.0-alpine as react_build
#also say
WORKDIR /usr/src/app
#copy the react app to the container
COPY . /usr/src/app

# prepare the contiainer for building react
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

#prepare nginx
FROM nginx:1.19.6-alpine
COPY --from=react_build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
