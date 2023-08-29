# AEON IBS Portal Frontend

AEON IBS Portal Frontend Project.

## Development environment construction

The applications that need to be built are:

- nodejs ver.14 or above
- yarn
- (For windows environment, we recommend a terminal such as git-bash)

### install nodejs

[nodejs](https://nodejs.org) Run the installer to download from and install.

### yarn Installation

Execute the following command

```bash
$ sudo npm install -g yarn
```

## Initialization of development environment

cli Navigate to the Tools project folder and run the following command:

```bash
yarn
```

## Initialization of submodules

To fetch submodules of API spec, run command below.

```bash
git submodule update --init
```

## Build

### Development build

```bash
yarn start
```

→ The browser starts up, the code being edited is compiled each time, and you can check it in real time.

### Storybook

```bash
yarn storybook
```

→ Your browser will launch and you will see a Storybook where you can see all the components used on this site.

### Production build

```bash
yarn build
```

### For users

Open Storybook and see `DOCS` section.

### For contributors

See `/docs/contribute`.
