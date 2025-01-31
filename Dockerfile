FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# FROM node:14

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/dist ./dist

# EXPOSE 9004

CMD [ "npm", "run", "dev" ]