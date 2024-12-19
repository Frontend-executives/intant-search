import { describe, expect, it } from '@jest/globals'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { Relevance } from '@shared/enums/relevance'
import { findSelfReplacement } from '@shared/lib/find-self-replacement'

describe('findSelfReplacement', () => {
  it('should return an empty array when the equipment list is empty', () => {
    const equipmentList: Equipment[] = []

    const result = findSelfReplacement(equipmentList)

    expect(result).toEqual([])
  })

  it('should return an empty array if no equipment is replaced by itself', () => {
    const equipmentList = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-b',
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
      }
    ]

    const result = findSelfReplacement(equipmentList)

    expect(result).toEqual([])
  })

  it('should return correctly list where equipment is replaced by itself', () => {
    const equipmentList = [
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-a',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-c',
        relevance: Relevance.NO,
        replacement: 'model-d',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-d',
        relevance: Relevance.NO,
        replacement: '',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ]

    const result = findSelfReplacement(equipmentList)

    expect(result).toEqual([
      {
        model: 'model-a',
        relevance: Relevance.NO,
        replacement: 'model-a',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      },
      {
        model: 'model-b',
        relevance: Relevance.NO,
        replacement: 'model-b',
        link: 'https://www.example.com',
        hikvision: 'model-hikvision',
        hilook: 'model-hilook',
        hiwatch: 'model-hiwatch',
        brand: Brands.HIKVISION
      }
    ])
  })
})
