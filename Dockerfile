FROM node:18-alpine

WORKDIR /docusaurus-app

COPY data/ /docusaurus-app/data
COPY src/ /docusaurus-app/src
COPY package.json /docusaurus-app/package.json

RUN pnpm install

CMD ["pnpm", "start"]
