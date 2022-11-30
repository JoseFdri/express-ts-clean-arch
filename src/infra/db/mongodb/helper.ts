import { MongoClient, Collection } from 'mongodb'

export const mongoHelper = {
    client: null as MongoClient,
    uri: null as string,

    async connect (uri: string): Promise<void> {
        this.uri = uri;
        this.client = await MongoClient.connect(uri);
    },

    async disconnect (): Promise<void> {
        await this.client.stop();
        this.client = null;
    },

    getCollection (name: string): Collection {
        return this.client.db().collection(name)
    },
}
