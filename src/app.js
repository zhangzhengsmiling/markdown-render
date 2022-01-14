const hljs = require('highlight.js')
const fs = require('fs');
const path = require('path');
const markdown = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});


const data = fs.readFileSync(path.resolve(__dirname, './demo.md')).toString();

const layout = (ch) => {
  return (
    "<html>" + "<head><link rel=\"stylesheet\" href=\"./demo.css\"></link></head><div class=\"post\">" + ch + "</div></html>"
  )
}

fs.writeFileSync(path.resolve(__dirname, 'demo.html'), layout(markdown.render(
  data
)))
