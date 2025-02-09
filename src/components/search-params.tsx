
import { parseAsFloat, createLoader, parseAsString } from 'nuqs/server'

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const paginationSearchParams = {
  page: parseAsFloat.withDefault(1),
  q: parseAsString.withDefault('')
}

export const loadSearchParams = createLoader(paginationSearchParams)