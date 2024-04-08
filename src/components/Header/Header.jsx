import SelectUser from '../SelectUser/SelectUser';
import './Header.css';

export default function Header() {
  return (
    <>
      <img className='logo' src='/logo.svg' alt='Логотип' />
      <SelectUser />
    </>
  );
}
