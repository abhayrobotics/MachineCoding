import AddItem from "./AddItem"

const Header = ({fetchNewItem2}) => {
  return (
    <div className="flex justify-between  border  p-2 w-full">
        <AddItem  fetchNewItem3={fetchNewItem2}/>
        <div>Search</div>
    </div>
  )
}

export default Header