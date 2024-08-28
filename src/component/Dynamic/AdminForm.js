// src/components/AdminTool.js
import React, { useState } from 'react';
import { getLocalStorageData, setLocalStorageData } from '../../common/localStorage';

const AdminForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = { title, image, description };
    const existingContent = getLocalStorageData('homepageContent');
    existingContent.push(newContent);
    setLocalStorageData('homepageContent', existingContent);
    // Clear form
    setTitle('');
    setImage('');
    setDescription('');
  };

  const handleClearStorage = () => {
    localStorage.removeItem('homepageContent');
    window.location.reload(); // Reload the page to reflect changes
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-4">
          Add Content
        </button>
        <button
          type="button"
          onClick={handleClearStorage}
          className="bg-red-500 text-white p-2 rounded"
        >
          Clear All
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
