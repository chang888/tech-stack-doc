import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const startTime = new Date().getTime()
    
    const result = await createHttpRequest(app).get('/');
    const endTime = new Date().getTime()
    const time = endTime - startTime
    // console.log('time', time)
    
    expect(time).toBeLessThanOrEqual(1000);
    expect(result.text).toBe('//www.baidu.com/img/bd_logo1.png');
    
    // close app
    await close(app);
  });

});
