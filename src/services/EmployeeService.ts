import { Injectable } from "../lib/decorators/Injectable";

@Injectable("EmployeeService")
export default class EmployeeService {
  constructor() {}
  print() {
    console.log("I am a method of EmployeeService");
  }
}
