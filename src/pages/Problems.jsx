import React from "react";

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    tags: ["Linked List", "Math"],
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    tags: ["Hash Table", "String", "Sliding Window"],
  },
  // Add more problems as needed
];

const Problems = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Problems</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Difficulty</th>
              <th className="py-2 px-4 border-b">Tags</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td className="py-2 px-4 border-b">{problem.id}</td>
                <td className="py-2 px-4 border-b">{problem.title}</td>
                <td className="py-2 px-4 border-b">{problem.difficulty}</td>
                <td className="py-2 px-4 border-b">
                  {problem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
