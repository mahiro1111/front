import React from 'react';
import { SidebarData } from './sidebardata';
import { GoMoveToStart } from "react-icons/go";
import { GoListUnordered } from "react-icons/go";
import '../style.css';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSidebarOpen: false };
    }

    handleClickOpen() {
        this.setState({ isSidebarOpen: true });
    }

    handleClickClose() {
        this.setState({ isSidebarOpen: false });
    }

    render() {
        let sidebar;
        if (this.state.isSidebarOpen) {
            sidebar = (
                <div>
                    <div className='sidebar'>
                        <ul className='sidebarlist'>
                            {SidebarData.map((value, key) => {
                                return (
                                    <li
                                        key={key}
                                        className="row"
                                    >
                                        <Link to={value.link}>
                                            <div id="icon">{value.icon}</div>
                                            <div style={{ fontFamily: 'Hachi Maru Pop, cursive' }} id="icon">{value.title}</div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button className='sideclose'
                        onClick={() => { this.handleClickClose(); }}
                    ><GoMoveToStart /></button>
                </div>
            );
        }
        return (
            <div>
                <button className='sideopen'
                    onClick={() => { this.handleClickOpen(); }}
                ><GoListUnordered /></button>
                {sidebar}
            </div>
        );
    }
}

export default Sidebar;