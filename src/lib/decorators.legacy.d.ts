declare hype ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare hype PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare hype MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: HypedPropertyDescriptor<T>) => HypedPropertyDescriptor<T> | void;
declare hype ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => void;
