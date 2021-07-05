import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
// 引入数据库ORM组件
import * as orm from '@midwayjs/orm';

@Configuration({
  imports:[
    orm //加载orm组件
  ],
  importConfigs: [
    join(__dirname, './config') //加载配置文件（eggjs 下不需要）
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
