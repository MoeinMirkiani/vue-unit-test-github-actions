import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],

    {
        "rules": {
            "indent": ["error", 4],
            "vue/attribute-hyphenation": "error",
        }
    }
]
