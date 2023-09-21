import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import type { Generator } from '@/types/generator'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_TOKEN + '',
  apiType: 'cdn',
})

export const getGenerators = cache(async () => {
  const { items } = await client.getContents<Generator>({
    appUid: process.env.NEWT_APP_UID + '',
    modelUid: process.env.NEWT_MODEL_UID + '',
    query: {
      description: { fmt: 'text' },
    },
  })
  return items
})
