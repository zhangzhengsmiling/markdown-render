module.exports = {
  parser:  '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],//定义文件继承的子规范
  plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
  env:{                          //指定代码的运行环境
      browser: true,
      node: true,
  },
  rules: {
    semi: 0,
    strict: 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'arrow-body-style': 0,
    'no-return-assign': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': 0,
    eqeqeq: 0,
    'no-console': 0,
    'no-param-reassign': 0,
    camelcase: 'off',
    'space-before-function-paren': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/camelcase': 0,
    // 'react/display-name': [0],
    // 'react/sort-comp': 0,
    // 'react/jsx-uses-react': 1,
    // 'react/prefer-stateless-function': 0,
    // 'react/jsx-closing-bracket-location': 0,
    // 'react/prop-types': [
    //   0,
    //   {
    //     ignore: ['children'],
    //   },
    // ],
    // 'react/jsx-no-target-blank': 2,
    // 'react/jsx-filename-extension': [
    //   1,
    //   {
    //     extensions: ['.tsx', '.js', '.jsx'],
    //   },
    // ],
    // 'react/react-in-jsx-scope': 0,
  },                       
}
