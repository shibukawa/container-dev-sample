FROM alpine:latest as builder

RUN apk add --no-cache go \
        git \
        binutils-gold \
        curl \
        g++ \
        gcc \
        gnupg \
        libgcc \
        linux-headers \
        make \
        python
ADD . /main
WORKDIR /main
ENV GO111MODULE=on
RUN go build

FROM alpine:latest as runner
RUN apk add --no-cache libc6-compat ca-certificates && update-ca-certificates
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
ENV SSL_CERT_DIR=/etc/ssl/certs
COPY --from=builder ./main/main ./
ENTRYPOINT [ "./main" ]