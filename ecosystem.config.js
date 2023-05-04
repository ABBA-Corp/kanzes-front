module.exports = {
    apps: [
        {
            name: 'kanzes',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 3002', //running on port 3002
            cwd: '.',
            instances: 1,
        },
    ],
}
