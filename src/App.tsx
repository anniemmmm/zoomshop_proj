import React from "react";


const App: React.FC = () => {
  const CartItem: Array<{
    price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined;
    qty: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined;
    id: React.Key | null | undefined;
    cover: string | undefined;
    name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
  }> = [];

  return (
    <>
      {CartItem.map((item) => {
        const productQty = typeof item.qty === 'number' ? item.qty : 0;

        

        return (
          
          <div key={item.id}>
             <div>
      <h1>Welcome to ZoOm ShOp!</h1>
      <p>This is a sample React application.</p>
    </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
