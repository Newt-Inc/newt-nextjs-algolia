import { NextRequest } from 'next/server'
import algoliasearch from 'algoliasearch'
import { getGenerators } from '@/lib/newt'

const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + '',
  process.env.ALGOLIA_ADMIN_API_KEY + '',
)

const index = algolia.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_PRIMARY_INDEX + '',
)

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== process.env.ALGOLIA_SECRET_TOKEN) {
    return new Response('Invalid token', { status: 401 })
  }

  try {
    const generators = await getGenerators()
    const formattedGenerators = generators.map((generator) => {
      return {
        objectID: generator._id,
        ...generator,
      }
    })

    await index.saveObjects(formattedGenerators)
    return new Response('Success', { status: 200 })
  } catch (err: any) {
    return new Response(err?.message, { status: 400 })
  }
}
