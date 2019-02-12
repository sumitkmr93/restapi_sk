let mongoose = require("mongoose");
let Contact = require('../api/models/contactsModel');

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);


describe('/GET contacts', () => {
    it('it should GET all the contacts', (done) => {
      chai.request(server)
          .get('/contacts')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});

describe('/POST add a contact', () => {
    it('Post a contact', (done) => {
        let contact = {
            name: "Joe Tester",
            phone: "00353 1234567"
        }
        chai.request(server)
          .post('/contacts')
          .send(contact)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });

});