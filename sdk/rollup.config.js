import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [
  {
    input: './src/index.ts',
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      typescript()
    ],
    output: [
      {
        format: 'es',
        file: pkg.main
      }
    ]
  }
]
