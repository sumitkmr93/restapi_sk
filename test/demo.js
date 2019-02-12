const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const animals = {pets:['dog','cat','hamster']};
const foo = 'bar';

function mysquare(n){
   return n*n;
}

function fizzbuzz(n){
   if(n%15==0){
      return("fizzbuzz");
   }
   else if(n%5==0){
      return("buzz");
   }
   else if(n%3==0){
      return("fizz");
   }
   else{
      return n.toString();
   }
   
}

describe('Some code to test',()=>{
 it('My First Test',()=>{
    const anumber = 10;
    expect(anumber).to.exist;
 });
 
 it('This is another test',()=>{
    const val = false;
    expect(val).to.equal(false);
 });

it('Test a function',()=>{
   res = mysquare(2);
   expect(res).to.equal(4);
});

it('Test fizzbuzz',()=>{
   var res = fizzbuzz(1);
   expect(res).to.equal("1");
   res = fizzbuzz(2);
   expect(res).to.equal("2");
   res = fizzbuzz(3);
   expect(res).to.equal("fizz");
   res = fizzbuzz(5);
   expect(res).to.equal("buzz");
   res = fizzbuzz(10);
   expect(res).to.equal("buzz");
   res = fizzbuzz(12);
   expect(res).to.equal("fizz");
   res = fizzbuzz(45);
   expect(res).to.equal("fizzbuzz");
});

});
