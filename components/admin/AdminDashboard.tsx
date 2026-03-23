"use client"

import { useState } from "react";
import Button from "../molecules/Button";
import AddEditProductModal from "./modals/AddEditProductModal";
import AdminProductCard from "./cards/AdminProductCard";
import { products } from "@/data/products";

export const AdminDashboard = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [editProduct, setEditProduct] =useState(false);


    const openAddProductModal = () => {
    setShowAddProductModal(true);
  }

  const handleEditProduct = () => {
    setEditProduct(true);
  }

  const handleDeleteProduct = (id: string) => {
    if(confirm("Are you sure you want to delete this?")) {
      console.log("Deleting product:", id);
    }
  };
  return ( 
    <div> 
      <h1 className="text-3xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="mb-6">
        <Button onClick={openAddProductModal} variant="solid">+ Add Product</Button>
      </div>

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
          onDelete={() => handleDeleteProduct}
                />
              ))}
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
    </div>
  );
}