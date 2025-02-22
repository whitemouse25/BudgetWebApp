// eslint.config.js
import js from "@eslint/js";

export default [
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        },
        files: ["*.js"]
      }
];