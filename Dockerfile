# FROM --platform=linux/amd64 node:8.15.1
FROM --platform=linux/amd64 node:18.17.1

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
