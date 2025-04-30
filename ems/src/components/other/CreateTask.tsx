import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="h-screen w-full ">
        <div className="p-20">
          <form action="" className="flex items-start  justify-between  ">
            <div className="flex flex-col gap-6">
              <div>
                <h3>Task Title</h3>
                <input
                  type="text"
                  placeholder="Make a UI design"
                  className="border rounded-md p-1 pl-2 mt-2"
                />
              </div>
              <div>
                <h3>Date</h3>
                <input
                  type="date"
                  className="border rounded-md p-1 pl-2 mt-2"
                />
              </div>
              <div>
                <h3>Assign to</h3>
                <input
                  type="text"
                  placeholder="employee name"
                  className="border rounded-md p-1 pl-2 mt-2"
                />
              </div>
              <div>
                <h3>Category</h3>
                <input
                  type="text"
                  placeholder="design, dev, etc"
                  className="border rounded-md p-1 pl-2 mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3>Description</h3>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="bg-amber-50  rounded-md"
              ></textarea>
              <button className="bg-green-300 p-2 rounded-md font-bold">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
