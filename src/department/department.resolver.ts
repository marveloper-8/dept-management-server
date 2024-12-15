import { Args, Mutation, Resolver, Query, Int } from "@nestjs/graphql";
import { Department } from "./entities/department.entity";
import { DepartmentService } from "./department.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateDepartmentDto } from "./dto/create-department.dto";

@Resolver(() => Department)
export class DepartmentResolver {
    constructor(private departmentService: DepartmentService) {}

    @Mutation(() => Department)
    @UseGuards(JwtAuthGuard)
    async createDepartment(@Args('input') input: CreateDepartmentDto) {
        return this.departmentService.createDepartment(input)
    }

    @Query(() => [Department])
    @UseGuards(JwtAuthGuard)
    async getDepartments() {
        return this.departmentService.getDepartments()
    }

    @Mutation(() => Department)
    @UseGuards(JwtAuthGuard)
    async updateDepartment(
        @Args('id', {type: () => Int}) id: number,
        @Args('name') name: string
    ) {
        return this.departmentService.updateDepartment(id, name)
    }

    @Mutation(() => Boolean)
    @UseGuards(JwtAuthGuard)
    async deleteDepartment(@Args('id', {type: () => Int}) id: number) {
        return this.departmentService.deleteDepartment(id)
    }
}