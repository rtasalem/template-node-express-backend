ARG PORT=3000
ARG PORT_DEBUG=9229

# Development
FROM node:latest AS development
ARG PORT
ARG PORT_DEBUG
ENV PORT ${PORT}
EXPOSE ${PORT} ${PORT_DEBUG}
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start:watch" ]

# Production
FROM node:latest AS production
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
WORKDIR /home/node/app
COPY --from=development /home/node/app/ ./app/
COPY --from=development /home/node/app/package*.json ./ 
RUN npm ci
CMD [ "node", "app" ]