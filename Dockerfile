# 1. Fázis: Buildeljük a React appot
FROM node:18 AS frontend

WORKDIR /horizont_web/client
COPY client/package*.json ./
RUN npm install
COPY client ./
RUN npm run build

# 2. Fázis: Backend + frontend kiszolgálás
FROM node:18

WORKDIR /horizont_web/server

# Másoljuk be a backend package fájlokat
COPY server/package*.json ./

# Telepítsük a backend függőségeit
RUN npm install

# Most már bemásolhatjuk a backend kódot is
COPY server/ ./

# Lépjünk vissza a fő mappába
WORKDIR /horizont_web

# Másoljuk be a frontend buildet a megfelelő helyre
COPY --from=frontend /horizont_web/client/dist ./client/dist

# Port megnyitása
EXPOSE 80

# Lépjünk vissza a szerver mappába és indítsuk el az alkalmazást
WORKDIR /horizont_web/server
CMD ["node", "index.js"]