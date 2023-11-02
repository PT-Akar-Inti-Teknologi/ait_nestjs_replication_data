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
exports.AuthPermissionController = void 0;
const common_1 = require("@nestjs/common");
const auth_permissions_service_1 = require("./auth-permissions.service");
const save_permission_dto_1 = require("./dto/save-permission.dto");
const delete_permission_dto_1 = require("./dto/delete-permission.dto");
const nestjs_base_1 = require("@ait/nestjs-base");
let AuthPermissionController = class AuthPermissionController {
    constructor(authPermissionsService, responseService) {
        this.authPermissionsService = authPermissionsService;
        this.responseService = responseService;
    }
    async save(savePermissionDTO) {
        try {
            const result = await this.authPermissionsService.save(savePermissionDTO);
            return this.responseService.success(result);
        }
        catch (error) {
            common_1.Logger.error(error.message, '', this.constructor.name);
            this.responseService.throwError(error);
        }
    }
    async delete(deletePermissionDTO) {
        const result = await this.authPermissionsService.remove(deletePermissionDTO.role_id);
        return this.responseService.success(result);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_permission_dto_1.SavePermissionDTO]),
    __metadata("design:returntype", Promise)
], AuthPermissionController.prototype, "save", null);
__decorate([
    (0, common_1.Delete)('/:role_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_permission_dto_1.DeletePermissionDTO]),
    __metadata("design:returntype", Promise)
], AuthPermissionController.prototype, "delete", null);
AuthPermissionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_permissions_service_1.AuthPermissionsService,
        nestjs_base_1.ResponseService])
], AuthPermissionController);
exports.AuthPermissionController = AuthPermissionController;
//# sourceMappingURL=auth-permissions.controller.js.map