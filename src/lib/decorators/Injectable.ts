import { classRegistry } from "../utils/ClassRegister";
import { Container } from "../utils/Container";
import "reflect-metadata";

export function Injectable(key: string) {
  return function (constructor: Function) {
    const paramTypes: any[] =
      Reflect.getMetadata("design:paramtypes", constructor) || [];
    let params = paramTypes.map((paramType: any) => {
      try {
        return Container.resolve(paramType);
      } catch (error) {
        return Container.register(paramType, classRegistry.getClass(paramType));
      }
    });
    const instance = new (constructor as any)(...params);
    Container.register(key ?? constructor.name, instance);
  };
}
