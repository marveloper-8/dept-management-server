import { SubDepartment } from "./sub-department.entity";
export declare class Department {
    id: number;
    name: string;
    subDepartments?: SubDepartment[];
}
