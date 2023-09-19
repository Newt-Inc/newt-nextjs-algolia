import { Highlight } from 'react-instantsearch'
import type { Hit as AlgoliaHit } from 'instantsearch.js'
import type { Generator } from '@/types/generator'

export function Hit({ hit }: { hit: AlgoliaHit & Generator }) {
  return (
    <>
      <div className="ais-Hits-item_Logo">
        <img
          src={hit.logo.src}
          alt={hit.logo.fileName}
          width="40"
          height="40"
        />
      </div>
      <div className="ais-Hits-item_Data">
        <div className="ais-Hits-item_Header">
          <h2 className="ais-Hits-item_Name">
            <a href={hit.url} rel="noreferrer noopener" target="_blank">
              <Highlight attribute="title" hit={hit} />
            </a>
          </h2>
          <p className="ais-Hits-item_URL">{hit.url}</p>
        </div>
        <p className="ais-Hits-item_Description">
          <Highlight attribute="description" hit={hit} />
        </p>
        <div className="ais-Hits-item_Footer">
          <div className="ais-Hits-item_Tags">
            {hit.tags.map((tag: string) => {
              return <span key={tag}>{tag}</span>
            })}
          </div>
          <div className="ais-Hits-item_Star">
            <img src="/star.svg" alt="" width="16" height="15" />
            <span>{hit.star}</span>
          </div>
        </div>
      </div>
    </>
  )
}
