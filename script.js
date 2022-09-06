
function addtion(){
    myTable.innerHTML = ""
    for (let i = 1; i <= gif.value; i++) {
        solution = "<tr>"
        for (let j = 1; j <= giff.value; j++) {
            solution += `
            <td> ${j}+${i}=${j+i} </td>
            `
        }
       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontSize = "15px"
       myTable.style.fontWeight = "500"
    }
}

function subtration(){
    myTable.innerHTML = ""
    for (let i = 1; i <= gif.value; i++) {
        solution = "<tr>"
        for (let j = 1; j <= giff.value; j++) {
            solution += `
            <td> ${j}-${i}=${j-i} </td>
            `
        }
       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontSize = "15px"
       myTable.style.fontWeight = "500"
    }
}

function multply(){
    myTable.innerHTML = ""
    for (let i = 1; i <= gif.value; i++) {
        solution = "<tr>"
        for (let j = 1; j <= giff.value; j++) {
            solution += `
            <td> ${j}*${i}=${j*i} </td>
            `
        }
       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontSize = "15px"
       myTable.style.fontWeight = "500"
    }
}

function divsion(){
    myTable.innerHTML = ""
    for (let i = 1; i <= gif.value; i++) {
        solution = "<tr>"
        for (let j = 1; j <= giff.value; j++) {
            solution += `
            <td> ${j}/${i}=${parseFloat(j/i).toFixed(2)} </td>
            `
        }
       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontSize = "15px"
       myTable.style.fontWeight = "500"
    }
}