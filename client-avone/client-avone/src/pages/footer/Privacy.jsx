import React from 'react'
import "../../assets/css/style.scss"

const Privacy = () => {
  return (
     <>
        <div className='info-container2'>
            <div className='info-content3'>
                <h2>Information Page</h2>
            </div>

            <div className='info-description2'>
                <h3>Payment Method</h3>
                <p>The available international credit card options are VISA, Mastercard, Maestro, American Express, Discover and Diners. The available domestic debit card options are VISA and Mastercard.
                    <br />
                    <br />
                    Please note that Avon does not collect your credit/debit card number or personal information when you make a payment. For questions regarding your transactions on our site, please consult your card-issuing bank for information.</p>
                <ul style={{lineHeight:"30px"}}>
                    <li>Please make sure that you enter the coupon code exactly as you received it, with no space before, within, or after it. To avoid errors, we recommend you to copy/paste the promotional code you received.</li>
                    <li>Coupons cannot be combined. You can only use one coupon code per order.</li>
                    <li>Coupons are subject to offer terms. This does exclude some items on our website which are not eligible for coupon discounts.</li>
                    <li>You can pay up to 70% of your purchase with bonus points at checkout. Remember that 100 points = $1.</li>
                </ul>
            </div>

            <div className='info-description2'>
                <h3>Payment Method</h3>
                <p> We have put a lot of focus on making sure the items get delivered to our customers as quickly as possible. You will receive your order in 6-17 business days from the date that it is placed.
                    <br />
                    <br />
                A confirmation email will be sent to you once the order is authorized and verified. We begin preparing your order immediately after it is verified. With this sort of time frame, it makes it difficult for us to change or cancel your order, however, we will do our best to support your request.
                    <br />
                    <br />

                It normally takes 3-7 business days for us to process your order. Please note that this does not include holidays and weekends. </p>
            </div>

            <div className='info-description2'>
                <h3>Returns & Exchanges</h3>
                <p>It‘s bummed to us if you're not 100% satisfied with the items you received, we gladly accept returns postmarked within 45 days from the purchase date and we have made the returns so easy for you!
                    <br />
                    <br />
                </p>
                <ol style={{lineHeight:"30px"}}>
                    <li>Sign into your account.</li>
                    <li>Find the order in My Orders, click the “Return Item” button.</li>
                    <li>Select the item(s) you would like to return, indicate the reasons, and submit.</li>
                    <li>Select the mailing method: self-sending or pick-up service (choose the pick-up address and post office required information).</li>
                    <li>The logistics company will contact you as soon as possible, please wait for the courier to pick up the package or take the sealed package to the nearby mailing point and send to the address of Avon return center.</li>
                    <li>We will confirm the parcel immediately after we receive the return, update the status of the return and refund within 7 working days. The refund will be returned to you Avon wallet or to your original payment account.</li>
                </ol>
            </div>

            <div className='info-description2'>
                <h3>Return Conditions</h3>
                <p> We only accept returns postmarked within 45 days from the purchase date. Orders must be delivered. The address of the recipient must be in India. The following items cannot be returned or exchanged: bodysuits, lingerie & sleepwear, swimwear, jewelry, and accessories (except scarves, bags, and mermaid blankets).
                    <br />
                    <br />

                All items in bundling promotion is not eligible for partial cancels, exchanges, or returns. Items returned must be in their unused condition with the original packing. We do not accept a returned item that’s worn, damaged, washed or altered in any way. We do not accept returned items that were sent back by you directly without checking with us first. We do not offer Freight To Collect (FTC) service for the packages returned to us. The returns will be made at your own cost. </p>
            </div>

            <div className='info-description2'>
                <h3>Refunds</h3>
                <p>Returns will be processed within 7 days upon receipt of your package. The refund will be issued to your Avon Wallet or the original payment account per your request. If the order is free shipping, postage will not be deducted.
                    <br />
                    <br />

                Pick-up service charge will be deducted from total refund and self-sending shipping fee will be at your own cost.
                    <br />
                    <br />

                Note： Refunds will be initiated for items only, other fees like insurance, shipping, COD service charges are non refundable. </p>
            </div>
        </div>
      </>
 )
}

export default Privacy;