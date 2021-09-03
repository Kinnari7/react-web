#step 1
FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN npm run build


#step 2
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]