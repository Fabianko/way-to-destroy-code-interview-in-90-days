data = [];
const getData = () => {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('No data'))
        }
        setTimeout(
            () => {
                resolve(data)
            }, 1500
        )
    })
}

getData().then((d)=>console.log(d))
        .catch(err => console.error(err.message));

async function hola() {
    try {
        const d = await getData();
        console.log(d)
    } catch (err) { console.error(err.message)}
}

hola()
