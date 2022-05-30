const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        getPaymentHistory: PaymentHistory
    }
    
    type PaymentMethodDetails {
        creditCardMaskNumber: String
        creditCardExpirationMonth: Float
        creditCardType: String
        creditCardExpirationYear: Float
        recurringDetailReference: String

    }
    type PaymentMethod {
        type: String
        details: [PaymentMethodDetails]
    }
    
    type SinglePaymentHistory {
        id: String
        date: String
        PaymentMethod: PaymentMethod
        subtotal: Float
        tax: Float
        total: Float
        paymentId: String
        currency: String
        type: String
        hasInvoice: Boolean
    }
    
    type PaymentHistory {
        results: [SinglePaymentHistory]
    }
 `;
