import React from 'react';

const SingleJob = ({ jb }) => {
  return (
    <div className="card bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 shadow-xl m-4">
      <figure>
        <img
          className="object-cover w-full h-48 md:h-56 lg:h-64"
          src={jb.image}
          alt={jb.title}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg lg:text-xl">
          {jb.title}
          <div className="badge badge-secondary ml-2">{jb.employmentType}</div>
        </h2>
        <p className="text-sm text-gray-600">{jb.company}</p>
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline">{jb.location}</div>
          <div className="badge badge-outline">{jb.salary}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
