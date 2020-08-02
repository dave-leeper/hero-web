modules.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'producton' && require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.js',
                './public/index.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
    ]
}