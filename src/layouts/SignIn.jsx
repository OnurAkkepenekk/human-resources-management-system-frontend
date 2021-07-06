import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function SignIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/61885344?v=4"></Image>
                <Dropdown pointing="top-right" text="Onur Akkepenek">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Informations" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Logout" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
