# Vraxis

The website for the Vraxis local-first agent ecosystem.

```bash
npm install -g @vraxis/cli
vraxis
```

The site explains how Vraxis Read, Aperta, ArchNode, and Distribution-OS fit together. It also documents the packages that keep the products consistent: agent-v, osx Components, and Vraxis Desktop.

## Run the site

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Verify a change

```bash
npm run check
```

This runs unit and integration tests, checks TypeScript, creates a production build, and audits the public copy.

## Project structure

```text
src/content/        Public product and principle data
src/components/     Focused homepage sections
src/styles/         Brand tokens and site layout
public/brand/       Production logo assets
copy/               Copy checked by the Vraxis writing rules
docs/               Brand and deployment decisions
```
