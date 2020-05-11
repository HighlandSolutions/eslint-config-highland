module.exports = {
  extends: 'airbnb-base',


  rules: {
    // Core ESLint
    'arrow-parens': ['error', 'always'],

    'comma-dangle': ['error', 'always-multiline'],

    'key-spacing': ['error', {
      align: 'value',
    }],

    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
    }],

    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration:  true,
        Property:           true,
        VariableDeclarator: true
      },
      ignoreEOLComments: false,
    }],

    'no-multiple-empty-lines': ['error', {
      max:    4,
      maxBOF: 0,
    }],

    'no-param-reassign': 'warn',

    'no-plusplus': 0,

    'no-return-assign': 'warn',


    // import plugin
    "import/newline-after-import":       ["error", { "count": 4 }],
    'import/no-extraneous-dependencies': 'warn',
  },
};
