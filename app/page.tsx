import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

import { db } from "./_lib/prisma";

import Header from "./_components/header";
import Search from "./_components/search-input";
import { Button } from "./_components/ui/button";
import ProductList from "./_components/product-list";
import CategoryList from "./_components/category-list";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          width={0}
          height={0}
          alt="Até 30% de desconto em pizzas"
          className="w-full h-auto object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="pt-6 space-y-4">
        <div className="px-5 flex items-center justify-between">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="text-primary p-0 hover:bg-transparent h-fit"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
