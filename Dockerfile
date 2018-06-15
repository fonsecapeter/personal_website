FROM node:8.11.3

ENV NPM_CONFIG_LOGLEVEL warn

COPY . /app
WORKDIR /app

RUN npm install --loglevel=warn

RUN chown -R node /app
USER node

CMD npm run start-prod
