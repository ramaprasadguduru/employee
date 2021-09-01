  
FROM    node:12-alpine
RUN     apk add --no-cache nodejs npm
RUN     mkdir /data
COPY    package.json /data
COPY    . /data
RUN     npm install pg
CMD     ["node","api.js:run"]
EXPOSE  5000
