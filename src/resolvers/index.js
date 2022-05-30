const { getOffers } = require('./getOffers');
const { getPaymentHistory } = require('./getPaymentHistory');

const Query = {
    marcoPolo: () => ({}),
};

const Mutation = {
    marcoPolo: () => ({}),
};

module.exports = {
    Query,
    Mutation,
    getPaymentHistory,
    getOffers
}
/*
const resolvers = {
    Query: {
        getPaymentHistory: async () => {

            let result
            var axios = require('axios');

            var config = {
                method: 'get',
                url: 'https://myaccount-bff.ar.dazn-stage.com/v1/payment-items?offset=0&limit=13',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGY3MmJjOTktNzY1ZC00ZjI1LWExNDYtZTg1ODI0ZjE3NTk2IiwiaXNzdWVkIjoxNjUzOTM5Nzk2LCJ1c2Vyc3RhdHVzIjoiQWN0aXZlUGFpZCIsInZpZXdlcklkIjoiZTg1ODI0ZjE3NTk2IiwiY291bnRyeSI6Im5sIiwiY29udGVudENvdW50cnkiOiJkZSIsInVzZXJUeXBlIjozLCJkZXZpY2VJZCI6ImRmNzJiYzk5LTc2NWQtNGYyNS1hMTQ2LWU4NTgyNGYxNzU5Ni0xODI3ODA3NDg2IiwiY2FucmVkZWVtZ2MiOiJFbmFibGVkIiwibXB4IjoiZXlKaGJHY2lPaUpTVXpVeE1pSjkuZXlKemRXSWlPaUp3WjJ4ekxYQnlaQzEwY25WemRHVmtMMlJtTnpKaVl6azVMVGMyTldRdE5HWXlOUzFoTVRRMkxXVTROVGd5TkdZeE56VTVOaUlzSW1semN5STZJakVpTENKbGVIQWlPakUyTlRNNU5EWTVPVFVzSW1saGRDSTZNVFkxTXprek9UYzVOVGs1TXl3aWFuUnBJam9pWW1Fd1pXTmpPV1F0Wkdaa1pTMDBOekZoTFdJNE1UVXRZVGs1WXpVek5UQXdORFV4SWl3aVpHbGtJam9pY0dkc2N5MXdjbVF0ZEhKMWMzUmxaQ0lzSW5WdWJTSTZJbVJtTnpKaVl6azVMVGMyTldRdE5HWXlOUzFoTVRRMkxXVTROVGd5TkdZeE56VTVOaUlzSW1OMGVDSTZJbnRjSW5WelpYSk9ZVzFsWENJNlhDSmtaamN5WW1NNU9TMDNOalZrTFRSbU1qVXRZVEUwTmkxbE9EVTRNalJtTVRjMU9UWmNJaXhjSW1GMGRISnBZblYwWlhOY0lqcDdYQ0p6ZFdKelkzSnBjSFJwYjI1TVpYWmxiRndpT2x3aWMzUmhibVJoY21SY0luMTlYRzRpTENKdmFXUWlPbTUxYkd4OS5LMzJ4UzkzbHFmQ1lZaG01ejJlcUU0R1lMdENETUZsMG1NOUtoS0JTdUhfVkpERkJUUXR0aXhDNmdsTTRKRUJjbEU3WDZyVnZQSkNHR2pLWWhsd2xoYm1TN1d4dl80OGVIYmlxVjloUE9oSl9ZZjUxOUtpX0c5RlV0YWdkbTRBcENJX1lscXN2QXZ0SjE1WDVJSUs1MjNJZEhzQzgtQ3VSSTlRbEhETEJoWXdERU5VSjNpaGg5Z2owNEw3THpYU2N4RFRKdDI5RTFkaFo5NmRfSlR4OUpmR2tYaVNRZ1hQZGlXLTlHdkFaXzlFTjgycGZVRjNqVDBRdEM2M1hQdmdUQTJoNjFCN0x4NnhwbVlvSnI3ZmtMa2JEXzNHNVhzT2hoYjNvcW81MEtRQ2VxUmI3eDM4azFwYVBTUm5mZEctM0FRNC1jTmhEUmFMaHByZWpSQWJBa2ciLCJqdGkiOiIzMDZhMmI3Mi03Y2E1LTQ3OWYtYmVlZS01OWI5OWMyOTJjNTYiLCJpZHBUeXBlIjoiaWRwLXBhc3N3b3JkIiwicHJvdmlkZXJOYW1lIjoiZGF6biIsInByb3ZpZGVyQ3VzdG9tZXJJZCI6IjIwMWMwZTJkLTMyZDktNGU4NS1iYmJkLTYzOGI3N2VjZmI5YiIsImVudGl0bGVtZW50cyI6eyJlbnRpdGxlbWVudFNldHMiOltdLCJmZWF0dXJlcyI6eyJDT05DVVJSRU5DWSI6eyJtYXhfZGV2aWNlcyI6Mn19fSwiZXhwIjoxNjUzOTQ2OTk2fQ.Lujex8K7WXf-83wjLO9u68uiLJDvbag4mkBmo1QMA51a64rkqQH1u8FWAwaTgz7XGGCp-TuMFUed3xd62A8wcGKO5yLa_7Hd5_QjXxnNu4iNF6ggoHKIranShzcniR3W4FvXOAqUceti6PjBzC-MXfx2-VEgB1PqbB_m9NHdPEvNFJleC13SlMBsPKWtEfzz4lMD9G6KYjijuu_lsQYXOKyAZ2xDsovVpccsaS-zZYiUpivLoxWiRXOEo2OM6UunuCEL6FTrbLWcN7AkMcU51L8YBgNXglc8_2WXueXTbC9pItlyfCGB1PNegT7tZYKuDikJNLYz2VR8vU7HE-oLug'
                }
            };

            result = await axios(config)

            console.log(result)
            return result.data
        }
    },
    Mutation: {
        getOffers: async (request) => {
            console.log('offer request ', request);
            return 'Hello';
        }
    }
    };
*/

