describe('Simple module:Person',function(){

  it("should have a person constructor",function(){
    var person = new Person({name:'senthil'});
      expect(person.name).to.equal('senthil');
  });

});