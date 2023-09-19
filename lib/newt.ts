import 'server-only'
import { createClient } from 'newt-client-js'
import { Generator } from '@/types/generator'

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID + '',
  token: process.env.NEXT_PUBLIC_NEWT_CDN_TOKEN + '',
  apiType: 'cdn',
})

export const getGenerators = async (): Promise<Generator[]> => {
  const { items } = await client.getContents<Generator>({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID + '',
    modelUid: process.env.NEXT_PUBLIC_NEWT_MODEL_UID + '',
    query: {
      description: { fmt: 'text' },
    },
  })
  return items
}
