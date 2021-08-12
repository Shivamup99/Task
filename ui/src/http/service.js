import http from './http'

class user {
    getUser(){
        return http.get('user')
    }
    postUser(data){
        return http.post('user',data)
    }
}

export default new user()