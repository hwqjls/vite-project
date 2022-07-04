import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import visualizer from 'rollup-plugin-visualizer' //包依赖分析
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'

// element plus相关包
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// elementPlus提供的开箱即用的tree shaking功能
import ElementPlus from 'unplugin-element-plus/vite'

// 数据mock配置
import {UserConfigExport, ConfigEnv} from 'vite'
import {viteMockServe} from 'vite-plugin-mock'

import path from 'path'

// https://vitejs.dev/config/
export default ({command}: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
            vueJsx(),
            visualizer({
                filename: './node_modules/.cache/visualizer/stats.html',
                open: true,
                gzipSize: true,
                brotliSize: true,
            }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            }),
            legacy({
                targets: ['defaults', 'not IE 11'],
            }),
            AutoImport({
                // 自动导入vue相关的Api
                imports: ['vue', 'vue-router', 'pinia'],
                // 声明文件的存放位置
                dts: './src/types/auto-imports.d.ts',
                eslintrc: {
                    enabled: false,
                },
            }),
            Components({
                resolvers: [ElementPlusResolver()],
                dts: './src/types/components.d.ts',
            }),
            ElementPlus({
                useSource: true,
            }),
            viteMockServe({
                // ↓解析根目录下的mock文件夹
                mockPath: 'mock',
                localEnabled: command === 'serve',
                supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
                watchFiles: true, // 监视文件更改 更改mock的时候，不需要重新启动编译
            }),
        ],
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/styles/variables.scss";',
                },
            },
            postcss: {
                plugins: [postcssImport, autoprefixer],
            },
        },
        server: {
            host: '127.0.0.1',
            port: 3000,
            open: true,
            https: false,
            proxy: {
                // "/api": {
                //   target: "http://120.76.52.66",
                //   changeOrigin: true,
                //   rewrite: path => path.replace(/^\/api/, ""),
                // },
            },
        },
    }
}
