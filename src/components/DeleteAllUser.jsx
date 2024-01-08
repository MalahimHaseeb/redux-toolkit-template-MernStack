import React from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux'
// import { clearAllUsers } from '../store/Slices/UserSlice';
import { clearAllUsers } from "../store/actions/actions";

export const DeleteAllUser = () => {
  const dispatch  = useDispatch()

  const deleteUsers = () =>{
   dispatch(clearAllUsers())
  }
  return<Wrapper> 
    <div>
      <button className="btn clear-btn" onClick={() => deleteUsers()}>DeleteAllUser</button>
    </div>;
    </Wrapper>
};

const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a:
  margin-top :3rem;
}
`