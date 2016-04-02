.PHONY: fixtures help

MYSQL_USER ?= root

help:
	@echo "Commands:"
	@echo "  fixtures -- Load the database fixtures"

fixtures:
	mysql -u "$(MYSQL_USER)" -e 'DROP DATABASE IF EXISTS gigsalad'
	mysql -u "$(MYSQL_USER)" -e 'CREATE DATABASE gigsalad'
	mysql -u "$(MYSQL_USER)" gigsalad < application/fixtures/performers.sql
