FROM openjdk:11.0.1-jdk-slim-sid as builder
WORKDIR /work
ADD  build.gradle .
ADD  gradlew .
ADD  settings.gradle .
ADD  gradle gradle
RUN ./gradlew bootJar 2> /dev/null; exit 0
ADD  src src
RUN ./gradlew bootJar


FROM openjdk:11.0.1-jre-slim-sid as runner
COPY --from=builder /work/build/libs/fortune.jar .
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "fortune.jar"]
