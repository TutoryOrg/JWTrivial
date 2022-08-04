module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    tests: ['./tests/'],
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@utils': './src/utils',
                    '@types': './types.d.ts',
                },
            },
        ],
        '@babel/plugin-proposal-export-namespace-from',
    ],
};
