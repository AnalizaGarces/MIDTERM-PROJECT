const fs = require('fs')

const update = function (note, oldnote) {
    const newnote = JSON.parse(oldnote).map(function(n, i) {
    if(n.id == note.id)
    {
        n.title = note.title
        n.body = note.body
    }
return n
}) 
fs.writeFileSync('note.txt',JSON.stringify(newnote))
}
module.exports = update