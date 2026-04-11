import clsx, { type ClassArray } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassArray) {
  return twMerge(clsx(...classes))
}

export function pluralize(count: number, singular: string, plural: string) {
  const enCardinalRules = new Intl.PluralRules('en-US')
  const pluralForm = enCardinalRules.select(count)

  return pluralForm === 'one' ? singular : plural
}
