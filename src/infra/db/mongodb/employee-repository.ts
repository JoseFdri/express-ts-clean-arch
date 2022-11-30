import { AddEmployeeRepository } from "@/data/protocols";
import { MongoHelper } from '@/infra/db'

export class EmployeeRepository implements AddEmployeeRepository {
    async add (data: AddEmployeeRepository.Params): Promise<void> {
        const collectionName = 'employees';
        const collections = MongoHelper.getCollection(collectionName);
        await collections.insertOne(data);
    };
}