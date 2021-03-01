// import SavePurchase from 'domain/usecases/save-purchases.ts'
class LocalSavePurchases {
  constructor(private readonly cacheStore: CacheStore) {}
}

interface CacheStore {
  
}

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
}

describe('LocalSavePurchase', () => {
  test('Should not delete cache on sut.init', () => {
    const cacheStore = new CacheStoreSpy() 
    new LocalSavePurchases(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })
})
