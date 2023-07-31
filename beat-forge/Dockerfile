# syntax=docker/dockerfile:experimental
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /workspace/app

COPY . /workspace/app
RUN --mount=type=cache,target=/root/.gradle ./gradlew clean build
RUN ls -R
COPY build/libs /workspace/app/build/libs
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf /workspace/app/build/libs/beat-forge-0.0.1-SNAPSHOT.jar)


FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/build/dependency
ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.beatforge.BeatForgeApplication"]

