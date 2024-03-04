import React from 'react'

const UseStateDemo = () => {
    const [gender, setGender] = React.useState(null);
  return (
    <div>
        <label>Male</label>
      <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
      <label>Female</label>
      <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
      <h1>Selected gender {gender}</h1>
    </div>
  )
}

export default UseStateDemo

