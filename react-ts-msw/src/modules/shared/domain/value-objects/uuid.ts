import { BadRequestError } from '../errors/bad-request-error'
import { StringValueObject } from './value-object/string-value-object'

export class Uuid extends StringValueObject {
  constructor(readonly value: string) {
    super(value)
    this.validateUuid(value)
  }

  private validateUuid(value: string) {
    if (!this.validUuidRegExp.test(value)) {
      throw new BadRequestError(Uuid.invalidUuidMessage())
    }
  }

  private static invalidUuidMessage(): string {
    return 'El UUID ingresado no es válido.'
  }

  private readonly validUuidRegExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
}
