import React from 'react';
import {SidebarData} from './sidebardata';
import { GoMoveToStart } from "react-icons/go";
import { GoListUnordered } from "react-icons/go";

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state={isSidebarOpen:false}
        this.state={buttonOpen:true}
    }

    handleClickOpen(){
        this.setState({isSidebarOpen:true});
    }

    handleClickClose(){
        this.setState({isSidebarOpen:false});
    }

    render(){
        let sidebar;
        if(this.state.isSidebarOpen){
            sidebar=(
                <div >
                    <div class='sidebar'>
                        <ul class='sidebarlist'>
                            {SidebarData.map((value,key)=>{
                                return(
                                    <li>
                                        <div id="icon">{value.icon}</div>
                                        <div id="icon">{value.title}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <button class='sideclose'
                    onClick={()=>{this.handleClickClose()}}
                    ><GoMoveToStart/></button>
                </div>
            )
        }
        return(
            <div>
                <button class='sideopen'
                 onClick={()=>{this.handleClickOpen()}}
                ><GoListUnordered/></button>
                {sidebar}
            </div>
        )
    }
}

export default Sidebar;