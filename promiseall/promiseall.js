let posts = []
let ltime = new Date()
console.log('before creating', 'posts :', posts, 'last time :', ltime)
const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        ltime = new Date
        resolve(ltime)
    }, 1000)
})

const createpost = new Promise((resolve, reject) => {
    let post = [{ post1: 'post1' }, { post2: 'post2' }, { post3: 'post3' }]
    for (let i = 0; i < post.length; i++) {
        posts.push(post[i])
    }
    resolve(posts)
})


Promise.all([updateLastUserActivityTime, createpost]).then((value) => {
    console.log('after creating posts :', value[0],value[1])
})

Promise.all([updateLastUserActivityTime, createpost]).then((value) => {
    setTimeout(() => {

        posts.pop()
        console.log('after deleting last post :', value[0],value[1])
    }, 1000)
})

