FROM node:10.15.0

LABEL name=wangnima

ENV TZ="Asia/Shanghai"

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /var/www

COPY ./app /var/www/wechat_bot

WORKDIR /var/www/wechat_bot

RUN npm install

CMD ["npm","run","start"]