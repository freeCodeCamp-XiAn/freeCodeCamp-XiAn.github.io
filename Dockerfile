FROM abiosoft/caddy
LABEL maintainer="guzhongren@live.cn"
COPY ./build/ /www
COPY Caddyfile /etc/Caddyfile
