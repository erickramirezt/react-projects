import { StringMother } from "./mother-creator/string-mother"
import { Uuid } from "../../../../../src/modules/shared/domain/value-objects/uuid"

export const UuidMother = {
  create(value?: string): Uuid {
    return new Uuid(value ?? StringMother.uuid())
  },

  createInvalid(): string {
    return StringMother.word({ max: 10 })
  }
}