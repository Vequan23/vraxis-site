import { readFileSync } from 'node:fs'

const bannedPhrases = [
  'delve',
  'leverage',
  'utilize',
  'harness',
  'unlock',
  'unleash',
  'empower',
  'elevate',
  'revolutionize',
  'supercharge',
  'seamless',
  'robust',
  'cutting-edge',
  'state-of-the-art',
  'best-in-class',
  'game-changer',
]

const files = process.argv.slice(2)

if (files.length === 0) {
  console.error('Pass at least one copy file to check.')
  process.exit(1)
}

const failures = []

for (const file of files) {
  const copy = readFileSync(file, 'utf8')
  const lowerCopy = copy.toLowerCase()

  if (copy.includes('\u2014')) failures.push(`${file}: contains an em dash`)
  if (copy.includes(' - ')) failures.push(`${file}: contains a spaced hyphen used as a dash`)

  for (const phrase of bannedPhrases) {
    if (lowerCopy.includes(phrase)) failures.push(`${file}: contains banned phrase "${phrase}"`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Copy check passed for ${files.length} file${files.length === 1 ? '' : 's'}.`)
