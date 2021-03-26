const OrderTotal = ({setDrawerState, drawerState,totalPrice}) => {
    return (
        <div className='total-box'>
            <div className='row'>
                <p>
                Discount
                </p>
                <h2>
                $ {(totalPrice/6).toFixed(2)}
                </h2>
            </div>
            <div className='row'>

                <p>
                Sub total
                </p>
                <h2>
                 $ {totalPrice.toFixed(2)}
                </h2>
            </div>
            <button onClick={() =>setDrawerState(!drawerState)} type='button' className='payment-btn'>Continue to Payment</button>

        </div>

    )
}

export default OrderTotal;