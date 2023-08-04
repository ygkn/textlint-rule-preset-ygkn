import type { TextlintConfigRulePreset } from "@textlint/config-loader";
import { moduleInterop } from "@textlint/module-interop";
import { presets, originalRules } from "./rules";

const ruleIdToPackageName = (ruleId: string) =>
  ruleId.startsWith("@")
    ? `${ruleId.replace(/\/.+$/, "")}/textlint-rule-${ruleId.replace(
        /^[^/]+\//,
        "",
      )}`
    : `textlint-rule-${ruleId}`;

const loadRule = (ruleId: string) =>
  moduleInterop(require(ruleIdToPackageName(ruleId)));

const loadedPresets = presets.map((presetId) =>
  loadRule(presetId),
) as TextlintConfigRulePreset["preset"][];

const loadedRules = Object.fromEntries(
  Object.keys(originalRules).map((ruleId) => [ruleId, loadRule(ruleId)]),
);

const config = {
  rules: {
    ...Object.fromEntries(
      loadedPresets.flatMap((preset) => Object.entries(preset.rules)),
    ),
    ...loadedRules,
  },
  rulesConfig: {
    ...Object.fromEntries(
      loadedPresets.flatMap((preset) => Object.entries(preset.rulesConfig)),
    ),
    ...originalRules,
  },
} satisfies TextlintConfigRulePreset["preset"];

export default config;
