import './SelectUser.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export default function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const changeUser = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <select className='select' name='user' id='user' value={userId} onChange={changeUser}>
      <option value='1'>User_1</option>
      <option value='2'>User_2</option>
    </select>
  );
}
