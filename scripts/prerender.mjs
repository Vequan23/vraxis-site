import { readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const appMarker = '<div id="app"></div>'
const requiredContent = [
  'Your tools. Your agents. Your machine.',
  'Vraxis Read',
  'https://read.vraxis.dev',
  'Vraxis Home',
  'https://www.npmjs.com/package/@vraxis/home',
]

export function injectPrerenderedHtml(template, appHtml) {
  if (!template.includes(appMarker)) {
    throw new Error(`Prerender failed: ${appMarker} was not found in dist/index.html.`)
  }

  if (!appHtml.trim()) {
    throw new Error('Prerender failed: Vue returned an empty application.')
  }

  return template.replace(appMarker, `<div id="app">${appHtml}</div>`)
}

export function verifyPrerenderedHtml(html) {
  if (html.includes(appMarker)) {
    throw new Error('Prerender failed: dist/index.html still contains an empty application root.')
  }

  for (const expected of requiredContent) {
    if (!html.includes(expected)) {
      throw new Error(`Prerender failed: dist/index.html is missing ${JSON.stringify(expected)}.`)
    }
  }
}

async function prerender() {
  const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
  const outputPath = resolve(projectRoot, 'dist/index.html')
  const serverEntryPath = resolve(projectRoot, '.prerender/entry-server.js')
  const template = await readFile(outputPath, 'utf8')
  const serverEntry = await import(pathToFileURL(serverEntryPath).href)
  const appHtml = await serverEntry.render()
  const html = injectPrerenderedHtml(template, appHtml)

  verifyPrerenderedHtml(html)
  await writeFile(outputPath, html)
  await rm(resolve(projectRoot, '.prerender'), { recursive: true, force: true })
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])

if (isDirectRun) {
  await prerender()
}
