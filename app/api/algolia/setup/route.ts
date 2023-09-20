import algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + '',
  process.env.ALGOLIA_ADMIN_API_KEY + '',
)

const primaryIndex = algolia.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_PRIMARY_INDEX + '',
)
const replicaIndexStar = algolia.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_STAR + '',
)
const replicaIndexName = algolia.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_TITLE + '',
)

export async function POST() {
  try {
    await primaryIndex.setSettings({
      searchableAttributes: ['title', 'tags', 'description'],
      customRanking: ['desc(star)'],
      attributesForFaceting: ['tags'],
      replicas: [
        process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_STAR + '',
        process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_TITLE + '',
      ],
    })

    await replicaIndexStar.setSettings({
      searchableAttributes: ['title', 'tags', 'description'],
      customRanking: ['desc(star)'],
      attributesForFaceting: ['tags'],
      ranking: [
        'custom',
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
      ],
    })

    await replicaIndexName.setSettings({
      searchableAttributes: ['title', 'tags', 'description'],
      customRanking: ['asc(title)'],
      attributesForFaceting: ['tags'],
      ranking: [
        'custom',
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
      ],
    })

    return new Response('Success', { status: 200 })
  } catch (err: any) {
    return new Response(err?.message, { status: 400 })
  }
}
