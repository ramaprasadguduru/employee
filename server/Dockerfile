FROM    node:12-alpine
RUN     mkdir data
COPY    package*.json data/
WORKDIR data/
COPY    . .
RUN     npm install
CMD     ["node","api.js"]
EXPOSE  5000
