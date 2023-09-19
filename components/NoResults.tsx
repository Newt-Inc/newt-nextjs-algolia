import { useInstantSearch } from 'react-instantsearch'

export function NoResultsBoundary({ children, fallback }: any) {
  const { results } = useInstantSearch()

  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    )
  }

  return children
}

export function NoResults() {
  const { indexUiState } = useInstantSearch()

  return (
    <div className="ais-Hits_Empty">
      <p>
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  )
}
