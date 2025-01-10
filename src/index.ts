import { Inject } from "./lib/decorators/Inject";
import { Container } from "./lib/utils/Container";
import EmployeeService from "./services/EmployeeService";
import UserService from "./services/UserService";

class Main {
  constructor(
    @Inject("UserService") private userService: UserService,
    @Inject("EmployeeService") private employeeService: EmployeeService
  ) {}

  test() {
    this.userService.print();
    this.employeeService.print();
  }
}

const main = Container.create(Main);
main.test();
