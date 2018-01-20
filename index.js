const path = require('path')
const yargs = require('yargs')
const next = require('next')
const Server = require('next-static-tools').default
const { build } = require('next-static-tools')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

yargs
  .version()
  .command('dev', 'run dev server', () => {
    const server = new Server(app)
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
