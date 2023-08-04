# @ygkn/textlint-rule-preset-ygkn

[@ygkn](https://github.com/ygkn)'s textlint preset rule.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @ygkn/textlint-rule-preset-ygkn

## Rules

This preset based on some presets and rules as follows.

See [src/rules.ts](src/rules.ts) for more details.

### Presets

- [textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)
- [textlint-rule-preset-ja-spacing](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing)

### Rules

- [@proofdict/textlint-rule-proofdict](https://github.com/proofdict/proofdict/blob/master/packages/%40proofdict/textlint-rule-proofdict)

## Usage

### rc file (Recommended)

#### JavaScript (with type checking)

```js
/** @type {import("@textlint/config-loader").TextlintRcConfig}*/
module.exports = {
  rules: {
    "@ygkn/preset-ygkn": true,
  },
};
```

#### JSON

```json
{
  "rules": {
    "@ygkn/preset-ygkn": true
  }
}
```

### Via CLI

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
