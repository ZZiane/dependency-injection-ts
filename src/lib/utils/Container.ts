export class Container {
  private static dependencies = new Map<string, any>();

  static register(key: string, instance: any) {
    this.dependencies.set(key, instance);
  }

  static resolve(key: string) {
    const instance = this.dependencies.get(key);
    if (!instance) {
      throw new Error(`No dependency found for token: ${key}`);
    }
    return instance;
  }

  static create<T>(target: { new (...args: any[]): T }): T {
    const paramTypes: string[] =
      Reflect.getMetadata("design:paramtypes", target) || [];
    console.log(paramTypes);
    const params = paramTypes.map((token) => this.resolve(token));
    return new target(...params);
  }
}
