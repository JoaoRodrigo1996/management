
import { parseAsFloat, createLoader, parseAsString, parseAsInteger } from 'nuqs/server'

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const paginationSearchParams = {
  page: parseAsFloat.withDefault(1),
  q: parseAsString.withDefault(''),
  category: parseAsInteger.withDefault(0)
}

export const loadSearchParams = createLoader(paginationSearchParams)