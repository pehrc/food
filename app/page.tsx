import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search-input";

const Home = () => {
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
    </div>
  );
};

export default Home;
