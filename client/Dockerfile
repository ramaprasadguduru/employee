FROM node:12-alpine
RUN  mkdir emp
WORKDIR emp/
COPY    package*.json emp/
COPY    . .
RUN     npm install
CMD     ["npm" "start"]
EXPOSE  3000
