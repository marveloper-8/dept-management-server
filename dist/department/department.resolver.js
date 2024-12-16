"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const department_entity_1 = require("./entities/department.entity");
const department_service_1 = require("./department.service");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_department_dto_1 = require("./dto/create-department.dto");
let DepartmentResolver = class DepartmentResolver {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    async createDepartment(input) {
        return this.departmentService.createDepartment(input);
    }
    async getDepartments(limit, offset) {
        return this.departmentService.getDepartments(limit, offset);
    }
    async updateDepartment(id, name) {
        return this.departmentService.updateDepartment(id, name);
    }
    async deleteDepartment(id) {
        return this.departmentService.deleteDepartment(id);
    }
};
exports.DepartmentResolver = DepartmentResolver;
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_department_dto_1.CreateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "createDepartment", null);
__decorate([
    (0, graphql_1.Query)(() => [department_entity_1.Department]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('limit', { type: () => graphql_1.Int, nullable: true })),
    __param(1, (0, graphql_1.Args)('offset', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "getDepartments", null);
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "updateDepartment", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "deleteDepartment", null);
exports.DepartmentResolver = DepartmentResolver = __decorate([
    (0, graphql_1.Resolver)(() => department_entity_1.Department),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentResolver);
//# sourceMappingURL=department.resolver.js.map