# how to implement API calls and page logics

## 1. make page's file in src/pages

### materials

- screen list that shows relations between page id & path of the page https://docs.google.com/spreadsheets/d/1h3uib-NZlJNM70T4MFkrnYBmLQJ9kLs9G7ALJk_2x4E/edit#gid=0

### steps & notes

- make file of the page
  - TODO: want to make hygen template
- import it in `src/pages/routes.tsx`.
- every child route in this app should be lazy loaded
- If the route has multiple child pages, it is better to bundle it in a child route. See https://github.com/fourdigit/aeonms-frontend/blob/develop/src/pages/app/routes.tsx & child routes as example
- every page expect `SignIn` should be under `AuthedRoute`

## 2. implement appearance of pages using components

### materials

- visual design's XD
- storybook in our repo

### steps and notes

- example by Yanaka: src/pages/template/index.tsx
- open storybook `$ yarn storybook` to check appearnce and behavior
- import components
  - tips: when you import components, it is recommened to use auto-import that suggests VSCode
- when you find you need to make new component or modify existing component, please let 4DJP Yanaka know. He will manage component making process

## 3. implement logics

- spec of screens: see AEON-IBS_Portal_DEV.xdc that is shared via Adobe CC
- spec of APIs: see https://aeon-aibs-portal-openapi-spec.netlify.app/ (ID: 4D pwd: @30n1b1$)

### steps and notes

#### generate API client of react-query by orval

- API spec is managed in https://github.com/fourdigit/aeon-aibs-portal-openapi-spec
- it is linked as submodule
- before generating API client, update submodule (from command line or VSCode's source control). Then run `yarn gen:api`

#### use generated API client

- living example is `src/pages/signin/index.tsx`
- API mock is also generated and automatically imported by the code below

```ts
// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  // https://github.com/mswjs/examples/blob/master/examples/rest-react/src/index.js
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./api/mocks/browser');
  worker.start();
}
```

#### form state management

- use `react-hook-form`
- no living example exists in this project.
  - @opuna-m-yanaka might be better to add a issue to make a example

#### global state management

- not implemented
- if it become really needed, we'll install `redux-toolkit`
- `react-query`'s API caching is enough for now
