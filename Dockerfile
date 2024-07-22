FROM httpd:2.4
RUN mkdir -p /usr/local/apache2/minifleet-web-app/
COPY ./dist/minifleet-web-app/ usr/local/apache2/minifleet-web-app/
COPY .htaccess /usr/local/apache2/minifleet-web-app
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
RUN mkdir -p /usr/local/apache2/conf/sites/
COPY minifleet-web-app.conf /usr/local/apache2/conf/sites/minifleet-web-app.conf

ENTRYPOINT ["httpd", "-D", "FOREGROUND"]
EXPOSE 80