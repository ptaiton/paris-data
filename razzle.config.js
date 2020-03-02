module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: false,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true
        },
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          eslint: true,
          tslint: undefined,
          watch: './src',
          typeCheck: true
        }
      }
    }
  ]
}
