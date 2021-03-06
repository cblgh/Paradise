function Transmute(host)
{
  require(`../action`).call(this,host,"transmute");

  this.docs = "Change your current vessel attribute."

  this.operate = function(params)
  {
    var parts = this.remove_articles(params).split(" ")
    var attr = parts[parts.length-1].toLowerCase()
    var target = parts.length > 2 ? this.find_target(this.host.siblings(),parts[0],null) : this.host
    if(!target){ return this.err_NOTARGET(parts[0]); }
    var origin = target.data.attr

    if(params.trim() == ""){ return `<p>Huh?! For more details on how to transform, type <action data='help with transform'>help</action>.</p>`; }
    
    target.set("attr",attr)
    return `<p>You transmuted ${target.id != this.host.id ? origin : ''} into <action>${attr}</action>.</p>`
  }
}

module.exports = Transmute