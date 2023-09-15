'use client'
import algoliasearch from 'algoliasearch/lite'
import {
  Hits,
  InstantSearch,
  PoweredBy,
  RefinementList,
  SearchBox,
  SortBy,
} from 'react-instantsearch'
import styles from './page.module.css'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY + '',
)

export default function Home() {
  return (
    <div className={styles.Wrapper}>
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_PRIMARY_INDEX + ''}
        searchClient={searchClient}
      >
        <header className={styles.Header}>
          <dl>
            <dt>Newt・Algolia・Next.js Example</dt>
            <dd>
              <a
                href="https://github.com/Newt-Inc/newt-algolia-nextjs"
                rel="noreferrer noopener"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.newt.so/docs/tutorials/search-by-algolia"
                rel="noreferrer noopener"
                target="_blank"
              >
                Tutorial
              </a>
            </dd>
          </dl>
          <h1>Static Site Generators 😉</h1>
          <div className="ais-Search_Wrapper">
            <SearchBox />
            <span className="ais-Search_Icon">
              <img src="/search.svg" alt="" width="19" height="19" />
            </span>
            <PoweredBy className="ais-Search_Logo" />
          </div>
        </header>
        <div className={styles.Container}>
          <nav className={styles.Nav}>
            <h2>Sort</h2>
            <SortBy
              items={[
                {
                  value: process.env.NEXT_PUBLIC_ALGOLIA_PRIMARY_INDEX + '',
                  label: 'Relevance',
                },
                {
                  value:
                    process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_STAR + '',
                  label: 'GitHub Stars',
                },
                {
                  value:
                    process.env.NEXT_PUBLIC_ALGOLIA_REPLICA_INDEX_TITLE + '',
                  label: 'Title',
                },
              ]}
            />
            <h2>Filter</h2>
            <RefinementList
              attribute={'tags'}
              limit={10}
              sortBy={['count:desc', 'name:asc']}
            />
          </nav>
          {/* <main className={styles.Main}>
            <NoResultsBoundary fallback={<NoResults />}>
              <Hits hitComponent={Hit} />
            </NoResultsBoundary>
          </main> */}
        </div>
        <footer className={styles.Footer}>
          <dl>
            <dt>Newt・Algolia・Next.js Example</dt>
            <dd>
              <a
                href="https://github.com/Newt-Inc/newt-algolia-nextjs"
                rel="noreferrer noopener"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.newt.so/docs/tutorials/search-by-algolia"
                rel="noreferrer noopener"
                target="_blank"
              >
                Tutorial
              </a>
            </dd>
          </dl>
        </footer>
      </InstantSearch>

      <a
        href="https://newt.so/"
        rel="noreferrer noopener"
        target="_blank"
        className={styles.Badge}
      >
        <img src="/logo.svg" alt="Newt" width="16" height="13" />
        <span className={styles.Badge_Text}>Made in Newt</span>
      </a>
    </div>
  )
}
