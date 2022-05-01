const mongoose = require('mongoose');
const expect = require('chai').expect;
const Employee = require('../employee.model');

describe('Employee', () => {
  it('should throw an error if no "firstName" or "lastName" or "department" arg' , () => {
    const emp = new Employee({});

    emp.validate(err => {
      expect(err.errors).to.have.all.keys('firstName', 'lastName', 'department');
    });
  });


  it('should throw an error if "firstName" is not a string', () => {
    const cases = [{}, []];
    const lastName = 'Doe';
    const department = '623dcbe97de327fafef4df39';
    for (firstName of cases) {
      const emp = new Employee({ firstName, lastName, department });
      emp.validate(err => {
        expect(err).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {
    const cases = [{}, []];
    const firstName = 'John';
    const department = '623dcbe97de327fafef4df39';
    for (lastName of cases) {
      const emp = new Employee({ firstName, lastName, department });
      emp.validate(err => {
        expect(err).to.exist;
      });
    }
  });

  it('should throw an error if "department" is not an object', () => {
    const cases = [123, 'IT'];
    const firstName = 'John';
    const lastName = 'Doe';
    for (department of cases) {
      const emp = new Employee({ firstName, lastName, department });
      emp.validate(err => {
        expect(err).to.exist;
      });
    }
  });

  it('should not throw an error if "firstName" or "lastName" or "department" is okay', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const department = '623dcbe97de327fafef4df39';
    const emp = new Employee({ firstName, lastName, department });

    emp.validate(err => {
      expect(err).to.not.exist;
    });
  });
});