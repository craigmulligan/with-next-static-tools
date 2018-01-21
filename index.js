const yargs = require('yargs')
const next = require('next')
const { build, createServer } = require('next-static-tools')

yargs
  .version()
  .command('dev', 'run dev server', () => {
    const dev = process.env.node_env !== 'production'
    const app = next({ dev })

    const server = createServer(app)
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
    build()
      .then(() => 'Your static site is ready!')
      .then(() => process.exit())
      .catch(err => {
        console.log(err)
        process.exit(1)
      })
  }).argv
