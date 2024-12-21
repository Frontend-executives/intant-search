import { Equipment } from '@shared/types'

export const findDuplicates = (equipmentList: Equipment[]): Equipment[] => {
  const duplicates: Equipment[] = []
  const modelCountMap: Record<string, number> = {}

  equipmentList.forEach(({ model }) => {
    if (!modelCountMap[model]) {
      modelCountMap[model] = 1
    } else {
      modelCountMap[model] += 1
    }
  })

  for (const model in modelCountMap) {
    if (modelCountMap[model] > 1) {
      const duplicateEquipments = equipmentList.filter(
        (equipment) => equipment.model === model
      )

      duplicates.push(...duplicateEquipments)
    }
  }

  return duplicates
}
