const  fs = require('fs')

const del =function(id,oldnote) {

    
const newnote = JSON.parse(oldnote).filter(function(n,i) {
    return n.id !== id

} )

fs.writeFileSync('note.txt',JSON.stringify(newnote))

}
module.exports = del
