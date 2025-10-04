import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryPersistenceModule } from './persistence/in-memory/in-memory.module';
import { TypeormPersistenceModule } from './persistence/typeorm/typeorm.module';
import { BoostrapConfig } from '../../app.module';

@Module({})
export class OrderInfraModule {
  static use(driver: BoostrapConfig['driver']): DynamicModule {
    const persistenceModule =
      driver === 'in-memory'
        ? InMemoryPersistenceModule
        : TypeormPersistenceModule;

    return {
      module: OrderInfraModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
