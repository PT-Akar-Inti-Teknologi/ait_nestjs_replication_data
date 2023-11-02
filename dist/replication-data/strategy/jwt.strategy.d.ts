import { IUser } from '@ait/nestjs-base';
import { AuthPermissionsService } from '../permissions/auth-permissions.service';
import { AitAuthConfig } from '@ait/nestjs-base';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authPermissionsService;
    constructor(authPermissionsService: AuthPermissionsService, aitAuthConfig: AitAuthConfig);
    validate(payload: IUser): Promise<IUser>;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map