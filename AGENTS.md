# Vraxis site contributor guide

## Purpose

This repository owns the public Vraxis identity, ecosystem positioning, and `vraxis.dev` marketing site. It does not own product workflows or hosted versions of local applications.

## Product rules

- Lead with the Vraxis CLI install path.
- Keep product claims grounded in behavior that ships today.
- Use `@vraxis/osx-components` for published interface primitives.
- Use Panther as the default theme.
- Use the Vraxis ecosystem skill for cross-product positioning.
- Use the devtool-copy skill for all public copy.
- Do not use em dashes in generated customer-facing language.
- Do not imply Apple affiliation.

## Required checks

Run `npm run check` and the OS X Components UI audit. Verify the page in a desktop browser and at 390px before shipping.
