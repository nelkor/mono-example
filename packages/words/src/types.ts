export type SupportedLang = 'en' | 'ru' | 'es'

export type WordSet = {
  name: Record<SupportedLang, string>
  words: Record<SupportedLang, string>[]
}
