FROM httpd:2.4
RUN mkdir -p /usr/local/apache2/fc-web-app/
COPY ./dist/webapp/ /usr/local/apache2/fc-web-app/
COPY .htaccess /usr/local/apache2/fc-web-app
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
RUN mkdir -p /usr/local/apache2/conf/sites/
COPY fc-web-app.conf /usr/local/apache2/conf/sites/fc-web-app.conf

ENTRYPOINT ["httpd", "-D", "FOREGROUND"]
EXPOSE 80