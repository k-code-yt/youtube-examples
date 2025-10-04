import { Module } from '@nestjs/common';
import { TypeormOrder } from './entities/typeorder-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './typeorm.config';
import { TypeOrmOrderRepository } from './repositories/typeorm-order.repo';
import { IOrderRepository } from '../../../application/ports/order.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([TypeormOrder]),
  ],
  providers: [
    {
      provide: IOrderRepository,
      useClass: TypeOrmOrderRepository,
    },
  ],
  exports: [IOrderRepository],
})
export class TypeormPersistenceModule {}
