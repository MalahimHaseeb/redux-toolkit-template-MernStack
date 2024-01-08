import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaDeleteLeft } from "react-icons/fa6";
import { removeUser } from '../store/Slices/UserSlice';


const DisplayUsers = () => {


    const dispatch  = useDispatch()

    const data = useSelector((name) => {
        return name.users;
    })
    // console.log(data)

    const deleteUser = (id) => {
      dispatch(removeUser(id))
    }
    return (
        <>
            {
                data.map((user, id) => {
                    return (
                      <li key={id} style={{ borderBottom: '1px solid #ccc', padding: '8px 0', listStyle: 'none' }}>
                        {user}
                        <span style={{ display: 'flex', alignItems: 'center' }} onClick={() => deleteUser(id)}>
                          <FaDeleteLeft className='font-normal' style={{ fontSize: 'small', marginRight: '2px', cursor: 'pointer', color: 'red' }} />
                          {/* Other content or text in the button */}
                        </span>
                      </li>
                    );
                  })
                  
            }
        </>
    )
}

export default DisplayUsers