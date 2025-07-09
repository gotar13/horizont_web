# 1. Fázis: Buildeljük a React appot
FROM node:18 AS frontend

WORKDIR /horizont_web/client

# Csak azokat másoljuk be, amik kellenek a telepítéshez
COPY client/package*.json ./
RUN npm install

# Teljes frontend kód bemásolása
COPY client/ ./

# Vite build
RUN npm run build


# 2. Fázis: Backend + frontend kiszolgálás
FROM node:18-slim

WORKDIR /horizont_web/server

# Backend dependency fájlok bemásolása
COPY server/package*.json ./

# Függőségek telepítése
RUN npm install

# Backend kód bemásolása
COPY server/ ./server/

# Frontend build bemásolása
COPY --from=frontend /horizont_web/client/dist ./client/dist

# Port megnyitása
EXPOSE 80

# Alkalmazás indítása
CMD ["node", "index.js"]