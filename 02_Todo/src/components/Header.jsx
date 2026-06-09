import AddItem from "./AddItem"

const Header = ({fetchNewItem2,updateChild}) => {
  return (
    <div className="flex justify-between  border  p-2 w-full">
        <AddItem  fetchNewItem3={fetchNewItem2} updateChild={updateChild}/>
        <div>Search</div>
    </div>
  )
}

export default Header