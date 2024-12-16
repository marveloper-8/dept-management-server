export declare class CreateSubDepartmentDto {
    name: string;
}
export declare class CreateDepartmentDto {
    name: string;
    subDepartments?: CreateDepartmentDto[];
}
