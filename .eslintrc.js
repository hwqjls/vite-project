module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
        './.eslintrc-auto-import.json',
        /* 找node_modules下eslint-plugin-vue对应的vue3对应的规范 => vue3-strongly-recommended */
        'vue3-strongly-recommended',
        'standard',
        'vue-global-api',
        'prettier',
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
