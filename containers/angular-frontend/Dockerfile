FROM node:10.13.0-slim as builder
WORKDIR /work
RUN apt-get update \
    && apt-get install --no-install-recommends -y python build-essential unzip \
    && apt-get clean
RUN npm install -g node-gyp
ADD package.json .
ADD package-lock.json .
RUN npm ci
ADD angular.json .
ADD tsconfig.json .
ADD src src
RUN npm run build


FROM nginx:stable-alpine as runner
RUN apk add --no-cache bash sed coreutils
ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
ADD ./nginx/run.sh .
ADD ./src/environments/*.ts /environments/
COPY --from=builder /work/dist/angular-frontend public
EXPOSE 80
ENTRYPOINT ["bash", "-c", "./run.sh && nginx -g \"daemon off;\""]
