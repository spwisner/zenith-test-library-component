# Zenith Test Library Component

Bootstrapped using nearform blog post
[Sharing Components Blog](http://nearform.com/blog/sharing-react-components-with-lerna)

## Overview

Uses Lerna to be able to create multiple pages for a single project.  Benefits of Lerna include version control and independence between packages.

This test library was bootstrapped from the NearForm repo and incorporates storybook for displaying packaged components.

This repo currently includes global devDependencies (e.g. Jest and Enzyme) and local dependencies (e.g. React) which can vary in terms of package and/or version within a created component package.

## Installing Dependencies

To install global dependencies enter `npm install`.  To install local dependencies for each package, you can enter a single command `lerna bootstrap`, which will install all dependencies for every package.

To view storybook locally (localhost:9001), enter `npm start`.

To publish to npm, you first must create an npm account.  After configuring the account, you publish to npm by entering `npm publish`

- Note that when publishing, the terminal will walk you through updating version numbers for version control (because this project uses lerna's independent flag, each package requires a response for version control)

## Testing
This repo uses Jest and Enzyme for testing.  To test, run `npm test`.  Note that tests were not created for the zenith test input and currently fail.