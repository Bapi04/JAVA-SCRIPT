//Maps

const map = new Map()
map.set('IN','India')
map.set('FR','France')
map.set('UK','United Kingdom')

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}


const myObj = {
    'game1': 'NFS',
    'game2': 'BGMI',
    'game3': 'Undawn'

}

//Not itratable in that type