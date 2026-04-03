import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const CreateToDo = ({createtodo}) => {
  
    function getTodo(formdata){
const data=Object.fromEntries(formdata)
createtodo(data.task)

    }
  return (
   

      <div className="relative w-lg">
        <form action={getTodo}>
          <input
            type="text"
            name="task"
            placeholder="Enter a todo  "
            className="border-white  border-2 p-3 rounded-2xl w-full  shadow-xl focus:outline-none bg-white "
          />
          <button
          type="submit"
          className="absolute  right-2 top-1/2 transform -translate-y-1/2  cursor-pointer"
        >
          <FontAwesomeIcon
            className=" text-gray-600 w-4 text-2xl"
            icon={faPlusCircle}
          />
        </button>
        </form>
        {/*<button className="bg-blue-700 py-3 rounded-2xl px-6 text-white">
            Add task
          </button> */}
      </div>

     
    
  );
};
export default CreateToDo;
