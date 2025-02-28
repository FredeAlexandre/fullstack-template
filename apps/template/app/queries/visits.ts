import { queryOptions } from '@tanstack/react-query'
import { getVisitsFn } from '~/functions/visits'

export const visitsQueryOptions = queryOptions({
    queryKey: ['statistics', 'visits'],
    queryFn: () => getVisitsFn(),
  })
