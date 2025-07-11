# development
FROM node:22-alpine AS development
RUN apk add --no-cache git
WORKDIR /home/node/
USER node

ENV NODE_ENV=development
ARG PORT=3000
ENV PORT=${PORT} 
EXPOSE ${PORT} 9229

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node ./app ./app

CMD [ "npm", "run", "dev" ]

# production
FROM development AS production
ENV NODE_ENV=production
RUN npm ci
CMD [ "npm", "start" ]