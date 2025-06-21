FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /opt/relics
COPY . /opt/relics
RUN npm install --production

EXPOSE 4000 8080
CMD ["node", "bin/run-relics.js"]
