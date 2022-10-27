const NewOrderPage = () => {

  const createOrder = async (order) => {
    const res = await fetch('/orders/new', order, 'post')

  }
  return (
    <div>
      <h1>NewOrderPage</h1>
      <form onSubmit={createOrder}>

      </form>
    </div>
  );
};
export default NewOrderPage;
