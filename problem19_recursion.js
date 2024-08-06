/*
    Write a function called collectStrings which accepts an object and returns an array of all the values in the object that 
    have a typeof string
*/

function collectStrings (obj) {
    let result = [];

    for (let key in obj) {
        console.log(key);
        let value = obj[key];

        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            result  = result.concat(collectStrings(value));
        } else if (typeof value === 'string') {
            result.push(value);
        }   
    }

    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])