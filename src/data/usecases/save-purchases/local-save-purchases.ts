import { CacheStore } from '@/data/protocols/cache'
import { SavePurchase } from '@/domain'

export class LocalSavePurchases {
  constructor(private readonly cacheStore: CacheStore) {}
  async save(purchases: Array<SavePurchase.Params>): Promise<void> {
    this.cacheStore.delete('purchases')
    this.cacheStore.insert('purchases', purchases)
  }
}