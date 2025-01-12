export class ClassRegistry {
  private registry: { [key: string]: string } = {};

  register(className: string, classPath: string) {
    this.registry[className] = classPath;
  }

  async getClass(className: string) {
    const classPath = this.registry[className];
    if (classPath) {
      const module = await import(classPath);
      return new module[className]();
    }
    throw new Error(`Class ${className} not found.`);
  }
}

export const classRegistry = new ClassRegistry();
