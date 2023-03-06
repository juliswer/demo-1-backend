# Image source
FROM node:19

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./yarn.lock /app/

# Then install the NPM module
RUN yarn

# Copy current directory to APP folder
COPY . /app/

EXPOSE 3333

CMD ["yarn", "run", "start:dev"]