export type Product = {
  id: string
  stage: string
  name: string
  description: string
  href: string
  action: string
  mark: string
  tone: 'neutral' | 'info' | 'success' | 'warning'
}

export type Foundation = {
  name: string
  description: string
  href: string
  label: string
}

export const installCommand = 'npm install -g @vraxis/cli'
export const runCommand = 'vraxis'

export const products: Product[] = [
  {
    id: 'read',
    stage: 'Read',
    name: 'Vraxis Read',
    description: 'Read PDFs, EPUBs, Markdown, and web articles with an agent that stays grounded in the source.',
    href: 'https://read.vraxis.dev',
    action: 'Explore Vraxis Read',
    mark: 'R',
    tone: 'info',
  },
  {
    id: 'understand',
    stage: 'Understand',
    name: 'Aperta',
    description: 'Build evidence that you understand a codebase before you change it.',
    href: 'https://aperta.vraxis.dev',
    action: 'Explore Aperta',
    mark: 'A',
    tone: 'success',
  },
  {
    id: 'write',
    stage: 'Write',
    name: 'ArchNode',
    description: 'Turn engineering thought into connected RFCs, decisions, diagrams, and durable technical writing.',
    href: 'https://archnode.io',
    action: 'Explore ArchNode',
    mark: 'N',
    tone: 'neutral',
  },
  {
    id: 'distribute',
    stage: 'Distribute',
    name: 'Distribution-OS',
    description: 'Turn product evidence into reviewed distribution plans, drafts, and measurable work.',
    href: 'https://distribution.vraxis.dev',
    action: 'Explore Distribution-OS',
    mark: 'D',
    tone: 'warning',
  },
]

export const foundations: Foundation[] = [
  {
    name: 'Vraxis CLI',
    label: 'Command center',
    description: 'Install, update, find, and open every reviewed Vraxis tool from one terminal interface.',
    href: 'https://www.npmjs.com/package/@vraxis/cli',
  },
  {
    name: 'agent-v',
    label: 'Agent runtime',
    description: 'Run agents through one provider-neutral API with tools, approvals, sessions, and provenance.',
    href: 'https://github.com/Vequan23/agent-v',
  },
  {
    name: 'OS X Components',
    label: 'Interface system',
    description: 'Give every product the same approachable interaction language without copying product logic.',
    href: 'https://osx-components.vercel.app/',
  },
  {
    name: 'Vraxis Desktop',
    label: 'Desktop packaging',
    description: 'Package trusted web applications for macOS, Windows, and Linux with secure defaults.',
    href: 'https://www.npmjs.com/package/@vraxis/desktop',
  },
]

export const principles = [
  {
    title: 'Local first',
    description: 'Your libraries, repositories, notes, and product evidence stay on your machine.',
  },
  {
    title: 'Provider neutral',
    description: 'Choose the model provider or local runtime that fits the job.',
  },
  {
    title: 'Inspectable work',
    description: 'See the sources, tools, approvals, and runtime behind important output.',
  },
  {
    title: 'Human approval',
    description: 'External actions wait for review. Agents do not publish behind your back.',
  },
]
