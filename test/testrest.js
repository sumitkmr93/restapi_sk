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

describe('/PUT change a contact', () => {
    it('PUT a contact', (done) => {
        let contact = {
            name: "Sumit K",
            phone: "001298756767"
        }
        chai.request(server)
          .put('/contacts/5c6186d19078b5148ca7740a')
          .send(contact)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('Sumit K')
            done();
          });
    });

});

describe('/DELETE delete a contact', () => {
    it('DELETE a contact', (done) => {
        chai.request(server)
          .delete('/contacts/5c6186d19078b5148ca7740a')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });

});