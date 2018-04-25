function Transmute(host)
{
  require(`../action`).call(this,host,"transmute");

  this.operate = function(params)
  {
    var parts = params.split(" ")
    var attr = parts[parts.length-1].toLowerCase()

    this.host.set("attr",attr)
  }
}

module.exports = Transmute