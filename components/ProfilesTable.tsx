import React from 'react';
import { FiEdit, FiTrash, FiEye } from 'react-icons/fi';

interface Profile {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  lastActive: string;
}

const ProfilesTable: React.FC = () => {
  const profiles: Profile[] = [
    {
      id: '1',
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      status: 'active',
      lastActive: '10 min ago',
    },
    {
      id: '2',
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      status: 'inactive',
      lastActive: '3 days ago',
    },
    {
      id: '3',
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      status: 'active',
      lastActive: '1 hour ago',
    },
    {
      id: '4',
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      status: 'active',
      lastActive: '2 hours ago',
    },
    {
      id: '5',
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      status: 'inactive',
      lastActive: '1 week ago',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Profiles</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{profile.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{profile.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    profile.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {profile.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {profile.lastActive}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FiEye className="h-5 w-5" />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <FiEdit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FiTrash className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilesTable; 