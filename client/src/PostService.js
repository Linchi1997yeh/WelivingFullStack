import axios from 'axios'

// const url = 'http://localhost:5000/member/login/';
const newurl = 'http://localhost:3000/member/'
const dataurl = 'http://localhost:3000/data/'
class PostService{
    // Get all events
    static getEvents(){
        return new Promise(async(resolve, reject)=>{
            try {
                const res = await axios.get(dataurl+'events');
                const data = res.data;
                resolve(
                    data.map(event=>({
                        type:event.type,
                        place:event.place,
                        date:event.date,
                        photo:event.photo,
                        houseToShow:event.houseToShow,
                        title:event.title,
                        description:event.description,
                        phoneNumber:event.phoneNumber
                    }))
                );
            } catch(err){
                reject(err);
            }
        })
    }
    //Get Posts
    static getPosts(){
        return new Promise(async(resolve, reject)=>{
            try {
                const res = await axios.get(newurl+'all');
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        date: new Date(post.date)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }
    static check(){
        const res = axios.get(newurl+'check');//{withCredentials: true}
        const data = res.data;
        alert(data);
    }
    //Create Post
    static insertPost(text) {
        return axios.post(newurl, {
            text
        });
    }
    static memberRegister(username,email,password){
        return axios.post(newurl+'register',{
            username,
            email,
            password
        })
    }
    static memberLogin(email,password){
        return axios.post(newurl+'login',{
            email,
            password
        })
    }
    //Delete Post
    static deletePost(id) {
        return axios.delete(`${newurl}${id}`);
    }
}
export default PostService