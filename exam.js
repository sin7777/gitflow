//1 2 3 4 5 6 7 8 9
//a b c

function insert(arr1,arr2){
    let result = []
    while(true){
        console.log(result)
        let a = arr1.splice(0,4)
        if(a.length < 4){
            result = result.concat(a)
            result = result.concat(arr2)
            break
        }else{
            let b = arr2.shift()
            if(!!b){
                result = result.concat(a)
                result.push(b)
            }else{
                result.concat(arr1)
                break;
            }
        }
    }
    return result.join(" ")
}
let a = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let b = ["a", "b", "c"]
insert(a,b)

