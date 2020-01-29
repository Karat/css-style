module.exports = {
  extends: [
    "stylelint-config-twbs-bootstrap/scss",
  ],
  rules: {
    "at-rule-blacklist": ["extend"],
    "scss/dollar-variable-default": null,
    "scss/at-function-named-arguments": null,
    // This lets us share values from css to js files, allowing for use of in js
    // styling while still keeping all of the actual styling in css
    "scss/at-rule-no-unknown": [true, {
      "ignoreAtRules": ['value']
    }],
    "string-quotes": "single",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-newline-after": "always-multi-line",
  },
}
