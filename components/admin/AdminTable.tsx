'use client';

import { Trash2, ShieldCheck, Mail } from 'lucide-react';
import Button from '@/components/molecules/Button';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
  addedAt: string;
}

interface AdminTableProps {
  admins: Admin[];
  onDelete: (id: string, name: string) => void;
}

const AdminTable = ({ admins, onDelete }: AdminTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left ">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Admin Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Email Address</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Role</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Date Joined</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-pink-50/30 transition-colors group">
                {/* Name Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{admin.name}</span>
                  </div>
                </td>

                {/* Email Column */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" />
                    {admin.email}
                  </div>
                </td>

                {/* Role Column */}
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-100">
                    <ShieldCheck size={12} />
                    {admin.role}
                  </span>
                </td>

                {/* Date Column */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    {admin.addedAt}
                  </div>
                </td>

                {/* Delete Action */}
                <td className="px-6 py-4 text-right">
                  <Button 
                    variant="delete" 
                    icon={Trash2}
                    className="px-3 py-1.5 text-xs  w-fit ml-auto bg-gray-100 text-blue-900 group-hover:opacity-100 hover:bg-gray-200 transition-opacity "
                    onClick={() => onDelete(admin.id, admin.name)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty State */}
      {admins.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-500">No admins found.</p>
        </div>
      )}
    </div>
  );
};

export default AdminTable;