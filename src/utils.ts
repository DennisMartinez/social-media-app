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

export function formatDate(date: Date | string | number) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const intervals: { label: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ]

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds)

    if (count >= 1) {
      return rtf.format(-count, interval.label)
    }
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}
