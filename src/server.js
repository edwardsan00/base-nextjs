import express from 'express'
import next from 'next'
import path from 'path'
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  components: __dirname + '/componenets',
  containers: __dirname + '/containers',
  pages     : __dirname + '/pages',
  utils     : __dirname + '/utils'
})
const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use(express.static(path.join(__dirname, '../public')))

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(process.env.PORT)
})
