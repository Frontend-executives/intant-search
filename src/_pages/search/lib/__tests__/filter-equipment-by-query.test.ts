import { describe, expect, test } from '@jest/globals'
import { Equipment } from '@/shared/api'
import { filterEquipmentByQuery } from '@/_pages/search/lib/filter-equipment-by-query'

describe('filterEquipmentByQuery', () => {
  const mockEquipmentList: Equipment[] = [
    {
      model: 'model-a',
      relevance: 'yes',
      replacement: '',
      link: 'https://www.example.com'
    },
    {
      model: 'model-b',
      relevance: 'no',
      replacement: 'model-c',
      link: 'https://www.example.com'
    },
    {
      model: 'model-c',
      relevance: 'yes',
      replacement: '',
      link: 'https://www.example.com'
    }
  ]

  test('should return model-a', () => {
    const result = filterEquipmentByQuery({
      searchQuery: 'model-a',
      equipmentList: mockEquipmentList
    })

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: 'yes',
        replacement: '',
        link: 'https://www.example.com'
      }
    ])
  })

  test('should return partial matches (model includes query)', () => {
    const result = filterEquipmentByQuery({
      searchQuery: 'model',
      equipmentList: mockEquipmentList
    })

    expect(result).toEqual(mockEquipmentList)
  })

  test('should returns partial matches (query includes model)', () => {
    const result = filterEquipmentByQuery({
      searchQuery: 'model-ab',
      equipmentList: mockEquipmentList
    })

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: 'yes',
        replacement: '',
        link: 'https://www.example.com'
      }
    ])
  })

  test('should trims and lowercases search query', () => {
    const result = filterEquipmentByQuery({
      searchQuery: '   Model-a   ',
      equipmentList: mockEquipmentList
    })

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: 'yes',
        replacement: '',
        link: 'https://www.example.com'
      }
    ])
  })

  test('should return empty array when no matches found', () => {
    const result = filterEquipmentByQuery({
      searchQuery: 'model-unknown',
      equipmentList: mockEquipmentList
    })

    expect(result).toEqual([])
  })

  test('should handle empty equipment list gracefully', () => {
    const result = filterEquipmentByQuery({
      searchQuery: 'model-a',
      equipmentList: []
    })

    expect(result).toEqual([])
  })
})
