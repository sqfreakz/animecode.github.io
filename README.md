# f-animecode

This project to develop frontend animecode.

### Prerequisites
- nodejs
- grunt cli
- bower

### Install Dependency

```
npm install & bower install
```

### Build & development

Run `grunt` for building and `grunt serve` for preview.


### Deploy to gh-pages

1. Remove the dist directory from the .gitignore file.
2. Add the dist directory to repository:

```
git add dist && git commit -m "Initial dist subtree commit"
```
3. Deploy the subtree to a different branch. Specify a relative path to your dist directory with --prefix:

```
git subtree push --prefix dist origin gh-pages
```
4. Develop normally, committing your entire repository to default (master) branch.
5. To deploy the dist directory, run the subtree push command from the root directory:
```
git subtree push --prefix dist origin gh-pages
```
