# ============================================
# ProductbyBlake — static portfolio site
# Builds the Vite/React app, then serves the
# compiled assets with nginx.
# ============================================

# ── Stage 1: Build ────────────────────────────
FROM node:20-slim AS build

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# ── Stage 2: Serve ────────────────────────────
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
