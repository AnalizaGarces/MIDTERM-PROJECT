const fs = require('fs')

const add = function(note=[], oldnote) {
    let finalnote = JSON.parse(oldnote)

    finalnote.push(note)

    let objectnote = JSON.stringify(finalnote)

    fs.writeFileSync('note.txt' , objectnote)
}

 module.exports = add