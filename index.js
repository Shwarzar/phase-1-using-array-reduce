const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0
function reducer() {
    for (let i = 0; i < batteryBatches.length; i++) {
        let battary = batteryBatches[i]
        totalBatteries += battary
    }

return totalBatteries
}
console.log(reducer())

//     for (battary of batteryBatches) {

//         totalBatteries += batteryBatches[battary]
//     }
// return totalBatteries - 2
// }

// debugger;