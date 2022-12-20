FROM ruby:2.6-alpine3.15

WORKDIR /srv/slate
EXPOSE 4567

COPY Gemfile .
COPY Gemfile.lock .

RUN apk add --no-cache bash git nodejs npm alpine-sdk \
    && gem install bundler \
    && bundle install

RUN npm install -g widdershins
