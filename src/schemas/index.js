const { gql } = require('apollo-server-express');

//const  getOffers  = require('./offers')
const getPaymentHistory = require('./paymentHistory')

module.exports = gql`

  ${getPaymentHistory}
`;
