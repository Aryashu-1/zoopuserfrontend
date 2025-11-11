# Multi-stage build for a Vite + React app
# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies (use npm ci when lockfile exists)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source
COPY . .

# Build the app
RUN npm run build

# Production stage: use nginx to serve the built files
FROM nginx:stable-alpine AS production

# Remove default nginx index - we'll overwrite the html directory
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default nginx config with one suited for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
