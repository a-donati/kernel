import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        firstName
        email
        savedKernels{
            submissionDate
            proud
            excite
            intention
            dayRating
        }
    }
}`;