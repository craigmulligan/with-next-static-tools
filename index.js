const path = require('path')
const yargs = require('yargs')
const next = require('next')
const Server = require('next-static-tools')
const { build } = require('next-static-tools')
const dev = process.env.NODE_ENV !== 'production'

yargs
  .version()
  .command('dev', 'run dev server', () => {
    const app = next({ dev })
    const server = new Server(app)
    // add yo custom middleware
    server.get('/post/:id', (req, res) => {
      return app.render(req, res, '/post', {
        id: req.params.id
      })
    })

    server
      .start()
      .then(port => console.log(`server on http://localhost:${port}`))
      .catch(console.err)
  })
  .command('export', 'export static site', () => {
    const cwd = process.cwd()
    build(cwd)
      .then(() => process.exit())
      .catch(err => {
        console.log(err)
        process.exit(1)
      })
  }).argv
