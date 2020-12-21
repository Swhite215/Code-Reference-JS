import { withApollo } from 'react-apollo';
import { updateDataMutation, findDataQuery } from "./graphql-tag";


let job = await this.props.client.query({ query: findDataQuery, variables: { sampleID: 12345 } });

for (const sample of job.data.findData) {

    let sampleID = sample.SampleID;
    let firstName = sample.FirstName;
    let lastName = sample.LastName;
    let scientificName = sample.ScientificName;

}