let basic = {
  name: "ghost",
  attr: "hungry",
  parent: 0,
  owner: -1,
}

function Vessel(data = basic)
{
  this.parade = null
  this.data = data;

  this.act = function(action,params)
  {
    const responder = this.response(action)
    return new responder(this).run(params)
  }

  this.response = function(action)
  {
    try{
      return require(`./actions/${action}`);
    }
    catch(ex){
      return require(`./action`);
    } 
  }

  this.parent = function()
  {
    return this.parade.world[this.data.parent]
  }

  // Helpers

  this.is = function(str)
  {
    var parts = str.split(" ")
    var last_word = parts[parts.length-1].toLowerCase();

    if(last_word == this.data.name){
      return true;
    }
    return false;
  }

  this.sight = function()
  {
    var siblings = this.siblings();
    return siblings
  }

  this.siblings = function()
  {
    var a = []
    for(id in this.parade.world){
      var vessel = this.parade.world[id];
      if(vessel.parent().id == this.parent().id && vessel.id != this.id){
        a.push(vessel)
      }
    }
    return a
  }

  // Formatters

  this.debug = function()
  {
    return this.data
  }

  this.to_h = function()
  {
    return {
      name: this.name,
      attr: this.attr
    }
  }

  this.to_s = function()
  {
    return `<<${this.data.attr ? this.data.attr+' ' : ''}${this.data.name}(${this.id})>>`
  }
}

module.exports = Vessel