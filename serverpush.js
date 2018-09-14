const path = require('path')
const fs = require('fs')
const glob = require('glob')
const deepmerge = require('deepmerge')

const cwd = path.resolve(__dirname, 'dist')

const files = glob
  .sync('**/*.html', { cwd })
  .filter(f => f.indexOf('404.html') === -1)

let headers = []

for (let x = 0; x < files.length; x++) {
  const file = fs.readFileSync(`${cwd}/${files[x]}`)
  const regex = /<link.*rel=(?:'|")(preload|prefetch)(?:'|").*>/g
  const found = file.toString('utf-8').match(regex)

  if (!found) continue

  const lines = found[0].split('<link').filter(x => x)
  let values = []
  lines.forEach(line => {
    /*
     * we care about order
     * line.match(/rel=(?:'|")(.*)(?:'|")\shref=(?:'|")(.*)(?:'|")\sas=(?:'|")(.*)(?:'|")/)
     */

    const rel = line.match(/rel=(?:'|")(.*?)(?:'|")/)
    const type = line.match(/as=(?:'|")(.*?)(?:'|")/)
    const href = line.match(/href=(?:'|")(.*?)(?:'|")/)
    let value = `<${href[1]}>;rel=${rel[1]}`

    if (type) {
      value += `;as=${type[1]}`
    }

    values.push(value)
  })

  headers.push({
    source: '/' + files[x].replace(/index\.html$/, ''),
    headers: [
      {
        key: 'Link',
        value: values.join(','),
      },
    ],
  })
}

const fath = path.resolve('firebase.json')

let firebase = fs.readFileSync(fath)
firebase = JSON.parse(firebase.toString())
firebase = deepmerge(firebase, { headers })

fs.writeFileSync(fath, JSON.stringify(firebase, null, 2))
