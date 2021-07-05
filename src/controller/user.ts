// src/controller/user.ts
import { Inject,Controller, Provide,ALL,Post,Body} from "@midwayjs/decorator";
import { User } from "../interface";
import { UserService } from "../service/user";
// 装饰器：
//       @Headers --> 获取到 URL 中的 请求头 参数部分，并将它赋值给函数入参
//       @Query --> 获取到 URL 中的 Query 参数部分，并将它赋值给函数入参
//       @Body --> 获取到 URL 中的 Body 参数部分，并将它赋值给函数入参
//       @Queries --> 暂不使用
//       @Param --> 获取路由参数
//       @Session
@Provide()
@Controller('/user')
export class UserController {
    // 测试Query和Body
    // @Post('/register')
    // async register(@Body(ALL) user:User,@Query() pageIdx: number){
    //     return {a:user,b:pageIdx}
    // }

    // 使用 @Inject 装饰器注入你的服务
    @Inject()
    userService: UserService;

    @Post('/register')
    async register(@Body(ALL) user: User):Promise<User>{
        const res = await this.userService.register(user)
      // 注册
      return res;
    }
    @Post('/login')
    async login(@Body(ALL) user: User):Promise<User>{
      // 登录
      return user;
    }
}