interface Category {
  cateImg: string;
  cateName: string;
}

const Catg: React.FC = () => {
  const data: Category[] = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    // ... other category objects ...
  ];

  return (
    <div className="category">
      <div className="chead d_flex">
        <h1>Brands</h1>
        <h1>Shops</h1>
      </div>
      {data.map((value, index) => {
        return (
          <div className="box f_flex" key={index}>
            <img src={value.cateImg} alt="" />
            <span>{value.cateName}</span>
          </div>
        );
      })}
      <div className="box box2">
        <button>View All Brands</button>
      </div>
    </div>
  );
};

export default Catg;
