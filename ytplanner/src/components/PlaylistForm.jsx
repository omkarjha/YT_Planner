import React, { useState } from 'react';

function PlaylistForm() {
  const [linkType, setLinkType] = useState('single');
  const [numCourses, setNumCourses] = useState(1);
  const [links, setLinks] = useState(['']);

  const handleLinkTypeChange = (event) => {
    const type = event.target.value;
    setLinkType(type);

    if (type === 'single') {
      setNumCourses(1);
      setLinks(['']);
    }
  };

  const handleNumCoursesChange = (event) => {
    const num = parseInt(event.target.value);
    setNumCourses(num);
    setLinks(Array(num).fill(''));
  };

  const handleLinkChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Link Type:', linkType);
    console.log('Number of Courses:', numCourses);
    console.log('Links:', links);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Course Routine Planner</h2>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="linkType"
            value="single"
            checked={linkType === 'single'}
            onChange={handleLinkTypeChange}
            className="mr-2"
          />
          Single Course Link
        </label>
        <label>
          <input
            type="radio"
            name="linkType"
            value="multiple"
            checked={linkType === 'multiple'}
            onChange={handleLinkTypeChange}
            className="mr-2"
          />
          Multiple Course Links
        </label>
      </div>

      {linkType === 'multiple' && (
        <div className="mb-4">
          <label className="block mb-2">Number of Courses:</label>
          <select
            value={numCourses}
            onChange={handleNumCoursesChange}
            className="block w-full p-2 border rounded bg-gray-100 "
          >
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      )}

      {Array.from({ length: numCourses }).map((_, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Course {index + 1} Link:</label>
          <input
            type="text"
            value={links[index]}
            onChange={(event) => handleLinkChange(index, event)}
            className="block w-full p-2 border rounded bg-gray-100"
            placeholder={`Enter YouTube Playlist Link ${index + 1}`}
          />
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default PlaylistForm;
