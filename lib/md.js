const Promise = require('bluebird')
const Remark = Promise.promisifyAll(require('remark'))
const html = require('remark-html')
const highlight = require('remark-highlight.js')
const matter = require('gray-matter')
const fs = require('fs-jetpack')
const { parse } = require('path')

const remark = Remark()
  .use(highlight)
  .use(html)

const md = Promise.promisify(remark.process)

module.exports.parsePost = async path => {
  const parsedPath = parse(path)
  const body = await fs.readAsync(path)
  const { content, data } = matter(body)

  const markdown = await md(content)

  return {
    ...data,
    id: data.id || parsedPath.name,
    content: markdown
  }
}

module.exports.md = md
