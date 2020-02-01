module.exports = {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "plugins": [
      "react"
    ],
    "settings": {
        "react": {
          "version": "detect",
        },
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jquery": true,
      "jest": true
    },
    "globals": {},
    "rules": {
        "react/no-render-return-value": "off"
    }
};
