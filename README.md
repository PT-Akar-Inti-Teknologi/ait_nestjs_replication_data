## AIT NestJS Base

This library contains common utilities that can be used to kickstart nestjs projects

## How to install

- Install [AIT base module](https://github.com/PT-Akar-Inti-Teknologi/ait_nestjs_base) (min. version 1.0.9), also follow the setup guide:
```
yarn add https://github.com/PT-Akar-Inti-Teknologi/ait-nestjs-base.git#tags/v1.0.9
```
- Install this module:
```
yarn add https://github.com/PT-Akar-Inti-Teknologi/ait_nestjs_replication_data.git#tags/v1.0.1
```

## How to Use

Register modules that were used by your project in app.module.ts, then available service will be available globally to be injected in any of Feature classes. See in available modules below to know how to register.

## Available Modules

## AitReplicationDataModule

Module that provide admin user and permission replication functionality to current microservice. It will define 2 controller that can be accessed using `${apiPrefix}/auth-permissions` and `${apiPrefix}/admins/users`

Note: this module is separated, and can be imported using @ait/nestjs-base/replication

### Setup AitReplicationDataModule

Add [AitDatabaseModule](#aitdatabasemodule) (must fill dbTablePrefix) and this module in your `app.module.ts` imports. this module is semi coupled with [AitDatabaseModule](#aitdatabasemodule), except you can initialize TypeORM default connection with table prefix, that's also acceptable

```ts
AitReplicationDataModule.register({
  apiPrefix: 'api/v1/internal/loyalties',
}),
```

### Usage AitReplicationDataModule

- you can use it's entity (User/Permission) anywhere in your app.
- you can expose it so the real AdminService can broadcast the data to your microservice