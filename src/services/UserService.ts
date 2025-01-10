import { Injectable } from "../lib/decorators/Injectable";

@Injectable("UserService")
export default class UserService {
  constructor() {}
  print() {
    console.log("I am a method of UserService");
  }
}
