FROM node:lts-slim as builder
WORKDIR /work
#RUN apt-get update \
#    && apt-get install --no-install-recommends -y python build-essential unzip \
#    && apt-get clean
#RUN npm install -g node-gyp
ADD package.json .
ADD package-lock.json .
RUN npm ci
ADD next.config.js .
ADD .babelrc .
ADD tsconfig.json .
ADD src src
ADD pages pages
ADD server server
RUN npm run build


FROM node:lts-alpine as runner
COPY --from=builder /work/.next .next
COPY --from=builder /work/dist dist
ADD package.json .
ADD package-lock.json .
RUN npm ci --production
EXPOSE 3000
ENTRYPOINT ["node", "dist/server/server.js"]
