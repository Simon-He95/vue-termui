import { Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'

export function VueTermui(): Plugin {
  return {
    name: 'vue-termui',

    config() {
      return {
        build: {
          rollupOptions: {
            input: './index.ts',
            external: [
              'events',
              'assert',
              'node:events',
              'node:assert',
              '@vue/runtime-core',
              'ansi-escapes',
              'chalk',
              'picocolors',
              'cli-boxes',
              'cli-cursor',
              'cli-truncate',
              'indent-string',
              'slice-ansi',
              'string-width',
              'type-fest',
              'widest-line',
              'wrap-ansi',
              'yoga-layout',
              'yoga-layout-prebuilt',
            ],

            output: {
              // file: 'dist/[name].haha.mjs',
              // dir: undefined,
              // output one file only
              manualChunks: undefined,
              // manualChunks: () => null,
              // inlineDynamicImports: true,
              entryFileNames: '[name].mjs',
            },
          },
        },

        plugins: [
          Vue({
            template: {
              compilerOptions: {
                whitespace: 'condense',
                comments: false,
                // term ui has no native tags
                // isNativeTag: (tag) => tag.startsWith('tui-'),
                isNativeTag: () => false,
                // getTextMode: node => ???,
                isCustomElement: (tag) => tag.startsWith('tui-'),
              },
            },
          }),
        ],
      }
    },
  }
}