import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5  mt-10 overflow-x-auto"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptate possimus explicabo accusamus. Nesciunt delectus vel cumque.
          Tenetur ad alias nihil consectetur hic?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptate possimus explicabo accusamus. Nesciunt delectus vel cumque.
          Tenetur ad alias nihil consectetur hic?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptate possimus explicabo accusamus. Nesciunt delectus vel cumque.
          Tenetur ad alias nihil consectetur hic?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptate possimus explicabo accusamus. Nesciunt delectus vel cumque.
          Tenetur ad alias nihil consectetur hic?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