/*resolvers.Mutation.getOffers = async(Platform) => {
    const request = {
        method: 'POST',
        url: 'https://myaccount-bff.ar.dazn-stage.com/v1/offers',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGY3MmJjOTktNzY1ZC00ZjI1LWExNDYtZTg1ODI0ZjE3NTk2IiwiaXNzdWVkIjoxNjUzOTM5Nzk2LCJ1c2Vyc3RhdHVzIjoiQWN0aXZlUGFpZCIsInZpZXdlcklkIjoiZTg1ODI0ZjE3NTk2IiwiY291bnRyeSI6Im5sIiwiY29udGVudENvdW50cnkiOiJkZSIsInVzZXJUeXBlIjozLCJkZXZpY2VJZCI6ImRmNzJiYzk5LTc2NWQtNGYyNS1hMTQ2LWU4NTgyNGYxNzU5Ni0xODI3ODA3NDg2IiwiY2FucmVkZWVtZ2MiOiJFbmFibGVkIiwibXB4IjoiZXlKaGJHY2lPaUpTVXpVeE1pSjkuZXlKemRXSWlPaUp3WjJ4ekxYQnlaQzEwY25WemRHVmtMMlJtTnpKaVl6azVMVGMyTldRdE5HWXlOUzFoTVRRMkxXVTROVGd5TkdZeE56VTVOaUlzSW1semN5STZJakVpTENKbGVIQWlPakUyTlRNNU5EWTVPVFVzSW1saGRDSTZNVFkxTXprek9UYzVOVGs1TXl3aWFuUnBJam9pWW1Fd1pXTmpPV1F0Wkdaa1pTMDBOekZoTFdJNE1UVXRZVGs1WXpVek5UQXdORFV4SWl3aVpHbGtJam9pY0dkc2N5MXdjbVF0ZEhKMWMzUmxaQ0lzSW5WdWJTSTZJbVJtTnpKaVl6azVMVGMyTldRdE5HWXlOUzFoTVRRMkxXVTROVGd5TkdZeE56VTVOaUlzSW1OMGVDSTZJbnRjSW5WelpYSk9ZVzFsWENJNlhDSmtaamN5WW1NNU9TMDNOalZrTFRSbU1qVXRZVEUwTmkxbE9EVTRNalJtTVRjMU9UWmNJaXhjSW1GMGRISnBZblYwWlhOY0lqcDdYQ0p6ZFdKelkzSnBjSFJwYjI1TVpYWmxiRndpT2x3aWMzUmhibVJoY21SY0luMTlYRzRpTENKdmFXUWlPbTUxYkd4OS5LMzJ4UzkzbHFmQ1lZaG01ejJlcUU0R1lMdENETUZsMG1NOUtoS0JTdUhfVkpERkJUUXR0aXhDNmdsTTRKRUJjbEU3WDZyVnZQSkNHR2pLWWhsd2xoYm1TN1d4dl80OGVIYmlxVjloUE9oSl9ZZjUxOUtpX0c5RlV0YWdkbTRBcENJX1lscXN2QXZ0SjE1WDVJSUs1MjNJZEhzQzgtQ3VSSTlRbEhETEJoWXdERU5VSjNpaGg5Z2owNEw3THpYU2N4RFRKdDI5RTFkaFo5NmRfSlR4OUpmR2tYaVNRZ1hQZGlXLTlHdkFaXzlFTjgycGZVRjNqVDBRdEM2M1hQdmdUQTJoNjFCN0x4NnhwbVlvSnI3ZmtMa2JEXzNHNVhzT2hoYjNvcW81MEtRQ2VxUmI3eDM4azFwYVBTUm5mZEctM0FRNC1jTmhEUmFMaHByZWpSQWJBa2ciLCJqdGkiOiIzMDZhMmI3Mi03Y2E1LTQ3OWYtYmVlZS01OWI5OWMyOTJjNTYiLCJpZHBUeXBlIjoiaWRwLXBhc3N3b3JkIiwicHJvdmlkZXJOYW1lIjoiZGF6biIsInByb3ZpZGVyQ3VzdG9tZXJJZCI6IjIwMWMwZTJkLTMyZDktNGU4NS1iYmJkLTYzOGI3N2VjZmI5YiIsImVudGl0bGVtZW50cyI6eyJlbnRpdGxlbWVudFNldHMiOltdLCJmZWF0dXJlcyI6eyJDT05DVVJSRU5DWSI6eyJtYXhfZGV2aWNlcyI6Mn19fSwiZXhwIjoxNjUzOTQ2OTk2fQ.Lujex8K7WXf-83wjLO9u68uiLJDvbag4mkBmo1QMA51a64rkqQH1u8FWAwaTgz7XGGCp-TuMFUed3xd62A8wcGKO5yLa_7Hd5_QjXxnNu4iNF6ggoHKIranShzcniR3W4FvXOAqUceti6PjBzC-MXfx2-VEgB1PqbB_m9NHdPEvNFJleC13SlMBsPKWtEfzz4lMD9G6KYjijuu_lsQYXOKyAZ2xDsovVpccsaS-zZYiUpivLoxWiRXOEo2OM6UunuCEL6FTrbLWcN7AkMcU51L8YBgNXglc8_2WXueXTbC9pItlyfCGB1PNegT7tZYKuDikJNLYz2VR8vU7HE-oLug'
        },
        body: {Platform}
    }

    const response = await axios(request);
    return response;
}*/

//module.exports = { resolvers };
