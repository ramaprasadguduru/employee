FROM node:12-alpine
RUN  mkdir /emp
WORKDIR /emp
COPY    package.json /emp
COPY    . /emp
RUN     npm install
RUN     npm start
EXPOSE  3000
