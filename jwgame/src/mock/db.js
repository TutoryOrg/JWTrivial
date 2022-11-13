/* eslint-disable @typescript-eslint/no-var-requires */
const countries = require('./data/countries.json');
const questions = require('./data/questions.json');

module.exports = () => ({
    countries,
    questions,
});
