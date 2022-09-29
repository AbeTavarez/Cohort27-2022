const fs = require('fs')

console.log(typeof fs)

const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

fs.writeFile('./hello.txt', data, () => {
    console.log('Done writing file....');
})

fs.appendFile('./hello.txt', 'Hello Cohort27!', () => {
    console.log('done')
})