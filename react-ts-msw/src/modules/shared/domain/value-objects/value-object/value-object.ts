import { BadRequestError } from '../../errors/bad-request-error'

type Primitives = string | number | boolean | Date

export abstract class ValueObject<T extends Primitives> {
  constructor(readonly value: T) {
    this.validateValue(value)
  }

  equals(other: ValueObject<T>): boolean {
    return (
      this.value === other.value ||
      this.constructor.name === other.constructor.name
    )
  }

  toString() {
    return this.value.toString()
  }

  private validateValue(value: T) {
    if (value === null || value === undefined) {
      throw new BadRequestError(ValueObject.invalidValueMessage())
    }
  }

  private static invalidValueMessage() {
    return 'El valor ingresado no está definido.'
  }
}
