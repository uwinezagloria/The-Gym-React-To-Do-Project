import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const CreateToDo = () => {
  return (
   
      <section className="flex items-center justify-center  flex-col gap-10 mt-20 bg-blue-400 mx-55 py-20 rounded-4xl">
        <h1 className="text-4xl text-gray-400 font-bold">Todos</h1>
    
            <div className='relative w-lg'>
                 <form>
                     
            <input
              type="text"
              name="task"
              placeholder="Enter a todo  "
              className="border-white  border-2 p-3 rounded-2xl w-full  shadow-xl focus:outline-none bg-white "
            />
         
                 </form>
                 <button type="submit" className='absolute  right-2 top-1/2 transform -translate-y-1/2  cursor-pointer'>
                     <FontAwesomeIcon className=" text-gray-600 w-4 text-2xl"  icon={faPlusCircle}/>
                 </button>
           
            </div>
          
          {/*<button className="bg-blue-700 py-3 rounded-2xl px-6 text-white">
            Add task
          </button> */}
        
      </section>
  
  );
};
export default CreateToDo;
