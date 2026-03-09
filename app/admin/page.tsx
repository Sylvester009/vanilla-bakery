export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* Add Product */}
      <div className="border rounded-lg p-6 mb-10">

        <h2 className="font-semibold mb-4">
          Add New Product
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Product Name"
            className="border p-3 rounded"
          />

          <input
            placeholder="Image URL"
            className="border p-3 rounded"
          />

          <input
            placeholder="Min Price"
            className="border p-3 rounded"
          />

          <input
            placeholder="Max Price"
            className="border p-3 rounded"
          />

        </div>

        <textarea
          placeholder="Description"
          className="border p-3 rounded w-full mt-4"
        />

        <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded">
          Add Product
        </button>

      </div>

      {/* Product List */}
      <div className="border rounded-lg p-6">

        <h2 className="font-semibold mb-6">
          Products
        </h2>

        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">Carrot Cake</td>
              <td>₦30,000 - ₦80,000</td>
              <td className="space-x-4">

                <button className="text-blue-500">
                  Edit
                </button>

                <button className="text-red-500">
                  Delete
                </button>

              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}