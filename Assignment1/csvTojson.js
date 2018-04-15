

// const fs = require('fs')
// const path = require('path')
// const event = require('events')

// class myEmitter extends event{}
// const e =  new myEmitter()

// let buff=[]
// // const fetchfile = ((call) => {
// //     let buff = ''
//     // call.
//     e.on('event', (callback) => {
//         buff += fs.readFileSync('customer-data.csv', { encoding: "utf8" }, (error) => {
//             if (error)
//                 return 'Got fucked ' + process.exit(1)
//             console.log('Getting data from the file successfulled')
//             callback(error)
//         })
//         console.log(buff)
//     })
    
//     e.emit('event', () => {
//         let json_object = ''
//         json_object += JSON.stringify(buff, null, 2)
//         // console.log(json_object)

//         // let parsed_object = ''
//         // parsed_object += JSON.parse(json_object)
//         // json_object+= JSON.parse('buff')
//         fs.writeFileSync('customer-data.json', json_object,(error)=>{
//             if(error1)
//                 return 'Get loss '+ process.exit(1)
//                 console.log('done')
//                 process.exit(0)
//         })
//     })

// })

// fetchfile()

const fs = require('fs')
const csv = require('csvtojson')
const csvFilePath = 'customer-data.csv'

let arr=[]
csv().fromFile(csvFilePath).on('json',(jsonObj)=>{

    arr.push(jsonObj)
}).on('done',(error)=>{
    if(error)
        return 'Got fucked' +process.exit(1)
    console.log(arr)
    fs.writeFile('customer-data.json',JSON.stringify(arr,null,2),(error1)=>{
        if(error1)
            return 'Get loss '+ process.exit(1)
            console.log('done')
            process.exit(0)
    })
})

