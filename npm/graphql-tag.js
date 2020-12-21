import gql from 'graphql-tag';

const updateDataMutation = gql`
mutation ($inputFrag: SampleFrag) {
updateData(
    SampleData: $inputFrag
)
}`;

const findData = gql`
query ($sampleID: String!) {
    findData(
        SampleID: $sampleID,
    )
}`

export {
    updateDataMutation,
    findData
}