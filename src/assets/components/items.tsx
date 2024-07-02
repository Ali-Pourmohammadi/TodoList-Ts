import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

interface Item {
  id: number;
  title: string;
}

interface ItemProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDelete, onEdit }) => {
  return (
    <li className="item-list">
      <span>{item.title}</span>
      <div>
      <button onClick={() => onDelete(item.id)} className="delete-button">
        <FaTrash />
      </button>
      <button onClick={() => onEdit(item.id)} className="edit-button">
        <FaEdit />
      </button>
      </div>
    
    </li>
  );
};

export default Item;
