const express = require('express');
const chai = require('chai');
const request = require('supertest');

const app = express();


describe('POST Create Short Url Code', () => {
    it('should create short code for the url', () => {
        request(app)
        .post('api/url/create')
        .send({original_url: 'https://nodejs.org/en/'})
        .expect(201);
    });
});

describe('GET original URL from short code', () => {
    it('should get original URL from the short code', () => {
        request(app)
        .get('api/url/get/18z1hg4u3uuyq')
        .send({})
        .expect(201);
    });
});
