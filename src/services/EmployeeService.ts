import { Injectable } from "../lib/decorators/Injectable";

@Injectable()
export default class EmployeeService {
  constructor() {}
  print() {
    console.log("I am a method of EmployeeService");
  }
}
