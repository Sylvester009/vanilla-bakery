'use client';
import { useState } from 'react';
import AdminTable from './AdminTable';
import ConfirmationModal from './modals/ConfirmationModal';
import Button from '../molecules/Button';
import AddAdminModal from './modals/AddAdminModal';


export default function ManageAdmins() {
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [admins, setAdmins] = useState([
    { id: '1', name: 'Zainab Cake', email: 'zainab@bakery.com', role: 'Super Admin', addedAt: 'Feb 12, 2026' },
    { id: '2', name: 'Chidi Okoro', email: 'chidi@bakery.com', role: 'Manager', addedAt: 'Jan 05, 2026' },
  ]);

  const [targetAdmin, setTargetAdmin] = useState<{id: string, name: string} | null>(null);

  const handleDeleteClick = (id: string, name: string) => {
    setTargetAdmin({ id, name });
  };

  const handleAddClick = () =>{
    setIsAddAdminModalOpen(true)
  }

  const handleAddAdmin = async (data: any) => {
    console.log("Saving new admin to database:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  const confirmDelete = async () => {
    // Simulate API Delete Call
    await new Promise(r => setTimeout(r, 1000));
    setAdmins(admins.filter(a => a.id !== targetAdmin?.id));
    setTargetAdmin(null);
  };

  return (
    <div className='py-8'>
      <div className='flex flex-col  gap-6 items-start justify-between mb-10 md:flex-row md:items-center '>
        <h3 className="text-2xl font-semibold">Staff Management</h3>
        <Button variant='solid' onClick={handleAddClick}>+ Add Admin</Button>
      </div>
      
      <AdminTable
        admins={admins} 
        onDelete={handleDeleteClick} 
      />

      <AddAdminModal 
        isOpen={isAddAdminModalOpen} 
        onClose={() => setIsAddAdminModalOpen(false)} 
        onAdd={handleAddAdmin}
      />

      <ConfirmationModal 
      title='Confirm Delete'
        isOpen={!!targetAdmin}
        onClose={() => setTargetAdmin(null)}
        onConfirm={confirmDelete}
        message='Delete'
        highlight={targetAdmin?.name || ""}
      
      />
    </div>
  );
}