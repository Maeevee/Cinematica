module.exports = {
plugins: {
    tailwindcss: {},
    'postcss-modules': {
    getJSON: () => {},
    generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    autoprefixer: {},
},
};