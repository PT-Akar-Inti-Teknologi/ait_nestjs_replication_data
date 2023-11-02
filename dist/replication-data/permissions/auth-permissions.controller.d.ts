import { AuthPermissionsService } from './auth-permissions.service';
import { SavePermissionDTO } from './dto/save-permission.dto';
import { DeletePermissionDTO } from './dto/delete-permission.dto';
import { ResponseService } from '@ait/nestjs-base';
import { ResponseSuccessSingleInterface } from '@ait/nestjs-base';
export declare class AuthPermissionController {
    private readonly authPermissionsService;
    private readonly responseService;
    constructor(authPermissionsService: AuthPermissionsService, responseService: ResponseService);
    save(savePermissionDTO: SavePermissionDTO): Promise<ResponseSuccessSingleInterface>;
    delete(deletePermissionDTO: DeletePermissionDTO): Promise<ResponseSuccessSingleInterface>;
}
//# sourceMappingURL=auth-permissions.controller.d.ts.map