let posts = []
let ltime = new Date()
console.log('before creating', 'posts :', posts, 'last time :', ltime)
const updateLastUserActivityTime = async () => {
    
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            ltime = new Date
            resolve(ltime)
        }, 1000)
    })
    
}
const createpost = async () => {

    await new Promise((resolve, reject) => {
        let post = [{ post1: 'post1' }, { post2: 'post2' }, { post3: 'post3' }]
        for (let i = 0; i < post.length; i++) {
            posts.push(post[i])
        }
        resolve(posts)
    })
}
createpost()
updateLastUserActivityTime()

console.log('after creating', 'posts :', posts, 'last time :', ltime)

