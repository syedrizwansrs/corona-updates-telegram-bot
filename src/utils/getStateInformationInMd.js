// module.exports = (data) => {
//     let output = '```| '

//     for(let i = 0; i < data[0].length; i++) {
//         output += data[0][i] + ' | '
//     }

//     output += '\n'

//     for(let i = 0; i < data[0].length; i++) {
//         output += '--- | '
//     }

//     output += '\n'

//     for(let i = 1; i < data.length - 1; i++) {
//         for(let j = 0; j < data[i].length; j++) {
//             output += data[i][j] + ' | '
//         }
//         output += '\n'
//     }

//     output += '```'

//     console.log(output)

//     return output
// }

module.exports = (data) => {
    let output = ''
    const title = ['State', 'Confirmed (Indian National)', 'Confirmed (Foreign National)', 'Cured', 'Death']

    for(let i = 0; i < data.length - 1; i++) {
        for(let j = 0; j < data[i].length; j++) {
            output += `**${title[j]}:** __${data[i][j]}__ \n\n`
        }
        
        output += '---------------------------------------------\n\n'
    }

    output += 'Total All Over India \n\n'

    for(let i = 1; i < data[data.length - 1].length; i++) {
        output += `**${title[i]}:** __${data[data.length - 1][i]}__ \n\n`
    }

    return output
}