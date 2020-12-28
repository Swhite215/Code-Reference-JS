// Union

function padLeft(value: string, padding: string | number) {
    // ...
}

// Unions with Common Fields
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// CANT pet.swim();

// Discriminating Unions
type NetworkLoadingState = {
    state: "Loading";
}

type NetworkFailedState = {
    state: "Failed";
    code: number;
}

type NetworkSuccessState = {
    state: "Success";
    response: {
        title: string;
        duration: number;
        summary: string;
    }
}

type NetworkFromCachedState = {
    state: "from_cache";
    id: string;
    response: NetworkSuccessState["response"];
};

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState | NetworkFromCachedState;

function logger(state: NetworkState): string {
    switch(state.state) {
        case "Loading":
            return "Downloading...";
        case "Failed":
            return "Error"
        case "Success":
            return "Downloaded file!"
        case "from_cache":
            return "Returning cache"
        default:
            return assertNever(state);
    }
}

// Intersection Type
interface ErrorHandling {
    success: boolean;
    error?: {message: string};
}

interface ArtworksData {
    artworks: {title: string}[];
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;