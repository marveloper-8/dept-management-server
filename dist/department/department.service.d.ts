import { Department } from "./entities/department.entity";
import { Repository } from "typeorm";
import { CreateDepartmentDto } from "./dto/create-department.dto";
export declare class DepartmentService {
    private departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    createDepartment(input: CreateDepartmentDto): Promise<Department>;
    getDepartments(limit: number, offset: number): Promise<Department[]>;
    updateDepartment(id: number, name: string): Promise<Department>;
    deleteDepartment(id: number): Promise<boolean>;
}
