# @ygkn/textlint-rule-preset-ygkn

[@ygkn](https://github.com/ygkn)'s textlint preset rule.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @ygkn/textlint-rule-preset-ygkn

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
  "rules": {
    "@ygkn/preset-ygkn": true
  }
}
```

Via CLI

```
textlint --rule @ygkn/preset-ygkn README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © ygkn
