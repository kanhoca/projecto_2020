import React from 'react';
import { Button } from '@material-ui/core';
function Header(){
    return(
        <header className="header">
             <div className="toolbar">
             <div className="">
                 <span>Htur</span>
             </div>
             <div className="">
                 <Button color="primary">Novo Post</Button>
                 <span>Img0</span>
                 <span>Img1</span>
             </div>
             </div>
            
         </header>
    )
}
export default Header;