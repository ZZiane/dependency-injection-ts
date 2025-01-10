import { Container } from "../utils/Container";

export function Injectable(key: string) {
  return function (constructor: Function) {
    Container.register(key, new (constructor as any)());
  };
}
