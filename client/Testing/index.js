/* eslint-disable import/no-extraneous-dependencies */
const { Builder } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('safari')
    .build();

driver.get('http://localhost:3000');
