FROM node:20.9.0

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . /app
WORKDIR /app

RUN npm ci

RUN mkdir -p /home/node/.npm \
  && chown -R node /home/node \
  && chown -R node /app
USER node

RUN npm run build

CMD ["bin/start-prod"]
