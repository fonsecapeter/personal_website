FROM --platform=linux/amd64 node:8.15.1

COPY . /app
WORKDIR /app

RUN npm install

RUN chown -R node /app
USER node

CMD ["bin/start-prod"]
