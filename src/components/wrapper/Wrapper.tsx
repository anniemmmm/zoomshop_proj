import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i className='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus products in any range.",
    },
    {
      cover: <i className='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer secure and safe payment options for a smooth shopping experience.",
    },
    {
      cover: <i className='fa-solid fa-shield'></i>,
      title: "Shop With Confidence",
      decs: "Shop with confidence knowing that your purchases are protected.",
    },
    {
      cover: <i className='fa-solid fa-headset'></i>,
      title: "24/7 Support",
      decs: "Our dedicated support team is available 24/7 to assist you with any queries.",
    },
  ]

  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
