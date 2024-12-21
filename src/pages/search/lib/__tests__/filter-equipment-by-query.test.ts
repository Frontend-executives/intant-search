import { describe, expect, test } from '@jest/globals'

import { filterEquipmentByQuery } from '@pages/search/lib/filter-equipment-by-query'

import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'
import { Equipment } from '@shared/types'

describe('filterEquipmentByQuery', () => {
  const mockEquipmentList: Equipment[] = [
    {
      model: 'model-a',
      relevance: Relevance.YES,
      replacement: '',
      link: 'https://www.example.com',
      hikvision: 'model-hikvision',
      hilook: 'model-hilook',
      hiwatch: 'model-hiwatch',
      brand: Brands.HIKVISION
    },
    {
      model: 'model-b',
      relevance: Relevance.NO,
      replacement: 'model-c',
      link: 'https://www.example.com',
      hikvision: 'model-hikvision',
      hilook: 'model-hilook',
      hiwatch: 'model-hiwatch',
      brand: Brands.HIKVISION
    },
    {
      model: 'model-c',
      relevance: Relevance.YES,
      replacement: '',
      link: 'https://www.example.com',
      hikvision: 'model-hikvision',
      hilook: 'model-hilook',
      hiwatch: 'model-hiwatch',
      brand: Brands.HIKVISION
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
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
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
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
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
        relevance: Relevance.YES,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
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
