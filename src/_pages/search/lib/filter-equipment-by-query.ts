import { Equipment } from '@shared/api'

type Params = {
  searchQuery: string
  equipmentList: Equipment[]
}

type FilterEquipmentByQuery = ({
  searchQuery,
  equipmentList
}: Params) => Equipment[]

export const filterEquipmentByQuery: FilterEquipmentByQuery = ({
  searchQuery,
  equipmentList
}) => {
  const cleanQuery = searchQuery.toLowerCase().trim()

  return equipmentList.filter(({ model }) => {
    return (
      cleanQuery === model ||
      model.includes(cleanQuery) ||
      cleanQuery.includes(model)
    )
  })
}
