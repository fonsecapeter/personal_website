FROM --platform=linux/amd64 node:8.15.1
# FROM --platform=linux/amd64 node:18.17.1

COPY . /app
WORKDIR /app

# Install python (required for node-sass)
# RUN apt-get update \
#   && apt-get install -y python-is-python3 \
#   && rm -rf /var/lib/apt/lists/*

RUN npm ci

RUN chown -R node /app
USER node

CMD ["bin/start-prod"]
