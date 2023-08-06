'use client'
/**
 * This component is narrowly used by layout sidebar component, so put at this directory*  
 */
import Button from "#/components/common/Button"


export default function SideBarToggleButton(props: {}) {
  return (
    <><Button
      id={"sidebar-toggle"}
      className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
      onClick={(event) => {
        const parentContainer = event!.currentTarget!.parentElement as HTMLButtonElement;
        parentContainer.classList.toggle("closed");
      } }
    >
      <div className="font-medium text-gray-100 group-hover:text-gray-400">
        Menu
      </div>
    </Button></>
  );
}