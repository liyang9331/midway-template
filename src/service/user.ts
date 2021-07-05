import { Provide } from '@midwayjs/decorator';
import { User } from '../interface';

@Provide()
// 服务 UserService
export class UserService {
  async register(options: User){
    return options;
  }
}
