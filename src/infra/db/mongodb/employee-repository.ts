import { AddEmployeeRepository, LoadEmployeesRepository } from "@/data/protocols";
import { mongoHelper } from '@/infra/db'

const COLLECTION_NAME = 'employees';

export class EmployeeRepository implements AddEmployeeRepository {
    async add (data: AddEmployeeRepository.Params): Promise<void> {
        const collections = mongoHelper.getCollection(COLLECTION_NAME);
        await collections.insertOne(data);
    };

    async load (): Promise<LoadEmployeesRepository.Result> {
        const collections = await mongoHelper.getCollection(COLLECTION_NAME)
                            .find({}).toArray() as any[];
        return collections;
    };
}