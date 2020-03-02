import { split, pipe, last } from 'ramda'

export const splitAndGetLast: (sep: string | RegExp, str: string) => string = pipe(split, last)