# 1. Fázis: Buildeljük a React appot
FROM node:18 AS frontend

WORKDIR /horizont_web/client
COPY client/package*.json ./
RUN npm install
COPY client ./
RUN npm run build

# 2. Fázis: Backend + frontend kiszolgálás
FROM node:18

WORKDIR /horizont_web

# Backend dependencies installation
COPY server/package*.json ./server/
WORKDIR /horizont_web/server
RUN npm install

# Go back to main directory
WORKDIR /horizont_web

# Copy backend source code
COPY server ./server

# Copy frontend build
COPY --from=frontend /horizont_web/client/dist ./client/dist

# Expose port
EXPOSE 80

# Set working directory to server and start app
WORKDIR /horizont_web/server
CMD ["node", "index.js"]