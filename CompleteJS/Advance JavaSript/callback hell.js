// callback hell

setTimeout(()=>{
    console.log('works is done');
    setTimeout(()=>{
        console.log('works is done');
        setTimeout(()=>{
            console.log('works is done');
            setTimeout(()=>{
                console.log('works is done');
                setTimeout(()=>{
                    console.log('works is done');
                    setTimeout(()=>{
                        console.log('works is done');
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)