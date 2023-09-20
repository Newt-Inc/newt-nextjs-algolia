import algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + '',
  process.env.ALGOLIA_ADMIN_API_KEY + '',
)

const primaryIndex = algolia.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_PRIMARY_INDEX + '',
)

export async function POST() {
  try {
    await primaryIndex.setSettings({
      searchableAttributes: ['title', 'tags', 'description'],
    })

    return new Response('Success', { status: 200 })
  } catch (err: any) {
    return new Response(err?.message, { status: 400 })
  }
}
