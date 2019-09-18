'use strict'

const fs = require('fs');

describe('fs.readFile', () =>{
    it('calls callback with error of missing file', done =>{
        const fileToRead = `${__dirname}/files/data/person.json`;

        fs.readFile(fileToRead, (err, data) =>{
            expect(err).toBeNull();
            expect(data).toBeDefined();
            done();
        })
    })
    it('reads the file and presents some data', done => {
        const fileToRead = `${__dirname}/files/data/person.json`;
        fs.readFile(fileToRead, (err, data) => {
            expect(err).toBeNull();
            expect(data).toBeDefined();
            expect(data.toString().trim().length).toBe(160);
      
            done();
    })
})
});