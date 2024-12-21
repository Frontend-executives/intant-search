import { Equipment } from '@shared/types'

export const findInvalidReplacements = (
  equipmentList: Equipment[]
): Equipment[] => {
  const invalidReplacements: Equipment[] = []

  equipmentList.forEach((equipment) => {
    const replacement = equipment.replacement

    if (!replacement) return

    const foundReplacement = equipmentList.find(({ model }) => {
      return model === replacement
    })

    if (!foundReplacement) invalidReplacements.push(equipment)
  })

  return invalidReplacements
}
