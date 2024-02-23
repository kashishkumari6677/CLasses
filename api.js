// try {
//     let c = 8
//     let b = 9
//     console.log(a + b)
// } catch (error) {
//     console.log(error.message)
// }


// let data = () => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(responive => console.log(responive.json())).then(getData => console.log(getData)).catch(err => console.log(err))
// }
let users=document.getElementById('userInfo')
let data=async()=>{
    try {
        let reponse=await fetch('https://poetrydb.org/title/Ozymandias/lines.json')
    let res=await reponse.json()
    res[0].lines.map((v)=>{
        let h1=document.createElement('h1')
        h1.innerHTML=v
        users.append(h1)
    })
    // res.map((k)=>{
    //     let cardDiv=document.createElement('div')
    //     let Name=document.createElement('h1')
    //     users.append(cardDiv)
    //     cardDiv.append(Name)
    //     Name.innerHTML=k.name
    // })
    console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}