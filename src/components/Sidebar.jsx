import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";


export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem); 
  // this is the selector function that we pass to the useItemsStore hook 
  // to get the addItem function from the store
  console.log("Sidebar rendering...");

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
