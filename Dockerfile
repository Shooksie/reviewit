FROM node:15.5.0

WORKDIR app

COPY . .

RUN yarn

CMD ['yarn nx serve webapp']
