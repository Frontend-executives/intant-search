import { Equipment } from '@shared/api'

export const findInvalidReplacements = (
  equipments: Equipment[]
): Equipment[] => {
  const invalidReplacements: Equipment[] = []

  equipments.forEach((equipment) => {
    const replacement = equipment.replacement

    if (!replacement) return

    const foundReplacement = equipments.find(({ model }) => {
      return model === replacement
    })

    if (!foundReplacement) invalidReplacements.push(equipment)
  })

  return invalidReplacements
}
