module.exports = {
  extends: [
    "stylelint-config-twbs-bootstrap/scss",
  ],
  rules: {
    "at-rule-blacklist": ["extend"],
    "scss/dollar-variable-default": null,
    "scss/at-function-named-arguments": null,
    "string-quotes": "single",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-newline-after": "always-multi-line",
  },
}
