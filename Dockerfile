# ---- Build stage ----
FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn run build

# ---- Runtime stage ----
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
