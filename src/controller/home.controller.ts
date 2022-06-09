import { Controller, Get } from '@midwayjs/decorator';
import { makeHttpRequest } from '@midwayjs/core';
import cheerio from 'cheerio';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    const url = 'https://www.baidu.com/'
    const res = await makeHttpRequest(url, {dataType: 'text'})
    // console.log('res', res.data)
    const $ = cheerio.load(res.data)
  
    // 目标dom
    const dom = $('#lg img')[0]
    if (!dom) {
      return '未找到标签'
    }
    const imgSrc = dom.attribs && dom.attribs.src
    console.log('imgSrc:', imgSrc)
      return imgSrc


  }
}
