

import { ReactNode } from "react";
import Item from "./items";

interface itemProp{
id  : number,
title : string
}
interface ListItemProps {
    items: itemProp[]
  children ? : ReactNode
  onDelete :(id:number)=> void
  onEdit : (id:number)=> void
}
const ListItem: React.FC<ListItemProps> = ({items , onDelete , onEdit}) => {
  if(!items.length) return <h3 className="empty">write something to do !</h3>
  return (
      <ul className="list-container">
        {items.map(item=> <Item key={item.id} item={item} onDelete={onDelete}  onEdit={onEdit}/> )}
      </ul> 
  );
};

export default ListItem;
