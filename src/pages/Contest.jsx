import React from "react";

const contests = [
  {
    id: 682758,
    title: "做完题再走",
    beginTime: "69 sec ago",
    length: "5 hours",
    owner: "wengjordan",
  },
  {
    id: 682756,
    title: "Atcoder Virtual 200",
    beginTime: "16 min ago",
    length: "1 hours",
    owner: "9xZER0",
  },
  {
    id: 682755,
    title: "Atcoder Virtual 180",
    beginTime: "19 min ago",
    length: "1 hours",
    owner: "9xZER0",
  },
  {
    id: 682753,
    title: "BT 29_12",
    beginTime: "20 min ago",
    length: "41.7 days",
    owner: "ngoloiyl",
  },
  {
    id: 682752,
    title: "ds",
    beginTime: "34 min ago",
    length: "20.8 days",
    owner: "kunnitaimei",
  },
  {
    id: 682751,
    title: "Atcoder virtual 260",
    beginTime: "39 min ago",
    length: "1 hours",
    owner: "9xZER0",
  },
  {
    id: 682748,
    title: "Adhocs & Two Pointers",
    beginTime: "39 min ago",
    length: "7.1 days",
    owner: "ntannn",
  },
  {
    id: 682747,
    title: "Testing Purpose",
    beginTime: "62 min ago",
    length: "3 days",
    owner: "Why_always_me",
  },
  {
    id: 682746,
    title: "实验场11",
    beginTime: "63 min ago",
    length: "2 hours",
    owner: "sswc",
  },
  {
    id: 682745,
    title: "TCP 5 (graphs)",
    beginTime: "8 hr later",
    length: "2 hours",
    owner: "virt_judge1",
  },
  {
    id: 682744,
    title: "TCP 4 (graphs)",
    beginTime: "69 min ago",
    length: "2 hours",
    owner: "virt_judge1",
  },
  {
    id: 682743,
    title: "Team Building Contest 3",
    beginTime: "30 hr later",
    length: "2 hours",
    owner: "core_dumped",
  },
  {
    id: 682742,
    title: "ICT 21 Marathon 1.0",
    beginTime: "6 hr later",
    length: "6 days",
    owner: "Test8",
  },
  {
    id: 682741,
    title: "EWU Team Practice Contest 2",
    beginTime: "69 min ago",
    length: "5 hours",
    owner: "fahimcp495",
  },
  {
    id: 682740,
    title: "Xetti alqoritm",
    beginTime: "79 min ago",
    length: "5 hours",
    owner: "3-6-ci gun",
  },
  {
    id: 682738,
    title: "Solo Speed Contest - 103 (UIU_SOMONNOYOK)",
    beginTime: "89 min ago",
    length: "1 hours",
    owner: "sabid_2310179",
  },
  {
    id: 682735,
    title: "29/12/2024 to 05/01/2025",
    beginTime: "99 min ago",
    length: "8.3 days",
    owner: "tunghoang",
  },
  {
    id: 682733,
    title: "STL 4 Musketeers",
    beginTime: "2 hr ago",
    length: "5 hours",
    owner: "Tirade",
  },
  {
    id: 682731,
    title: "diphunter9(6)",
    beginTime: "8 hr later",
    length: "2 hours",
    owner: "MdSiam138",
  },
  {
    id: 682728,
    title: "Persistent Segment Tree [Cloned]",
    beginTime: "3 hr ago",
    length: "30 days",
    owner: "ToIKittam",
  },
];

const Contest = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contests</h2>
        <div className="flex justify-between mb-4">
          <div className="space-x-4">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md">
              All
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Scheduled
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Running
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Ended
            </button>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              All Contests
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Public Contests
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Classical
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Group
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Replay
            </button>
          </div>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Begin Time</th>
              <th className="py-2 px-4 border-b">Length</th>
              <th className="py-2 px-4 border-b">Owner</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest) => (
              <tr key={contest.id}>
                <td className="py-2 px-4 border-b">{contest.id}</td>
                <td className="py-2 px-4 border-b">{contest.title}</td>
                <td className="py-2 px-4 border-b">{contest.beginTime}</td>
                <td className="py-2 px-4 border-b">{contest.length}</td>
                <td className="py-2 px-4 border-b">{contest.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
            Previous
          </button>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              4
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              5
            </button>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contest;
