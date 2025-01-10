import "reflect-metadata";

export function Inject(token: string) {
  return function (
    target: Object,
    _: string | symbol | undefined,
    parameterIndex: number
  ) {
    if (parameterIndex === undefined) {
      throw new Error("@Inject can only be applied to constructor parameters.");
    }

    const existingTokens: string[] =
      Reflect.getMetadata("design:paramtypes", target) || [];
    existingTokens[parameterIndex] = token;
    Reflect.defineMetadata("design:paramtypes", existingTokens, target);
  };
}
