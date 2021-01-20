'use strict';
var element = document.getElementById('name')
var btn = document.getElementById('btn')
var win = document.getElementById('modal')
var result
var veh = new Array()
var vehicleInfo

axios.get("https://swapi.dev/api/people/").then((response) => {
        result = response.data.results
    }
).catch((e) => {
        console.log('error')
    })

function makeAll() {
    var count = 0
    var main = document.getElementById('main')
    for (var i of result) {
        var container = document.createElement("a")
        container.setAttribute('onclick', 'showInfo(this) & openClose()')
        container.className = 'container'
        container.id = count
        count += 1
        veh.push(i['vehicles'])
        for (let key of Object.keys(i)) {
            var childContainer = document.createElement("div")
            childContainer.className = 'childContainer'
            var value = i[key]
            childContainer.innerText =  key + " : " + value
            container.append(childContainer)
        }
        main.append(container)
        btn.classList.add('close')
    }
}

function showInfo(obj) {
    win.innerText = ''
    if (veh[obj.id] == '') {
        win.innerHTML = '<p class="vehicle">Nothing</p>'
        return
    }
    for (var i of veh[obj.id]) {
        axios.get(i).then((response) => {
            vehicleInfo = response.data
            console.log(vehicleInfo)
            win.innerHTML += `<div class='vehicle'>
            <p>Name: ${vehicleInfo['name']}</p>
            <p>Model: ${vehicleInfo['model']}</p>
            <p>Crew: ${vehicleInfo['crew']}</p>
            <p>Max speed: ${vehicleInfo['max_atmosphering_speed']}</p>
            </div>`
            vehicleInfo = ''
        })
    }
}

function openClose (){
    if (!(win.classList.contains('opn'))) {
        win.classList.add('opn')
    } else {
        win.classList.remove('opn')
        win.innerHTML = ''
        vehicleInfo = ''        
    }
    // if (win.innerHTML == '') {
    // }
}