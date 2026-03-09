import { CakeSlice, Truck, Heart } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="bg-pink-50 py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

        <div>
          <CakeSlice className="mx-auto mb-4 text-pink-500" size={40}/>
          <h3 className="font-semibold text-lg mb-2">
            Premium Ingredients
          </h3>
          <p className="text-gray-600">
            We use only high quality ingredients.
          </p>
        </div>

        <div>
          <Truck className="mx-auto mb-4 text-pink-500" size={40}/>
          <h3 className="font-semibold text-lg mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Fresh cakes delivered quickly to your doorstep.
          </p>
        </div>

        <div>
          <Heart className="mx-auto mb-4 text-pink-500" size={40}/>
          <h3 className="font-semibold text-lg mb-2">
            Baked with Love
          </h3>
          <p className="text-gray-600">
            Every cake is made with passion.
          </p>
        </div>

      </div>

    </section>
  );
}