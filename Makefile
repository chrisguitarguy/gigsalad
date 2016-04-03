.PHONY: fixtures help phpdeps jsdeps deps server build

MYSQL_USER ?= root

help:
	@echo "Commands:"
	@echo "  fixtures -- Load the database fixtures"
	@echo "  deps -- Install the required dependencies (PHP & JavaScript)"
	@echo "  phpdeps -- Install the PHP dependencies"
	@echo "  jsdeps -- Install the JavaScript dependencies"
	@echo "  serve -- Fire up the dev server on localhost:9090"
	@echo "  build -- Build the frontend code"

fixtures:
	mysql -u "$(MYSQL_USER)" -e 'DROP DATABASE IF EXISTS gigsalad'
	mysql -u "$(MYSQL_USER)" -e 'CREATE DATABASE gigsalad'
	mysql -u "$(MYSQL_USER)" gigsalad < application/fixtures/performers.sql

phpdeps:
	composer install

jsdeps:
	npm install

deps: phpdeps jsdeps

serve:
	php -S localhost:9090

build:
	gulp
