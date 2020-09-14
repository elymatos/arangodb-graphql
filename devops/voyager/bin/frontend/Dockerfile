FROM framenetbrasil/apache-php:v3.5.0

RUN apt-get update
RUN apt-get install -y nodejs npm
RUN apt-get install -y gnupg2
RUN npm i npm@latest -g
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn



