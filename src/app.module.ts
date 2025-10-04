import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { OrderInfraModule } from './order/infrastructure/order-infrastructure.module';

export type BoostrapConfig = {
  driver: 'typeorm' | 'in-memory';
};

@Module({})
export class AppModule {
  static register(options: BoostrapConfig) {
    return {
      module: AppModule,
      imports: [OrderModule.withInfra(OrderInfraModule.use(options.driver))],
    };
  }
}
