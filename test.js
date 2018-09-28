"use strict";
const chai = require("chai");
const expect = chai.expect;
const ClassName = require('./');

describe('#ClassName', () => {
  let classes = {};
  before(() => {
    classes = {
      'kiri': true,
      'kanan': 1,
      'warning': undefined,
      'error': false,
      'panix': 0,
      'danger': null,
      leftSide: true
    };
  });
  it('should hide keys with truthy value', () => {
    expect(ClassName(classes)).not.to.eq('warning error panix danger');
  });
  it('should show keys with truthy value', () => {
    expect(ClassName(classes)).to.eq('kiri kanan left-side');
  });
  it('should support convert camelCase to Dash', () => {
    const newClasses = {
      rightCol: true,
      LeftCol: true,
    };
    const classResults = ClassName(newClasses).split(' ');

    expect(classResults[0]).to.eq('right-col');
    expect(classResults[1]).to.eq('left-col');

    expect(classResults[0]).not.to.eq('rightCol');
    expect(classResults[1]).not.to.eq('leftCol');
  });
});
