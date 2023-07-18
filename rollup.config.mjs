// rollup.config.mjs
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'ts-estree-writer'
    },
    plugins: [typescript({
        exclude: [
            './**/*.spec.ts'
        ]
    })]
}
