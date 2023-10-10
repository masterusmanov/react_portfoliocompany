import Dropdown from 'react-bootstrap/Dropdown';
import MenuIcon from '@mui/icons-material/Menu';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" size='md'>
        <MenuIcon className=""/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Bosh sahifa</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Portfolio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cosinus academy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;