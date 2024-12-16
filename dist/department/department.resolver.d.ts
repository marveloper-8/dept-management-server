import { Department } from "./entities/department.entity";
import { DepartmentService } from "./department.service";
import { CreateDepartmentDto } from "./dto/create-department.dto";
export declare class DepartmentResolver {
    private departmentService;
    constructor(departmentService: DepartmentService);
    createDepartment(input: CreateDepartmentDto): Promise<Department>;
    getDepartments(limit?: number, offset?: number): Promise<Department[]>;
    updateDepartment(id: number, name: string): Promise<Department>;
    deleteDepartment(id: number): Promise<boolean>;
}
