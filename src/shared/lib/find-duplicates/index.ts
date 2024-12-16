import { Equipment } from '@shared/api'

export const findDuplicates = (equipments: Equipment[]): Equipment[] => {
  const duplicates: Equipment[] = []
  const modelCountMap: Record<string, number> = {}

  equipments.forEach(({ model }) => {
    if (!modelCountMap[model]) {
      modelCountMap[model] = 1
    } else {
      modelCountMap[model] += 1
    }
  })

  for (const model in modelCountMap) {
    if (modelCountMap[model] > 1) {
      const duplicateEquipments = equipments.filter(
        (equipment) => equipment.model === model
      )

      duplicates.push(...duplicateEquipments)
    }
  }

  return duplicates
}
