const express = require('express')
const hljs = require('highlight.js')
const fs = require('fs')
const path = require('path')
const markdown = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return ''
  }
}).use(require('markdown-it-latex2img'))

const mixIdForHeader = (content) => {
  return markdown
    .render(content)
    .replaceAll(/<h1>(.*)<\/h1>/g, '<h1 id="$1">$1</h1>')
    .replaceAll(/<h2>(.*)<\/h2>/g, '<h2 id="$1">$1</h2>')
    .replaceAll(/<h3>(.*)<\/h3>/g, '<h3 id="$1">$1</h3>');
}

const move = (source, target, callback) => {
  let sourceContent = fs.readFileSync(source)
  if (typeof callback === 'function') sourceContent = callback(sourceContent)
  fs.writeFileSync(target, sourceContent)
}

const posts = fs.readdirSync(path.resolve(__dirname, './source/posts'))
posts.forEach((post) => {
  move(
    path.resolve(__dirname, './source/posts', post),
    path.resolve(__dirname, '../public/posts', post.replace('.md', '.html')),
    (stream) => {
      const template = fs.readFileSync(
        path.resolve(__dirname, './template/post/index.html')
      ).toString();
      return template.replace('%post%', mixIdForHeader(stream.toString()))
    }
  )
})

fs.cpSync(path.resolve(__dirname, 'source/css'), path.resolve(__dirname, '../public/css'), {
  recursive: true
})

move(
  path.resolve(__dirname, '../node_modules/highlight.js/styles/atom-one-dark.css'),
  path.resolve(__dirname, '../public/css', 'code-theme.css')
)

move(
  path.resolve(__dirname, '../node_modules/markdown-it-latex/dist/index.css'),
  path.resolve(__dirname, '../public/css/latex.css')
)

const app = express()

app.use('/', express.static(path.resolve(__dirname, '../public')))

app.listen(7777, () => {
  console.log('server started on 7777')
})
