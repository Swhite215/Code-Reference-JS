import gql from 'graphql-tag';

const updateDataMutation = gql`
mutation ($inputFrag: SampleFrag) {
updateData(
    SampleData: $inputFrag
)
}`;

const findDataQuery = gql`
query ($sampleID: String!) {
    findData(
        SampleIDFilter: $sampleID,
    ){
        SampleID
        FirstName
        LastName
        ScientificName
    }
}`

export {
    updateDataMutation,
    findDataQuery
}