const path = require('path')
const yargs = require('yargs')
const Server = require('next-static-tools').default
const next = require('next')
const { TestServer } = require('next-static-tools')
const app = next({ dev: true })

yargs
  .version()
  .command(
    'dev',
    'run dev server',
    () => {
      const server = new TestServer(app)
      // add yo custom middleware
      server.get('/post/:id', (req, res) => {
        return app.render(req, res, '/post', {
          id: req.params.id
        })
      })

      server
        .start(5000)
        .then(port => console.log(`server on http://localhost:${port}`))
        .catch(console.err)
    }
  )
  .command(
    'export',
    'export static site',
    () => {
      const server = new Server(app)
      server.export()
        .then(() => process.exit())
        .catch((err) => {
          console.log(err)
          process.exit(1)
        })
    }
  ).argv
