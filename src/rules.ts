import type { TextlintRcConfig } from "@textlint/config-loader";

/**
 * 継承するプリセットのリスト
 */
export const presets = ["preset-ja-technical-writing", "preset-ja-spacing"];

/**
 * このプリセットで独自に設定するルール
 */
export const originalRules = {
  "@proofdict/proofdict": {
    dictURL: "https://azu.github.io/proof-dictionary/",
  },
} satisfies TextlintRcConfig["rules"];
