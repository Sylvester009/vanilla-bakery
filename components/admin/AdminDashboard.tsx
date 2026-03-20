"use client"

import { useState } from "react";
import Button from "../molecules/Button";
import AddEditProductModal from "./modals/AddEditProductModal";
import AdminProductCard from "./cards/AdminProductCard";
import { products } from "@/data/products";
import ConfirmationModal from "./modals/ConfirmationModal";
import ManageAdmins from "./ManageAdmin";

export const AdminDashboard = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editProduct, setEditProduct] =useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);


    const openAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const handleEditProduct = () => {
    setEditProduct(true);
  }

  const confirmDeleteProduct = () => {
    setShowConfirmDelete(true);
  };
  const handleDeleteProduct  = () => {};

  return ( 
    <div> 

      {/* Header */}
      <div className="flex flex-col  gap-6 items-start justify-between mb-10 md:flex-row md:items-center ">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div>
          <Button onClick={openAddProductModal} variant="solid">+ Add Product</Button>
        </div>
      </div>


      {/* Products */}
       <h3 className="text-2xl mb-3 font-semibold">
          All Products
        </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {products.map((product) => (
                <AdminProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  priceMin={product.priceMin}
                  priceMax={product.priceMax}
                  image={product.image}
                  onEdit={handleEditProduct}
          onDelete={confirmDeleteProduct}
                />
              ))}
      </div>

      {/*Admin Management  */}
      <div>
        <ManageAdmins/>
      </div>

    



      {showAddProductModal && <AddEditProductModal 
        isOpen={showAddProductModal} 
        onClose={() => setShowAddProductModal(false)}
      />}

      {editProduct && <AddEditProductModal
        isOpen={editProduct}
        onClose={() => setEditProduct(false)}
        isEditMode
      />}

      {showConfirmDelete &&  <ConfirmationModal
        isOpen= {showConfirmDelete}
        onClose = {() => setShowConfirmDelete(false)}
        onConfirm = {handleDeleteProduct}
        message="Delete"
        highlight= "This Product"
        confirmText="Yes, Delete"
      />}
    </div>
  );
}