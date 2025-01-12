import "./lib/utils/autoRegister";
import { Inject } from "./lib/decorators/Inject";
import { Container } from "./lib/utils/Container";
import UserService from "./services/UserService";

class Main {
  constructor(@Inject("UserService") private userService: UserService) {}

  test() {
    this.userService.print();
    this.userService.printFromEmployeeService();
  }
}
const main = Container.create(Main);
main.test();
