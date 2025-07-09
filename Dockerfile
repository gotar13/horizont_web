# 1. Fázis: Buildeljük a React appot
FROM node:18 AS frontend

WORKDIR /horizont_web/client

COPY client/package*.json ./
RUN npm install

COPY client/ ./
RUN npm run build


# 2. Fázis: Backend + frontend kiszolgálás
FROM node:18-slim

WORKDIR /horizont_web

# Backend dependency-k bemásolása
COPY server/package*.json ./server/

RUN cd ./server && npm install

# Backend kód bemásolása
COPY server/ ./server/

# Frontend build bemásolása
COPY --from=frontend /horizont_web/client/dist ./client/dist

# Port megnyitása
EXPOSE 80

# Alkalmazás indítása
CMD ["node", "server/index.js"]