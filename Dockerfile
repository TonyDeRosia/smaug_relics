FROM ubuntu:22.04

# Install build dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential autoconf automake libtool pkg-config intltool file \
        git ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy source
WORKDIR /opt/smaug
COPY . /opt/smaug

# Build and install
RUN ./autogen.sh && \
    ./configure && \
    make && \
    make install

EXPOSE 4000

CMD ["/bin/bash", "-c", "/usr/local/etc/init.d/smaugd start && tail -F /usr/local/var/log/smaug/smaug.log"]
