const superagent = require('superagent');
require('superagent-charset')(superagent)
const cheerio = require('cheerio');

/**
 * 查询
 * @param url  爬虫URL
 * @param text   爬取解析标签
 */
exports.crawler = async function(url,text){
   let items = await superagent.get(url)
    .charset('gbk')
    .end((err, sres) => {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      let list=[]
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      let $ = cheerio.load(sres.text);
      $(text).each((idx, element) => {
        let $element = $(element);
        list.push({
          title: $element.text(),
          href: `https://www.50zw.co/book_72631/${$element.attr('href')}`
        });
      });
      return list
    });
    console.log(items)
    return items
}