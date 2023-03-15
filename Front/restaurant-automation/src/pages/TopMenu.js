import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import {
ChevronDownIcon,
} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Pages
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => { navigate("/home"); }}>Home</MenuItem>
                <MenuItem onClick={() => { navigate("/dbTest") }}>DB Test</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default App;