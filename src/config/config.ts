import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'student',
  password: 'student',
  database: 'kupipodariday',
  entities: [Student],
  synchronize: true,
};
