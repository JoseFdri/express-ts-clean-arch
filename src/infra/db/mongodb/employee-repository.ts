import { AddEmployeeRepository } from "@/data/protocols";
import { mongoHelper } from '@/infra/db'

export class EmployeeRepository implements AddEmployeeRepository {
    async add (data: AddEmployeeRepository.Params): Promise<void> {
        const collectionName = 'employees';
        const collections = mongoHelper.getCollection(collectionName);
        await collections.insertOne(data);
    };
}