import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department } from "./entities/department.entity";
import { Repository } from "typeorm";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { SubDepartment } from "./entities/sub-department.entity";

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>
    ) {}

    async createDepartment(input: CreateDepartmentDto): Promise<Department> {
        const department = this.departmentRepository.create({
            name: input.name,
            subDepartments: input.subDepartments?.map(sub => this.departmentRepository.manager.create(SubDepartment, {name: sub.name}))
        })

        return this.departmentRepository.save(department)
    }

    async getDepartments(): Promise<Department[]> {
        return this.departmentRepository.find()
    }

    async updateDepartment(id: number, name: string): Promise<Department> {
        const department = await this.departmentRepository.findOne({where: {id}})
        if (!department) {
            throw new NotFoundException('Department not found')
        }
        department.name = name;
        return this.departmentRepository.save(department)
    }

    async deleteDepartment(id: number): Promise<boolean> {
        const result = await this.departmentRepository.delete(id)
        return result.affected > 0
    }
}