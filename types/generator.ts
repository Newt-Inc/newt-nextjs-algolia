import type { Content, Media } from 'newt-client-js'

export interface Generator extends Content {
  title: string
  logo: Media
  description: string
  url: string
  tags: string[]
  star: number
}
