FROM java:8

ADD target/universal/atlantis.zip /root/atlantis.zip
WORKDIR /root/
RUN unzip atlantis.zip
WORKDIR /root/atlantis/
ENTRYPOINT bin/atlantis

EXPOSE 9000