/**
* install command: npm install --save-dev
"babel-eslint": "^10.1.0",
"eslint": "^6.7.2",
"eslint-plugin-import": "^2.20.2",
"eslint-plugin-node": "^11.1.0",
"eslint-plugin-promise": "^4.2.1",
"eslint-plugin-standard": "^4.0.0",
"eslint-plugin-vue": "^7.0.0-0",
* filename: .eslintrc.js
* npm command: "lint:eslint": "vue-cli-service lint",
*/
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 关闭函数空格检查 prettiy已设置
        'space-before-function-paren': 0,
        // 语句强制分号结尾
        semi: [2, 'always'],
        // 关闭空格检查
        indent: ['off'],
        // 在块级作用域外访问块内定义的变量是否报错提示
        'block-scoped-var': 0,
        // if while function 后面的{必须与if在同一行
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // 双峰驼命名格式
        camelcase: 2,
        // 使用 === 替代 ==
        eqeqeq: [2, 'allow-null'],
        // switch语句强制default分支
        'default-case': 2,
        // 禁止使用数组构造器, 用数组字面量[]
        'no-array-constructor': 2,
        // 禁止使用arguments.caller或arguments.callee
        'no-caller': 1,
        // 禁止在条件表达式中使用赋值语句
        'no-cond-assign': 2,
        // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-constant-condition': 2,
        // 在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-keys': 2,
        // 函数参数不能重复
        'no-dupe-args': 2,
        // switch中的case标签不能重复
        'no-duplicate-case': 2,
        // 如果if语句里面有return,后面不能跟else语句
        'no-else-return': 2,
        // 块语句中的内容不能为空
        'no-empty': 2,
        // 禁止对null使用==或!=运算符
        'no-eq-null': 2,
        // 禁止使用eval
        'no-eval': 1,
        // 禁止使用嵌套的三目运算
        'no-nested-ternary': 0,
        // 禁止在使用new构造一个实例后不赋值
        'no-new': 1,
        // 禁止使用new Function
        'no-new-func': 1,
        // 禁止使用new Object()
        'no-new-object': 2,
        // 禁止使用new创建包装实例，new String new Boolean new Number
        'no-new-wrappers': 2,
        // 禁用var，用let和const代替
        'no-var': 'error',
        // 箭头函数用小括号括起来
        'arrow-parens': 0,
        // 对象字面量项尾不能有逗号
        'comma-dangle': [2, 'never'],
        // 引号类型 `` "" ''
        quotes: [1, 'single'],
        // 首选const
        'prefer-const': 0
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
};
