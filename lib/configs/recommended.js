module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                "no-global-html-attribute-prop-names": "error"
            },
        },
    ],
}
