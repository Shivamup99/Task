import React from 'react'

function Adduser({profile,onChange,hadleSubmit,onImage}) {
    return (
        <div>
        
        <form onSubmit={(e)=>hadleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" value={profile.firstName}
            onChange={(e)=>onChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={profile.lastName} 
             onChange={(e)=>onChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="profession" className="form-label">Profession</label>
            <input type="text" className="form-control" name="profession" value={profile.profession}
            onChange={(e)=>onChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" name="address" value={profile.address} 
            onChange={(e)=>onChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Phone</label>
            <input type="text" className="form-control" name="mobile" value={profile.mobile}
            onChange={(e)=>onChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email"  value={profile.email}
            onChange={(e)=>onChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Profile Picture</label>
            <input type="file" className="form-control" name="image" 
            onChange={(e)=>onImage(e)} />
          </div>
        </form>
      </div>
    )
}

export default Adduser
