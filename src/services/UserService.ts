import { Inject } from "../lib/decorators/Inject";
import { Injectable } from "../lib/decorators/Injectable";
import EmployeeService from "./EmployeeService";

@Injectable("UserService")
export default class UserService {
  constructor(
    @Inject("EmployeeService") private employeeService: EmployeeService
  ) {}
  print() {
    console.log("I am a method of UserService");
  }
  printFromEmployeeService() {
    this.employeeService.print();
  }
}
