import React, { useEffect, useState } from 'react'
import user from '../http/service'
import Adduser from './Adduser'
function Dashboard() {
   const imgUrl = 'http://localhost:3001'
    const [users,setUsers] = useState([])
    const [profile,setProfile] =useState({firstName:'',lastName:'',email:'',mobile:'',address:'',profession:''})
    const [image,setImage] = useState('')

    useEffect(()=>{
        loadData()
    },[])
    const loadData = async()=>{
       try {
        let response = await user.getUser()
        console.log(response.data)
        setUsers(response.data)
       } catch (error) {
           alert(error)
       }
    }

    const onChange = (e)=>{
       setProfile({...profile,[e.target.name]:e.target.value})
    }

    const onImage = (e)=>{
        setImage(e.target.files[0])
    }

    const handleSubmit =async()=>{
        try {
            let formData = new FormData()
            formData.append("firstName",profile.firstName)
            formData.append("lastName",profile.lastName)
            formData.append("email",profile.email)
            formData.append("address",profile.address)
            formData.append("mobile",profile.mobile)
            formData.append("profession",profile.profession)
            formData.append("image",image)
            const response = await user.postUser(formData)
            console.log(response.data)
            
          } catch (error) {
           alert(error)
          }
    }
    return (
  <>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
  <button type="button" className="btn btn-info but" data-bs-toggle="modal" data-bs-target="#exampleModal">
   Add User
</button>
</nav>
  <div className="container">
    {users.map((data,i)=>(
    <div className="main-body" key={i}>
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
             <div className="card-body">
             <div className="d-flex flex-column align-items-center text-center">
               <img src={`${imgUrl}/${data.image}`} alt="" className="rounded-circle" width={150} height={140} />
               <div className="mt-3">
                 <h4>{data.firstName} {data.lastName}</h4>
                 <p className="text-secondary mb-1">{data.profession}</p>
                 <p className="text-muted font-size-sm">{data.address}</p>
               </div>
             </div>
           </div>    
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {data.firstName} {data.lastName}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {data.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {data.mobile}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {data.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    ))}
  
</div>

<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
      </div>
      <div className="modal-body">
        <Adduser onChange={onChange} handleSubmit={handleSubmit} onImage={onImage} profile={profile}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={(e)=>handleSubmit(e)} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>


 </>
    )
}

export default Dashboard
