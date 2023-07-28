FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]