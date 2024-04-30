import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function Data() {

  return (
    <>
      <div className="flex ml-[365px]">
        <div className="bg-[#f4f4f9] h-[60px] rounded-md flex items-center mt-3">
          <div className="flex gap-5 ">
            <h1 className="text-black ml-5">#5124</h1>
            <h1 className="text-black ml-10">Laliguras Sofa</h1>
            <h1 className="text-black ml-5">Terrace Hall</h1>
            <h1 className="text-black ml-16">$1500</h1>
            <h1 className="text-black ml-12">$1000</h1>
            <h1 className="text-black ml-4">2 Persons</h1>
            <div className='mr-2'>
              <div className="mr-5 flex items-center">
              <FaEdit className="text-blue-500 cursor-pointer"  />
              <span className="text-sm text-blue-500 cursor-pointer ml-1" >Edit</span>
            </div>
            <div className="flex items-center">
              <FaTrashAlt className="text-red-500 cursor-pointer"  />
              <span className="text-sm text-red-500 cursor-pointer ml-1" >Delete</span>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
