import type { ReactElement } from "react";
import Link from "next/link";
import { MenuItem } from "../types";
import MenuItems from "../MenuItems/MenuItems";
import { Button, Drawer } from "react-daisyui";
import { useState } from "react";

function AppDrawer({ children, items }: any): ReactElement {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <Drawer
      side={
        <div className="p-4">
          <MenuItems items={items} />
        </div>
      }
      open={visible}
      onClickOverlay={toggleVisible}
    >
      {children}
    </Drawer>
  );

  // // handle side prop
  // let DrawerCssClass = '';
  // if (side === "right") {
  //     DrawerCssClass = 'drawer-end';
  // }

  // return (
  //     <div className={`drawer ${DrawerCssClass}`}>
  //         <input
  //             className={"drawer-toggle"}
  //             type={"checkbox"}
  //             id={"drawer-toggle"}
  //         />
  //         <div className={'drawer-content'}>
  //             <label
  //                 className={'drawer-label'}
  //                 htmlFor={"drawer-toggle"}
  //                 id={drawerID}
  //             >
  //                 {children}
  //             </label>
  //         </div>

  //         {/* Side of the drawer  */}
  //         <div className={'drawer-side'}>
  //             <label
  //                 htmlFor={drawerID}
  //                 className={"drawer-overlay"}>
  //             </label>

  //         <MenuItems
  //             items={drawerItems||[]}
  //             className={'drawer-dropdown'}
  //         />
  //         </div>
  //     </div>
  // )
}

interface DrawerProps {
  className?: string;
  side?: "left" | "right";
  children?: ReactElement;
  drawerItems?: MenuItem[];
  drawerID?: string;
}

AppDrawer.defaultProps = {
  side: "left",
  children: null,
  drawerItems: [],
};

export default AppDrawer;
