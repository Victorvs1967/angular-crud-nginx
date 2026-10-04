# ------- Build Stage -------
FROM node:24.14-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build-prod

# -------- Nginx Stage -------
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/angular-crud-nginx/browser /usr/share/nginx/html

RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]