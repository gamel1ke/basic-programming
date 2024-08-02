function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('lสวัดดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัดดีวันจันทร์')
    }
}


function SizFat(racist: string) {
    switch (racist) {
        case 'S':
            console.log('ผอม')
            break
        case 'M':
            console.log('ผอม')
            break
        case 'L':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('ไอ้ตังอ้วน')
            break
        case '2xl':
            console.log('ไอ้ตังอ้วน')
            break
    }
}
SizFat('2xl')

function setnunber(n: number){
    const x = n.toLocaleString()
    return x
}

console.log(setnunber(1000000))

const str: string = 'EKKAPOB'

console.log(str.toLowerCase())

function checkStringLength(name: string) {
    console.log(name.length)
}
checkStringLength('ekkapob')

function idum(name: string, index: number) {
    return name.charAt(index)
}
console.log(idum('ตีลังหา', 2))

const str:string = 'กลับบ้าน'

console.log(str.includes('กลับ'))

function dum(str: string, search:string){
    if (str.includes(search)){
        console.log(str.indexOf(search))
    }else{
        console.log('ไม่เจอนิ')
    }
}
dum('จะกลับบ้าน', 'm')