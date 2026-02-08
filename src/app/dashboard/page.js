"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [student, setStudent] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load projects from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever projects change
  const saveProjects = (updated) => {
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !student || !url || (!image && editIndex === null))
      return alert("Please fill all fields");

    if (editIndex !== null) {
      // Editing existing project
      const updated = [...projects];
      if (image) {
        const reader = new FileReader();
        reader.onload = () => {
          updated[editIndex] = { title, student, url, image: reader.result };
          saveProjects(updated);
          resetForm();
        };
        reader.readAsDataURL(image);
      } else {
        updated[editIndex] = { ...updated[editIndex], title, student, url };
        saveProjects(updated);
        resetForm();
      }
    } else {
      // Adding new project
      const reader = new FileReader();
      reader.onload = () => {
        const newProject = { title, student, url, image: reader.result };
        saveProjects([newProject, ...projects]); // newest first
        resetForm();
      };
      reader.readAsDataURL(image);
    }
  };

  const resetForm = () => {
    setTitle("");
    setStudent("");
    setUrl("");
    setImage(null);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const proj = projects[index];
    setTitle(proj.title);
    setStudent(proj.student);
    setUrl(proj.url);
    setImage(null); // user can choose new image
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const updated = [...projects];
    updated.splice(index, 1);
    saveProjects(updated);
  };

  return (
    <section className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Manage Projects</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-12">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />
          <input
            type="url"
            placeholder="Project URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="p-3 rounded-md bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="py-3 bg-cyan-600 rounded-md hover:bg-cyan-500 transition font-bold"
          >
            {editIndex !== null ? "Update Project" : "Add Project"}
          </button>
        </form>

        {/* Projects List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg bg-gray-700"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-[#00c7b2]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">By: {project.student}</p>
                <p className="text-gray-300 text-sm truncate">URL: {project.url}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
