# Install dependencies only when needed
FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js


COPY public ./public
COPY src ./src

CMD ["yarn", "dev"]